import { Fragment } from 'react'
import { useSocket } from '../../../contexts/socketContext'
import { ChartCard, EmptyCard, ValueCard } from '../Card'
import * as S from './styles'

export const Deck = () => {
    const { connected, loading, data } = useSocket()

    return (
        <S.Section data-testid="deck-component">
            {
                (!connected || loading) && (
                    <>
                        <EmptyCard />
                        <EmptyCard />
                        <EmptyCard />
                    </>
                )
            }

            {
                connected && data?.devices.map((device) => (
                    <Fragment
                        key={device._id}
                    >
                        <ChartCard
                            device={device}
                            lastUpdated={data.last_updated}
                        />
                        {
                            device.variables.map((variable) => (
                                <ValueCard
                                    key={variable._id}
                                    variableName={variable.variable_name}
                                    lastValue={variable.value}
                                    unit={variable.unit}
                                />
                            ))
                        }
                    </Fragment>
                ))
            }
        </S.Section>
    )
}