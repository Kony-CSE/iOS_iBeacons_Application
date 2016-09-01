beaconManager = null;
/*
 *
 *  
 */
function monitoringCallback(beaconRegion, beaconRegionState) {
    kony.print("monitoringCallback inside: ");
    //alert("BeaconRegion: "+ kony.type(beaconRegion)+ " "+ beaconRegion+ " state is: "+ beaconRegionState);
    // kony.print("BeaconRegion: "+ kony.type(beaconRegion)+ " "+ beaconRegion+ " state is: "+ beaconRegionState);
    if (beaconRegionState == "BeaconRegionStateInside") {
        kony.print("BeaconRegion inside: ");
        beaconManager.startRangingBeaconsInRegion(beaconRegion);
    }
}
/*
 * 
 * 
 */
function rangingCallback(beaconRegion, beacons) {
    alert("in ranging callback");
    //alert("Beacons found for BeaconRegion: "+ kony.type(beaconRegion)+ " "+ beaconRegion+ " Beacons: "+ beacons);
    //  kony.print("Beacons found for BeaconRegion: "+ kony.type(beaconRegion)+ " "+ beaconRegion+ " Beacons: "+ beacons);
    var beaconLabel = "No beacons";
    var proximityLabel = "...";
    if (beacons.length > 0) {
        beacon = beacons[0];
        alert("Beacon proximityUUIDString:" + beacon.getProximityUUIDString());
        kony.print("Beacon proximityUUIDString:" + beacon.getProximityUUIDString());
        kony.print("Beacon major:" + beacon.getMajor());
        kony.print("Beacon minor:" + beacon.getMinor());
        kony.print("Beacon proximity:" + beacon.getProximity());
        kony.print("Beacon accuracy:" + beacon.getAccuracy());
        kony.print("Beacon rssi:" + beacon.getrssi());
        beaconLabel = beacon.getProximityUUIDString() + " " + beacon.getMajor() + " " + beacon.getMinor();
        proximityLabel = beacon.getProximity();
    }
    frmMain.label1044569050127.text = beaconLabel;
    frmMain.label10445690506.text = proximityLabel;
}
/*
 *
 *  
 */
function errorCallback(beaconManagerError, errorName, errorInfo, beaconRegion) {
    alert("Error occurred: " + beaconManagerError + " Error Name: " + errorName + " erorrInfo: " + JSON.stringify(errorInfo));
    kony.print("Error occurred: " + beaconManagerError + " Error Name: " + errorName + " erorrInfo: " + errorInfo);
    if (beaconRegion) {
        alert("For Region: " + kony.type(beaconRegion) + " " + beaconRegion);
        //    kony.print("For Region: "+ kony.type(beaconRegion)+ " "+ beaconRegion);
    }
}
/*
 *
 *  
 */
function monitoringStartedForRegionCallback(beaconRegion) {
    alert("Monitoring started for region: ");
    // alert("Monitoring started for region: "+ kony.type(beaconRegion)+ " "+beaconRegion);
    //  kony.print("Monitoring started for region: "+ kony.type(beaconRegion)+ " "+ beaconRegion);
}
/*
 *
 *  
 */
function authorizationStatusChangedCallback(status) {
    alert("Location Authorization status changed to: " + status);
    kony.print("Location Authorization status changed to: " + status);
}

function determineAuthorizationStatus() {
    if (beaconManager == null) {
        beaconManager = new com.kony.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
        beaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback);
        beaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChangedCallback);
    }
    /* 
 	"BeaconManagerAuthorizationStatusNotDetermined" 
    "BeaconManagerAuthorizationStatusRestricted"
    "BeaconManagerAuthorizationStatusDenied"
    "BeaconManagerAuthorizationStatusAuthorized"
    */
    alert("Status : " + beaconManager.authorizationStatus());
    kony.print("Status : " + beaconManager.authorizationStatus());
    if (beaconManager.isMonitoringAvailableForBeaconRegions()) {
        alert("Monitoring available");
        kony.print("Monitoring available");
    } else {
        alert("Monitoring NOT available");
        kony.print("Monitoring NOT available");
    }
    if (beaconManager.isRangingAvailableForBeaconRegions()) {
        alert("Ranging available");
        kony.print("Ranging available");
    } else {
        alert("Ranging NOT available");
        kony.print("Ranging NOT available");
    }
    var proximityUUID = "4FDF89EE-A88F-AB55-F6F4-95CCB1A2FFDA";
    var major = 14;
    var minor = 18;
    var identifier = "KonyBeaconSample"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
    beaconManager.startMonitoringBeaconRegion(beaconRegion);
}
/*
 * 
 * 
 */
function locate_iBeacons() {
    if (beaconManager == null) {
        beaconManager = new com.kony.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
        beaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback);
        beaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChangedCallback);
    }
    /* 
 	"BeaconManagerAuthorizationStatusNotDetermined" 
    "BeaconManagerAuthorizationStatusRestricted"
    "BeaconManagerAuthorizationStatusDenied"
    "BeaconManagerAuthorizationStatusAuthorized"
    */
    alert("beaconManager.authorizationStatus:" + beaconManager.authorizationStatus());
    if (beaconManager.authorizationStatus() != "BeaconManagerAuthorizationStatusAuthorized") {
        alert("Unathorized to use location services");
        kony.print("Unathorized to use location services");
        //return;
    }
    if (!beaconManager.isMonitoringAvailableForBeaconRegions()) {
        alert("Monitoring not available");
        kony.print("Monitoring not available");
        return;
    }
    if (!beaconManager.isRangingAvailableForBeaconRegions()) {
        alert("Ranging not available");
        kony.print("Ranging not available");
        return;
    }
    var proximityUUID = "4FDF89EE-A88F-AB55-F6F4-95CCB1A2FFDA";
    var identifier = "KonyBeaconSample"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, null, null, identifier);
    beaconManager.startMonitoringBeaconRegion(beaconRegion);
}
/*
 *
 *  
 */
function stateUpdatedCallback(state) {
    alert("Peripheral manager state updated to: " + state);
    kony.print("Peripheral manager state updated to: " + state);
}
/*
 *
 *  
 */
function advertisingStatusCallback(errorName, errorObject) {
    if (errorName) {
        alert("Error occurred: " + errorName + " Info: " + JSON.stringify(errorObject));
        kony.print("Error occurred: " + errorName + " Info: " + errorObject);
    } else {
        alert("Adverising started successfully");
        kony.print("Adverising started successfully");
    }
}
/*
 *  
 * 
 */
function turn_device_into_iBeacon() {
    frmMain.lblUUId.text = JSON.stringify(kony.os.deviceInfo());
    var peripheralManager = new com.kony.PeripheralManager(stateUpdatedCallback, advertisingStatusCallback);
    var proximityUUID = "4FDF89EE-A88F-AB55-F6F4-95CCB1A2FFDA";
    var major = 14;
    var minor = 18;
    var identifier = "KonyBeaconSample"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
    /*
	"PeripheralManagerAuthorizationStatusDetermined"
	"PeripheralManagerAuthorizationStatusRestricted"
	"PeripheralManagerAuthorizationStatusDenied"
	"PeripheralManagerAuthorizationStatusAuthorized"
	*/
    if (peripheralManager.authorizationStatus() != "PeripheralManagerAuthorizationStatusAuthorized") {
        alert("authorizationStatus:" + peripheralManager.authorizationStatus());
        kony.print("Unathorized to use peripheral manager");
        //return;
    }
    peripheralManager.startAdvertisingWithMeasuredPower(beaconRegion, null);
}