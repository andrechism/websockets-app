import { Spinner } from "."
import { render } from "../../../tests/test-utils"

describe('Spinner component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Spinner />
        )

        expect(getByTestId('spinner-component')).toBeInTheDocument()
    })
})