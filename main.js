const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    // Create Browser Window
    win = new BrowserWindow({width:1300, height:950, icon:__dirname+'images/favicon.ico', autoHideMenuBar: true});
    
    // Load home.html
    win.loadURL(url.format({ 
        pathname: path.join(__dirname, 'home-master.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open DevTools
    // win.webContents.openDevTools();
    

    win.on('closed', () => {
        win = null;
    });
}

// Run Create Window Function
app.on('ready', createWindow);

// Quit when all window are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});