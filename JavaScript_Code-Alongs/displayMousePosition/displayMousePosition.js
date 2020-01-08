var isMouseTracking = false;

function updateMousePosition() {
	if (isMouseTracking) {
		var positionX = document.getElementByID("mousePositionX");
		positionX.innerText = event.clientX;
		var positionY = document.getElementByID("mousePositionY");
		positionY.innerText = event.clientY;
	}
}

function toggleTracking() {
	isMouseTracking = !isMouseTracking;
	
	if (isMouseTracking) {
		document.getElementByID("trackingStatus").innerText = "TRACKING";
	} else {
		document.getElementByID("trackingStatus").innerText = "NOT TRACKING";
	}
}