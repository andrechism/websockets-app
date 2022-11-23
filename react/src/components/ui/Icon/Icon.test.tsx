import { Icon } from "."
import { render } from "../../../tests/test-utils"

describe('Icon component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Icon
                name="site-logo"
            />
        )
        
        expect(getByTestId('svg-use-element')).toHaveAttribute('href', '/icons.svg#site-logo')
    })
})