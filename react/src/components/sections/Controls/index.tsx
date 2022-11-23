import { useCallback } from 'react'
import { useSocket } from '../../../contexts/socketContext'
import { Button } from '../../ui/Button'
import { Status } from '../../ui/Status'
import * as S from './styles'

export const Controls = () => {

    const {
        closeConnection,
        createConnection,
        connected
    } = useSocket()

    const handleClick = useCallback(() => {
        
        if (connected) {
            closeConnection()
            return
        }

        createConnection()

    }, [connected])

    return (
        <S.ControlsContainer>
            <Status active={connected} />
            <Button data-testit="control-button" onClick={handleClick}>
                {connected ? 'Desativar' : 'Ativar'} Socket
            </Button>
        </S.ControlsContainer>
    )
}