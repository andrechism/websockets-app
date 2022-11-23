import { render } from '../../../tests/test-utils'
import { Status } from '.'

describe('Button component', () => {
    it('renders correctly when active', () => {
        const { getByText } = render(
            <Status active={true} />
        )

        expect(getByText(/ativa/i)).toBeInTheDocument()
    })

    it('renders correctly when inactive', () => {
        const { getByText } = render(
            <Status active={false} />
        )

        expect(getByText(/inativa/i)).toBeInTheDocument()
    })
})