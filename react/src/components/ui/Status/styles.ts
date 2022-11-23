import styled from "styled-components"

type StatusIndicatorProps = {
    active?: boolean
}

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StatusIndicator = styled.div<StatusIndicatorProps>`
    background: ${({ active }) => active ? '#129B10' : 'gray'};
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

export const StatusText = styled.div`
    line-height: 18px;
    margin-left: .5rem;
    white-space: nowrap;
`