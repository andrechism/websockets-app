import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border: 1px solid red;
    padding: .5rem 1.25rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background.secondary};
    border: 1px solid ${({ theme }) => theme.colors.warning};
    border-radius: 4px;
`