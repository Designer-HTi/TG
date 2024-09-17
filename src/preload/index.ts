import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'
import { SET_WINDOW_SIZE } from '../main/constants'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('electronApi', {
      setWindowSize: (type: string) => ipcRenderer.send(SET_WINDOW_SIZE, type)
    })
    contextBridge.exposeInMainWorld('getConfig', async () => {
      return await ipcRenderer.sendSync('getConfig')
    })
  } catch (error) {
    // console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
