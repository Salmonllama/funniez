const {app, BrowserWindow} = require('electron')
const dj  = require('./endpoints/icanhazdadjoke')
const url = require('url')
const path = require('path')

let mainWindow

const appUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../index.html'),
    protocol: 'file:',
    slashes: true,
})

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 600, height: 400})

    mainWindow.loadURL(appUrl).catch(console.error)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

// dj.getJoke().then(joke => console.log(joke.toString()))

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})
