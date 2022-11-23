import { FC, useMemo } from "react"
import { DeviceData } from "../../../../types/deviceData"
import { Chart } from "../../../ui/Chart"
import * as S from '../styles'

type CardProps = {
    device: DeviceData
    lastUpdated: number
}

export const ChartCard: FC<CardProps> = ({
    device,
    lastUpdated,
}) => {
    const formattedLastUpdated = useMemo(() => {
        return new Date(lastUpdated).toLocaleDateString('pt-BR', {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }, [lastUpdated])

    const formattedSeries = useMemo(() => {
        const series = device.variables.map((variable) => {
            return {
                name: variable.variable_name,
                data: variable.histories.map((history) => {
                    return {
                        x: history.timestamp,
                        y: history.value
                    }
                })
            }
        })
        return series
    }, [device])

    return (
        <S.Card data-testid="chart-card-component">
            <S.Title>{device.device_name}</S.Title>
            <Chart series={formattedSeries}/>
            <S.Description>Last updated: {formattedLastUpdated}</S.Description>
        </S.Card>
    )
}