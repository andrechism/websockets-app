import { Chart } from "."
import { render } from "../../../tests/test-utils"
import { vi } from 'vitest'

/**
 * There is a known bug that prevents testing ApexCharts using react-testing-library
 * and until now, the only known solution is to mock the chart, making this test useless. :(
 * 
 * -> https://github.com/apexcharts/react-apexcharts/issues/427
 * -> https://github.com/apexcharts/react-apexcharts/issues/425
 */

vi.mock('react-apexcharts', () => ({
    default: () => <div data-testid="apex-chart" />
}))

describe('Chart component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Chart
                series={[
                    {
                        name: 'Temperature',
                        data: [
                            {
                                x: new Date().getTime(),
                                y: 10
                            }
                        ]
                    },
                    {
                        name: 'Humidity',
                        data: [
                            {
                                x: new Date().getTime(),
                                y: 20
                            }
                        ]
                    }
                ]}
            />
        )

        expect(getByTestId('apex-chart')).toBeInTheDocument()
    })
})