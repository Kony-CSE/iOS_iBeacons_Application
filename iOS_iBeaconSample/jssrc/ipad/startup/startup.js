//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "iBeaconSample",
    appName: "iBeaconSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "iBeaconSample",
    isMFApp: false,
    eventTypes: [],
    url: "https://cognizantdigital-dev.konycloud.com/iBeaconSample/MWServlet",
    secureurl: "https://cognizantdigital-dev.konycloud.com/iBeaconSample/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmMainGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmMain.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;