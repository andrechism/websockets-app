import express from 'express'
import WebSocket from 'ws'
import cors from 'cors'
import { devices } from './devices';

let customDevices = [
    ...devices
]

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json());

const server = app.listen(3333, () => {
    console.log(`Server running on port 3333!`);
})

function generateData(offset = 0) {
    const updatedDevices = customDevices.map((device) => {
        const updatedDeviceVariables = device.variables.map((variable) => {
            const newValue =  Math.floor(Math.random() * 40)
            const newTimestamp = new Date().getTime() - offset

            const newVariable = {
                ...variable,
                value: newValue,
                histories: [
                    ...variable.histories,
                    {
                        timestamp: newTimestamp,
                        value: newValue
                    }
                ].slice(-6)
            }

            return newVariable
        })

        const updatedDevice = {
            ...device,
            variables: updatedDeviceVariables
        }

        return updatedDevice
    })

    customDevices = updatedDevices
}

function sendData(client) {

    const dataToSend = {
        devices: customDevices,
        last_updated: new Date().getTime()
    }

    client.send(JSON.stringify(dataToSend));
}

function broadcast(clients) {
    if (!clients) return;
    generateData()

    clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            sendData(client)
        }
    });
}

// Generating initial data :P
generateData(40000)
generateData(30000)
generateData(20000)
generateData(10000)

const webSocketServer = (server) => {
    const wss = new WebSocket.Server({
        server
    });

    setInterval(() => {
        broadcast(wss.clients)
    }, 10000) // 10 secs

    console.log(`Web socket server is running!`);
}

webSocketServer(server);