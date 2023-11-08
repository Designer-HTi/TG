import mitt, { Emitter } from 'mitt'
import { MittEvents } from './types/mitt'

const mitts: Emitter<MittEvents> = mitt<MittEvents>()

export default mitts
