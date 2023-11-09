/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectionKey } from 'vue'

export const ADD_DIALOG: InjectionKey<(options: DialogOptions) => void> = Symbol('addDialog')

type DialogOptions = {
  title: string
  component: unknown
  props?: object
  width: string
  visible?: boolean
  callBack?: (...args) => void
}
export const dialogList = reactive<DialogOptions[]>([])

export const addDialog = (options: DialogOptions) => {
  dialogList.push(Object.assign(options, { visible: true }))
}

export const closeDialog = (
  item: DialogOptions,
  i: number,
  isNativeClose?: boolean,
  args?: any
) => {
  dialogList.splice(i, 1)
  if (!isNativeClose) item.callBack && item.callBack(args)
}
