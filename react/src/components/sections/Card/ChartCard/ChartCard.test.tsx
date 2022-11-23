import { vi } from "vitest"
import { ChartCard } from "."
import { render } from "../../../../tests/test-utils"

vi.mock('react-apexcharts', () => ({
    default: () => <div data-testid="apex-chart" />
}))

describe('ChartCard component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <ChartCard
                device={{
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
                        }
                    ]
                }}
                lastUpdated={new Date().getTime()}
            />

            )
            expect(getByTestId('chart-card-component')).toBeInTheDocument()
    })
})