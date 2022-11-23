import { FC, ReactNode } from 'react'
import * as S from './styles'

type ButtonProps = {
    children: ReactNode
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick
}) => {
    return (
        <S.Button
            onClick={onClick}
        >
            {children}
        </S.Button>
    )
}