import { join } from 'path'
import { format } from 'url'

import { BrowserWindow, app, ipcMain } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

let mainWindow: BrowserWindow;
let player: BrowserWindow;

app.on('ready', async () => {
  await prepareNext('./renderer')

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js'),
    },
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: join(__dirname, '../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
    });

  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit);

ipcMain.addListener('spawnWindow', (_, args) => {
  console.log(args[0]);

  player = new BrowserWindow({
    width: 600, 
    height: 350,
    alwaysOnTop: true,
    frame: true,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js')
    }  
  });
  
  player.setAspectRatio(10/5);

  const player_url = isDev
    ? 'http://localhost:8000/video?id='+args[0]
    : format({
        pathname: join(__dirname, '../renderer/out/video.html?id='+args[0]),
        protocol: 'file:',
        slashes: true,
  });

  mainWindow.hide();
  player.loadURL(player_url);
  player.show();
  
  player.webContents.on('will-navigate', (event) => {
    event.preventDefault()
  });

  player.webContents.on('new-window', (event) => {
    event.preventDefault();
  });

  player.on('close', () => mainWindow.show());
});