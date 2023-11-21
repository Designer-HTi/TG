import { BrowserWindow } from 'electron'

export const setWindowSize = (event, type: string) => {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  switch (type) {
    case 'min':
      win?.minimize()
      break
    case 'max':
      win?.maximize()
      break
    case 'close':
      win?.close()
      break
    default:
      break
  }
}
