import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    @media screen and (min-width: ${({ theme }) => theme.sizes.breakpoints.tablet}px) {
        flex-direction: row;
        align-items: unset;
    }
`