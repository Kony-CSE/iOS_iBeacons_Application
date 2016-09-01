/*
 *
 *  
 */
function monitoringCallback(beaconRegion, beaconRegionState) {
    kony.print("BeaconRegion: ", kony.type(beaconRegion), " ", beaconRegion, " state is: ", beaconRegionState);
    if (beaconRegionState == "BeaconRegionStateInside") {
        beaconManager.startRangingBeaconsInRegion(beaconRegion);
    }
}
/*
 * 
 * 
 */
function rangingCallback(beaconRegion, beacons) {
    kony.print("Beacons found for BeaconRegion: ", kony.type(beaconRegion), " ", beaconRegion, " Beacons: ", beacons);
    var beaconLabel = "No beacons";
    var proximityLabel = "...";
    if (beacons.length > 0) {
        beacon = beacons[0];
        kony.print("Beacon proximityUUIDString:", beacon.proximityUUIDString());
        kony.print("Beacon major:", beacon.major());
        kony.print("Beacon minor:", beacon.minor());
        kony.print("Beacon proximity:", beacon.proximity());
        kony.print("Beacon accuracy:", beacon.accuracy());
        kony.print("Beacon rssi:", beacon.rssi());
        beaconLabel = beacon.proximityUUIDString() + " " + beacon.major() + " " + beacon.minor();
        proximityLabel = beacon.proximity();
    }
    frmMain.label1044569050127.text = beaconLabel;
    frmMain.label10445690506.text = proximityLabel;
}
/*
 *
 *  
 */
function errorCallback(beaconManagerError, errorName, errorInfo, beaconRegion) {
    kony.print("Error occurred: ", beaconManagerError, " Error Name: ", errorName, " erorrInfo: ", errorInfo);
    if (beaconRegion) {
        kony.print("For Region: ", kony.type(beaconRegion), " ", beaconRegion);
    }
}
/*
 *
 *  
 */
function monitoringStartedForRegionCallback(beaconRegion) {
    kony.print("Monitoring started for region: ", kony.type(beaconRegion), " ", beaconRegion);
}
/*
 *
 *  
 */
function authorizationStatusChangedCallback(status) {
    kony.print("Location Authorization status changed to: ", status);
}
/*
 * 
 * 
 */
function locate_iBeacons() {
    beaconManager = new com.kony.BeaconManager(monitoringCallback, rangingCallback, errorCallback);
    beaconManager.setMonitoringStartedForRegionCallback(monitoringStartedForRegionCallback);
    beaconManager.setAuthorizationStatusChangedCallback(authorizationStatusChangedCallback);
    /* 
 	"BeaconManagerAuthorizationStatusNotDetermined" 
    "BeaconManagerAuthorizationStatusRestricted"
    "BeaconManagerAuthorizationStatusDenied"
    "BeaconManagerAuthorizationStatusAuthorized"
    */
    if (beaconManager.authorizationStatus() != "BeaconManagerAuthorizationStatusAuthorized") {
        kony.print("Unathorized to use location services");
        //return;
    }
    if (!beaconManager.isMonitoringAvailableForBeaconRegions()) {
        kony.print("Monitoring not available");
        return;
    }
    if (!beaconManager.isRangingAvailableForBeaconRegions()) {
        kony.print("Ranging not available");
        return;
    }
    var proximityUUID = "FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45";
    var major = 10;
    var minor = 12;
    var identifier = "KonyBeaconSample"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
    beaconManager.startMonitoringBeaconRegion(beaconRegion);
}
/*
 *
 *  
 */
function stateUpdatedCallback(state) {
    kony.print("Peripheral manager state updated to: " + state);
}
/*
 *
 *  
 */
function advertisingStatusCallback(errorName, errorObject) {
    if (errorName) {
        kony.print("Error occurred: " + errorName + " Info: " + errorObject);
    } else {
        kony.print("Adverising started successfully");
    }
}
/*
 *  
 * 
 */
function turn_device_into_iBeacon() {
    var peripheralManager = new com.kony.PeripheralManager(stateUpdatedCallback, advertisingStatusCallback);
    var proximityUUID = "FBA1FFE5-7CD6-451B-8F1F-22B2AC70AA45";
    var major = 10;
    var minor = 12;
    var identifier = "KonyBeaconSample"
    var beaconRegion = new com.kony.BeaconRegion(proximityUUID, major, minor, identifier);
    /*
	"PeripheralManagerAuthorizationStatusDetermined"
	"PeripheralManagerAuthorizationStatusRestricted"
	"PeripheralManagerAuthorizationStatusDenied"
	"PeripheralManagerAuthorizationStatusAuthorized"
	*/
    if (peripheralManager.authorizationStatus() != "PeripheralManagerAuthorizationStatusAuthorized") {
        kony.print("Unathorized to use peripheral manager");
        //return;
    }
    peripheralManager.startAdvertisingWithMeasuredPower(beaconRegion, 0);
}