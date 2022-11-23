import { vi } from "vitest"
import { EmptyCard } from "."
import { useSocket } from "../../../../contexts/socketContext"
import { render } from "../../../../tests/test-utils"

vi.mock('../../../../contexts/socketContext')

describe('EmptyCard component', () => {
    it('renders correctly when loading is false', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: null,
            connected: true,
            loading: false
        })

        const { getByText } = render(
            <EmptyCard />
        )

        expect(getByText(/No data available/i)).toBeInTheDocument()
    })

    it('renders correctly when loading is false', () => {
        vi.mocked(useSocket).mockReturnValueOnce({
            closeConnection: vi.fn(),
            createConnection: vi.fn(),
            socket: {} as WebSocket,
            data: null,
            connected: true,
            loading: true
        })

        const { getByText } = render(
            <EmptyCard />
        )

        expect(getByText(/Loading data.../i)).toBeInTheDocument()
    })
})