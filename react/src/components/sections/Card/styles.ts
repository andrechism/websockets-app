import styled from "styled-components"

export const Card = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background.secondary};
    width: ${({ theme }) => theme.sizes.card.width}px;
    min-height: ${({ theme }) => theme.sizes.card.height}px;
    
    & + & {
        margin: 1rem 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.sizes.breakpoints.tablet}px) {
        & + & {
            margin: 0 0 0 1rem;
        }
    }
`

export const Title = styled.h2`
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
    width: 100%;
    align-items: center;
    padding: .5rem;
    margin: 0;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
`

export const Description = styled.p`
    display: flex;
    align-items: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .75rem;
    padding: .5rem;
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
`
export const ContentWrapper = styled.div`
    position: relative;
    margin: auto;
`