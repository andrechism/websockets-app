import  { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { MessageEventData } from "../types/messageEventData";

const SOCKET_URL = 'ws://localhost:3333'

type SocketContextData = {
    socket: InstanceType<typeof WebSocket>
    connected: boolean
    loading: boolean
    data: MessageEventData | null
    closeConnection: () => void
    createConnection: () => void
}

type SocketContextProps = {
    children: ReactNode
}

const SocketContext = createContext({} as SocketContextData);

export const SocketProvider: FC<SocketContextProps> = ({
    children
}) => {

    const [socket, setSocket] = useState(new WebSocket(SOCKET_URL))
    const [connected, setConnected] = useState(false)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<MessageEventData | null>(null)

    

    console.log("socket: ", socket)

    const handleClose = useCallback(() => {
        socket.close()
        setData(null)
        setLoading(false)
    }, [socket])

    const handleConnection = () => {
        const newSocket = new WebSocket(SOCKET_URL)
        setSocket(newSocket)
        setLoading(true)
    }

    const value: SocketContextData = {
        socket,
        connected,
        loading,
        data,
        closeConnection: handleClose,
        createConnection: handleConnection,
    }

    const onClose = useCallback(() => {
        console.log("socket closed!")
        setConnected(false)
    }, [])

    const onConnection = useCallback(() => {
        console.log("socket connected!")
        setConnected(true)
    }, [])

    const onMessage = useCallback((e: MessageEvent) => {
        const data: MessageEventData = JSON.parse(e.data)

        setData(data)
        setLoading(false)
    }, [])

    useEffect(() => {
        socket.addEventListener('close', onClose)
        socket.addEventListener('open', onConnection)
        socket.addEventListener('message', onMessage)
        
        return () => {
            socket.removeEventListener('close', onClose)
            socket.removeEventListener('close', onConnection)
            socket.removeEventListener('message', onMessage)
        }
    }, [socket])

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => useContext(SocketContext)