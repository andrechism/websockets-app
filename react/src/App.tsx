import Page from "./pages"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./global/styles/globalStyles"
import theme from "./global/styles/theme"
import { SocketProvider } from "./contexts/socketContext"

function App() {
  return (
    <SocketProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page />
      </ThemeProvider>
    </SocketProvider>
  )
}

export default App
