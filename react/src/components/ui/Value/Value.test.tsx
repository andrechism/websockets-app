import { Value } from "."
import { render } from "../../../tests/test-utils"

describe('Value component', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Value
                unit="%"
                value={30}
            />
        )

        expect(getByText(/30/i)).toBeInTheDocument()
    })
})