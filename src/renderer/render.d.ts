import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    electronApi: {
      setWindowSize: (type: string) => Electron.IpcRenderer
    }
    getConfig: () => Promise<{
      url: string
      wsUrl: string
      maxMsg: number
      chatUrl: string
    }>
  }
}
