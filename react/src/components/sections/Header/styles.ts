import styled from "styled-components"
import { Icon } from "../../ui/Icon"

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.colors.background.tertiary};
    padding: 1rem;
`

export const Logo = styled(Icon)`
    color: #ffffff;
`