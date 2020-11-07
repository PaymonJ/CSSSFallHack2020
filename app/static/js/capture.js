const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const takePhotoButton = document.getElementById("takePhotoButton");
const retakePhotoButton = document.getElementById("retakePhotoButton");
const evaluate = document.getElementById("evaluate");

function startup() {
    navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment', aspectRatio: 4 / 3}})
    .then((stream) => {video.srcObject = stream});
}

function takePhoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0);

    video.style.display = "none";
    takePhotoButton.style.display = "none";
    canvas.style.display = "inline";
    retakePhotoButton.style.display = "inline";
    evaluate.style.display = "inline";
}

function retakePhoto() {
    video.style.display = "inline";
    takePhotoButton.style.display = "inline";
    canvas.style.display = "none";
    retakePhotoButton.style.display = "none";
    evaluate.style.display = "none";
}