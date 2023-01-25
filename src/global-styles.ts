import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, #root, body {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: var(--vh, 100vh);
        background-color: ${(props) => props.theme.darkTheme.bg};
        color: ${(props) => props.theme.darkTheme.fg};
    }
`;

const colors = { 
    lightPrimary: '#F2F2F2',
    lightSecondary: '#D97979',
    darkPrimary: '#262526',
    darkSecondary: '#D91E1E'
};

export const theme = {
    lightTheme: {
        bg: colors.lightPrimary,
        fg: colors.darkPrimary,
    },
    darkTheme: {
        bg: colors.darkPrimary,
        fg: colors.lightPrimary,
    }
};

export interface Theme {
    bg: string;
    fg: string;
};