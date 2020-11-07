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
    canvas.style.display = "block";
    retakePhotoButton.style.display = "block";
    evaluate.style.display = "block";
}

function retakePhoto() {
    video.style.display = "block";
    takePhotoButton.style.display = "block";
    canvas.style.display = "none";
    retakePhotoButton.style.display = "none";
    evaluate.style.display = "none";
}