import styled from "styled-components"
import ApexChart from "react-apexcharts"

export const Chart = styled(ApexChart)`
    .apexcharts-legend-marker {
        position: relative;
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        &::before {
            content: '';
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 1px;
            margin-bottom: 0;
            background: currentColor;
            display: flex;
            visibility: visible;
        }

        &::after {
            content: '';
            visibility: visible;
            width: 9px;
            height: 9px;
            background-color: ${({ theme }) => theme.colors.background.secondary};
            border: 1px solid currentColor;
            border-radius: 50%;
        }
    }
`