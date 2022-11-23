

const device = {
    _id: 'd_1',
    device_name: 'Heat and Humidity sensor',
    variables: [
        {
            _id: 'v_1',
            variable_name: 'Temperature',
            value: 22,
            unit: 'ºC',
            histories: [],
        },
        {
            _id: 'v_2',
            variable_name: 'Humidity',
            value: 90,
            unit: '%',
            histories: [],
        },
    ],
};

export const devices = [
    device
]