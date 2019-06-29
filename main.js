const {app, BrowserWindow} = require('electron');
const {ipcMain, dialog} = require("electron");
const path = require('path');
const url = require('url');
const setupEvents = require('./setupEvents');

if (setupEvents.handleSquirrelEvent()) {
    console.log("done handleSquirrelEvent")
}

let win;

// ----- APP ----- \\
app.on('ready', createMainWindow);

app.on('window-all-closed', function () {
    app.quit()
});

// ----- Window ----- \\
function createMainWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 400,
        backgroundColor: '#ffffff',
        frame: false
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'html/app.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.setResizable(false);

    win.on('closed', function () {
        win = null
    })
}