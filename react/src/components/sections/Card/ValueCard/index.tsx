import { FC } from "react"
import { Value } from "../../../ui/Value"
import * as S from '../styles'

type ValueCardProps = {
    variableName: string
    lastValue: number,
    unit: string
}

export const ValueCard: FC<ValueCardProps> = ({
    variableName,
    lastValue,
    unit
}) => {
    return (
        <S.Card data-testid="value-card-component">
            <S.Title>{variableName}</S.Title>
            <Value
                unit={unit}
                value={lastValue}
            />
        </S.Card>
    )
}