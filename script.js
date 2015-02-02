alert("hey");
navigator.getUserMedia ||
      (navigator.getUserMedia = navigator.mozGetUserMedia ||
      navigator.webkitGetUserMedia || navigator.msGetUserMedia);


var streams={
    video:true,
    audio:true
};



if(navigator.getUserMedia)
{
    navigator.getUserMedia({
        streams,onSuccess,onError);
}else {
    alert('getUserMedia is not supported in this browser');
}

function onSuccess()
{
    alert('Successful');
}
function onError(){
    alert("There has been a problem inintilaizing the video and audio feed : Did you allow access ?");
}

