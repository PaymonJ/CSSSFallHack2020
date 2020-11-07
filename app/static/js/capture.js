var gum = mode => 
  navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment', aspectRatio: 4 / 3}})
  .then(stream => (video.srcObject = stream))
  .catch(e => log(e));

var stop = () => video.srcObject && video.srcObject.getTracks().map(t => t.stop());

var log = msg => div.innerHTML += "<p>" + msg + "</p>";