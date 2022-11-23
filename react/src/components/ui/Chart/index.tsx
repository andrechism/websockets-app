import * as S from './styles'
import { ApexOptions } from "apexcharts"
import { FC, useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { getChartOptions } from '../../../utils/getChartConfig'



type ChartProps = {
    series: ApexOptions['series']
}

export const Chart: FC<ChartProps> = ({
    series
}) => {
    const themeContext = useContext(ThemeContext)
    const options = useMemo(() => {
        return getChartOptions(themeContext)
    }, [])

    return (
        <S.Chart
            options={options}
            series={series}
            type="line"
            height={themeContext.sizes.card.height}
            width={themeContext.sizes.card.width}
        />
    )
}
