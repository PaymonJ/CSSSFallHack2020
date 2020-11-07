function takePhoto() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    canvas.getContext('2d').drawImage(video, 0, 0);
}