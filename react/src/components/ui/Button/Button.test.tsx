import { fireEvent, render } from '../../../tests/test-utils'
import { Button } from '.'
import { vi } from 'vitest'

describe('Button component', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Button onClick={() => { }}>
                Hello World
            </Button>
        )

        expect(getByText('Hello World')).toBeInTheDocument()
    })

    it('click works', () => {
        const handleClick = vi.fn()

        const { getByText } = render(
            <Button onClick={handleClick}>
                Hello World
            </Button>
        )

        fireEvent.click(getByText('Hello World'))

        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})