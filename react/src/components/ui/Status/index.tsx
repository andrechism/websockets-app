import { FC } from 'react'
import * as S from './styles'

type StatusProps = {
    active: boolean
}

export const Status: FC<StatusProps> = ({
    active
}) => {
    return (
        <S.StatusContainer>
            <S.StatusIndicator active={active} />
            <S.StatusText>Comunicação {active ? 'ativa' : 'inativa'}</S.StatusText>
        </S.StatusContainer>
    )
}