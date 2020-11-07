var front = false;

function startup() {
    console.log("hello")
    const constraints = {
        video: {facingMode: {exact: "environment"}},
    };

    const video = document.querySelector('video');

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video.srcObject = stream});
}

function changeCamera() {
    document.getElementById('flip-button').onclick = function() { front = !front; };
    var constraints = { video: { facingMode: (front? "user" : "environment") } };
    const video = document.querySelector('video');

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {video.srcObject = stream});
}