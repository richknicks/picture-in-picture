const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const captureButton = document.getElementById('capture-button');
const capbutdiv = document.getElementById('capbutdiv');
const butdiv = document.getElementById('butdiv');
const displayMediaOptions = {
    video: {
      displaySurface: "browser",
    },
    audio: {
      suppressLocalAudioPlayback: false,
    },
    preferCurrentTab: false,
    selfBrowserSurface: "exclude",
    systemAudio: "include",
    surfaceSwitching: "include",
    monitorTypeSurfaces: "include",
  };
  
// Prompt select media stream, pass to video element, then play

const selectMediaStream = async(displayMediaOptions) => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('whoops, error here:', error)
    }
}

// On Click Handler
captureButton.addEventListener('click', ()=> {
    selectMediaStream();
    capbutdiv.hidden = true;
    butdiv.hidden = false;
});
button.addEventListener('click', async () => {
    // Disable Button
    video.hidden = false;
    button.disabled = false;
    
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    
    butdiv.hidden = true;
    capbutdiv.hidden = false;
    button.disable = false;
});

//  On Load
selectMediaStream();