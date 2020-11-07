function startup() {
    const video = document.querySelector('video');

    navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment', aspectRatio: 4 / 3}})
    .then((stream) => {video.srcObject = stream});
}