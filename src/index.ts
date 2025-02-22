import { app, BrowserWindow } from 'electron';

app.on('ready', () => {
    console.log('App is ready');
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    console.log('Window loaded');
    win.loadFile('./build/index.html');
});


