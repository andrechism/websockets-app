import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
`

export const Title = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
`

export const Unit = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: .25rem;
`

export const ValueWrapper = styled.div`
    
`

export const Value = styled.span`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
`