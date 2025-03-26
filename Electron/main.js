import {app,BrowserWindow} from 'electron'
function createWindow() {
  const win = new BrowserWindow({
      minWidth: 1000,
      minHeight: 900,
      autoHideMenuBar:true,
      webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
      }
  })
 
  win.loadURL('http://localhost:5173/');
}
 
app.whenReady().then(()=>{
  createWindow()
 
  app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length==0){
      createWindow();
    }
  })
})
 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
      app.quit()
  }
})
 