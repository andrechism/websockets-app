import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* roboto-regular - latin */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: fallback;
        src: url('/fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('/fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-700 - latin */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-display: fallback;
        src: url('/fonts/roboto-v30-latin-700.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('/fonts/roboto-v30-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/fonts/roboto-v30-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
            url('/fonts/roboto-v30-latin-700.woff') format('woff'), /* Modern Browsers */
            url('/fonts/roboto-v30-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/fonts/roboto-v30-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
    }

    html,
    body,
    #root {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        min-height: 100%;
    }

    body {
        background: ${({ theme }) => theme.colors.background.primary};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
        body {
            color: white;
            background: black;
        }
    }


    .page-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: ${({ theme }) => theme.sizes.breakpoints.desktop}px;
        margin: 0 auto;
    }
`;
