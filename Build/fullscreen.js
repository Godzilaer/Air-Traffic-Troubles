var unityCanvas = document.getElementById("unity-canvas");

function openFullscreen() {
    if (unityCanvas.requestFullscreen) {
        unityCanvas.requestFullscreen();
    } else if (unityCanvas.webkitRequestFullscreen) { /* Safari */
        unityCanvas.webkitRequestFullscreen();
    } else if (unityCanvas.msRequestFullscreen) { /* IE11 */
        unityCanvas.msRequestFullscreen();
    }
}