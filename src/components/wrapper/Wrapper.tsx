import React from 'react';
import { Button, Icon, Theme, ThemeProvider } from '@gravity-ui/uikit';
import { Moon, Sun } from '@gravity-ui/icons';
import './Wrapper.scss';

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({ children }) => {

    const [theme, setTheme] = React.useState<Theme>(DEFAULT_THEME);
    const isDark = theme === DARK;

    return (
        <ThemeProvider theme={theme}>
            <body>
                <div className='q'>
                    <div className='themeButton'>
                        <Button
                            size="l"
                            view="outlined"
                            onClick={() => {
                                setTheme(isDark ? LIGHT : DARK);
                            }}
                        >
                            <Icon data={isDark ? Sun : Moon} />
                        </Button>
                    </div>
                </div>
                <div className='content'>
                    {children}
                </div>
            </body>
        </ThemeProvider>
    );
};
