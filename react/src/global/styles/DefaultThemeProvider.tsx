import { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import theme from './theme'

type DefaultThemeProviderProps = {
    children: ReactNode
}

export const DefaultThemeProvider: FC<DefaultThemeProviderProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)