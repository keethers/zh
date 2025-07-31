// One-command Exotica Organizer: sorts, dedupes, and auto-unzips
import fs from 'fs';
import path from 'path';
import unzipper from 'unzipper';
import crypto from 'crypto';

const TARGET_FOLDERS = {
  js: 'components',
  jsx: 'components',
  tsx: 'components',
  json: 'utils',
  png: 'public',
  jpg: 'public',
  jpeg: 'public',
  svg: 'public',
  md: 'docs',
};

function hashFile(filePath) {
  const data = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(data).digest('hex');
}

export default async function organizeSystem(shouldClean = true) {
  const root = process.cwd();
  const seenHashes = new Set();
  let filesProcessed = 0;

  async function walk(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await walk(fullPath);
      } else {
        const ext = path.extname(entry).replace('.', '').toLowerCase();
        const baseName = path.basename(fullPath);

        if (fullPath.includes('node_modules') || baseName.startsWith('.') || baseName === 'package-lock.json') continue;

        if (ext === 'zip') {
          const unzipPath = path.join(dir, '__unzipped_' + path.basename(entry, '.zip'));
          fs.mkdirSync(unzipPath, { recursive: true });
          await fs.createReadStream(fullPath)
            .pipe(unzipper.Extract({ path: unzipPath }))
            .promise();
          await walk(unzipPath);
          continue;
        }

        try {
          const hash = hashFile(fullPath);
          if (shouldClean && seenHashes.has(hash)) {
            fs.unlinkSync(fullPath); // remove duplicate
            continue;
          }
          seenHashes.add(hash);

          const folder = TARGET_FOLDERS[ext] || 'misc';
          const destFolder = path.join(root, folder);
          if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

          const destPath = path.join(destFolder, path.basename(fullPath));
          fs.renameSync(fullPath, destPath);
          filesProcessed++;
        } catch (err) {
          console.warn(`Skipped: ${fullPath}`);
        }
      }
    }
  }

  await walk(root);
  console.log(`✅ Organized ${filesProcessed} files. Clean and sorted.`);
}

// Trigger if run directly
if (require.main === module) {
  organizeSystem(true);
}
