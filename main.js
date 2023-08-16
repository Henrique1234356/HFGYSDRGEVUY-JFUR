var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

//Escreva o código da function(event)
recognition.onresult = function(event){
    Content = event.results[0][0].transcript.toLowerCase();
    if (Content == "selfie"){
        speak();
    }
}


function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


    setTimeout(function()
    { 
        imgId = "selfie1";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 10 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);

      }, 5000);

    setTimeout(function()
    { 
        imgId = "selfie2";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 15 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        
    }, 10000);

    setTimeout(function()
    { 
        imgId = "selfie3";
        takeSelfie(); 

    }, 15000);

}

//Configure a câmera

camera = document.getElementById("camera");
Webcam.set({
   width: 500,
   height: 400,
   image_format: 'jpeg',
   jpeg_quality: 90 
});
function takeSelfie()
{
    console.log(imgId);
    
    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
