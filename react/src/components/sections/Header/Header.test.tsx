import { Header } from "."
import { render } from "../../../tests/test-utils"

describe('Header component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Header />
        )

        expect(getByTestId('header-component')).toBeInTheDocument()
    })
})