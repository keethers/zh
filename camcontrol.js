// CamControl.js – Camera access and control module (remote or local)
export function activateCamControl(mode = 'selfie') {
  const permissions = ['video', 'audio'];
  const cameraMode = mode === 'surveillance' ? 'back' : 'front';

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.autoplay = true;
      video.style.position = 'absolute';
      video.style.top = '10px';
      video.style.right = '10px';
      video.style.width = '160px';
      video.style.border = '2px solid lime';
      document.body.appendChild(video);
      console.log(`🎥 CamControl: ${cameraMode} camera active`);
    })
    .catch(err => console.error('CamControl Error:', err));
}
