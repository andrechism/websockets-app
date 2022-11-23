import * as S from './styles'

export const Header = () => {
    return (
        <S.HeaderContainer data-testid="header-component">
            <S.Logo
                name="site-logo"
                width={180}
                height={33}
            />
        </S.HeaderContainer>
    )
}