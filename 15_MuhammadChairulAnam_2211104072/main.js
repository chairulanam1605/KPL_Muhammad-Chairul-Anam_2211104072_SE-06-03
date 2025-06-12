const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 550,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Pertama kali buka halaman login
    win.loadFile('pages/login.html');
    remoteMain.enable(win.webContents);

}

const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});