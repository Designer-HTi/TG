import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    electronApi: {
      setWindowSize: (type: string) => Electron.IpcRenderer
    }
  }
}
