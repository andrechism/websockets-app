type HistoriesData = {
    timestamp: number
    value: number
}

type VariablesData = {
    _id: string
    variable_name: string
    unit: string
    value: number
    histories: HistoriesData[]
}

export type DeviceData = {
    _id: string
    device_name: string
    variables: VariablesData[]
}

