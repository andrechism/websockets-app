import { DeviceData } from "./deviceData"

export type MessageEventData = {
    devices: DeviceData[],
    last_updated: number
}