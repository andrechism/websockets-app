import { vi } from "vitest"
import { Deck } from "."
import { useSocket } from "../../../contexts/socketContext"
import { getAllByTestId, render } from "../../../tests/test-utils"
import { devices } from "../../../__mocks__/devices"

vi.mock('../../../contexts/socketContext')

vi.mock('react-apexcharts', () => ({
    default: () => <div data-testid="apex-chart" />
}))

describe('Deck component', () => {
    it('renders correctly', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: {
                last_updated: new Date().getTime(),
                devices
            },
            connected: true,
            loading: false
        })

        const { getByTestId } = render(
            <Deck />
        )

        expect(getByTestId('deck-component')).toBeInTheDocument()

    })

    
    it('renders chart cards', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: {
                last_updated: new Date().getTime(),
                devices
            },
            connected: true,
            loading: false
        })

        const { getByTestId } = render(
            <Deck />
        )

        expect(getByTestId('chart-card-component')).toBeInTheDocument()
    })

    it('renders value cards', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: {
                last_updated: new Date().getTime(),
                devices
            },
            connected: true,
            loading: false
        })

        const { baseElement } = render(
            <Deck />
        )

        const Elements = getAllByTestId(baseElement, "value-card-component")

        Elements.forEach((element) => {
            expect(element).toBeInTheDocument()
        })
    })
})