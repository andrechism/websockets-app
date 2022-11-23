import { useSocket } from '../../../../contexts/socketContext'
import { Spinner } from '../../../ui/Spinner'
import * as S from '../styles'

export const EmptyCard = () => {
    const { loading } = useSocket()

    return (
        <S.Card data-testid="empty-card-component">
            {
                loading ? (
                    <>
                        <S.Title>Loading data...</S.Title>
                        <S.ContentWrapper>
                            <Spinner />
                        </S.ContentWrapper>
                    </>
                )
                : (
                    <>
                        <S.Title>No data available</S.Title>
                        <S.Description >There is no active socket connection.</S.Description>
                    </>
                )
            }
        </S.Card>
    )
}