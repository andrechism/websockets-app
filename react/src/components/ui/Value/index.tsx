import { FC } from 'react'
import * as S from './styles'

type ValueProps = {
    value: number,
    unit: string
}

export const Value: FC<ValueProps> = ({
    unit,
    value
}) => {
    return (
        <S.Wrapper>
            <S.Title>Last value</S.Title>
            <S.ValueWrapper>
                <S.Value>{value}</S.Value>
                <S.Unit>{unit}</S.Unit>
            </S.ValueWrapper>
        </S.Wrapper>
    )
}