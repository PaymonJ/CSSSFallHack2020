function startup() {
    const img = document.querySelector('#screenshot img');
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment', aspectRatio: 4 / 3}})
    .then((stream) => {video.srcObject = stream});
}

function takePhoto() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0);
}