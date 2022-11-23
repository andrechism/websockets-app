import { vi } from "vitest"
import { Controls } from "."
import { useSocket } from "../../../contexts/socketContext"
import { fireEvent, render } from "../../../tests/test-utils"

vi.mock('../../../contexts/socketContext')

describe('Controls component', () => {
    it('renders correctly', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: null,
            connected: false,
            loading: false
        })

        const { getByText } = render(
            <Controls />
        )

        expect(getByText(/Ativar/)).toBeInTheDocument()
    })

    it('calls closeConnection after click when connected', () => {
        const closeConnection = vi.fn()

        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: closeConnection,
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: null,
            connected: true,
            loading: false
        })

        const { getByText } = render(
            <Controls />
        )

        fireEvent.click(getByText(/Socket/i))

        expect(closeConnection).toHaveBeenCalledTimes(1)
    })

    it('calls closeConnection after click when not connected', () => {
        const createConnection = vi.fn()

        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: createConnection,
            socket: {} as WebSocket,
            data: null,
            connected: false,
            loading: false
        })

        const { getByText } = render(
            <Controls />
        )

        fireEvent.click(getByText(/Socket/i))

        expect(createConnection).toHaveBeenCalledTimes(1)
    })
})