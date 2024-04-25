import { Text } from '@gravity-ui/uikit';
import { useState, useEffect } from 'react';
import './header.scss'

type size = import("@gravity-ui/uikit").TextProps["variant"];

const Header: React.FC = () => {

    const [size, setSize] = useState<size>("header-2");

    useEffect(() => {
        window.addEventListener('resize', () => {
            const width = document.body.clientWidth;
            width <= 577
                ? (setSize("header-2"))
                : width <= 1081
                    ? (setSize("display-2"))
                    : (setSize("display-3"))
        })
    }, [size]);

    return (
        <header>
            <div>
                <Text variant={size} color="positive">Logistics order</Text>
            </div>
            <div>
                <Text variant={size} color="positive">accounting system</Text>
            </div>
        </header>
    );
}

export default Header;