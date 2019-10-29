var  positionOnGlobe = { longitude: 2.418159, latitude: 48.846182, altitude: 1000 }
var time = 5500;
var pathTravel = [];
var promises = [];
//camera position based on user's geolocation
var FizzyText = function() {

    this.YourPosition = function () {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    this.positionOnGlobe = { longitude: /*2.423554*/position.coords.longitude, latitude: /*48.845759,*/ position.coords.latitude, altitude: 1000 };
    pathTravel.push({ coord: new itowns.Coordinates('EPSG:4326', positionOnGlobe.longitude, positionOnGlobe.latitude ), range: 1000, time: time * 0.2 });

    })

    var camera = view.camera.camera3D;
    itowns.CameraUtils.sequenceAnimationsToLookAtTarget(view, camera, pathTravel);

}
  
};