import { ValueCard } from "."
import { render } from "../../../../tests/test-utils"

describe('ValueCard component', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <ValueCard
                lastValue={20}
                unit='%'
                variableName="Variable Name"
            />
        )

        expect(getByText(/Variable Name/i)).toBeInTheDocument()
    })
})