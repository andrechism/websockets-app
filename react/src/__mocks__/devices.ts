const devices = [
    {
        _id: "d_1",
        device_name: 'Device Name',
        variables: [
            {
                _id: 'v_1',
                unit: "%",
                value: 10,
                variable_name: 'Variable Name',
                histories: [
                    {
                        timestamp: new Date().getTime(),
                        value: 10,
                    }
                ]
            },
            {
                _id: 'v_2',
                unit: "%",
                value: 20,
                variable_name: 'Variable Name 2',
                histories: [
                    {
                        timestamp: new Date().getTime(),
                        value: 20,
                    }
                ]
            }
        ]
    }
]

export {
    devices
}