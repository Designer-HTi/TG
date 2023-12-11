import Store from 'electron-store'

// 定义存储的数据类型
interface AppSettings {
  url: string
  wsUrl: string
  // 添加其他需要存储的属性
}

class ElectronStoreWrapper {
  private store: Store<AppSettings>

  constructor() {
    // 在这里添加你的默认设置
    const defaults: AppSettings = {
      url: 'http://127.0.0.1',
      wsUrl: 'http://127.0.0.1/message'
      // 添加其他默认设置
    }

    // 创建 Electron Store 实例
    this.store = new Store({ defaults })
  }

  // 获取存储中的所有设置
  getAllSettings(): AppSettings {
    return this.store.store
  }

  // 获取特定设置
  getSetting(key: keyof AppSettings): AppSettings[keyof AppSettings] | undefined {
    return this.store.get(key)
  }

  // 设置特定设置
  setSetting(key: keyof AppSettings, value: AppSettings[keyof AppSettings]): void {
    this.store.set(key, value)
  }

  // 删除特定设置
  deleteSetting(key: keyof AppSettings): void {
    this.store.delete(key)
  }
}

// 导出单例
export const electronStore = new ElectronStoreWrapper()
