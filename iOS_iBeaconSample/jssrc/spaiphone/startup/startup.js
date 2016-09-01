//startup.js file
var appConfig = {
    appId: "iBeaconSample",
    appName: "iBeaconSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://127.0.0.1:80/middleware/MWServlet",
    secureurl: "https://127.0.0.1:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmMainGlobals();
    //to generate adherePercentageStrictly, retainSpace, marginPaddingConsistency flags as true if the project is created in 5.5
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
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};