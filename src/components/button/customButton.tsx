import { useState } from "react";
import { Button } from "@gravity-ui/uikit";

type sizeType = import("@gravity-ui/uikit").ButtonSize;
type colorType = import("@gravity-ui/uikit").ButtonView;

interface propType {
    name: string
    action: () => void
}

function CustomButton(prop: propType) {

    const [size, setSize] = useState<sizeType>('s');
    const [color, setColor] = useState<colorType>('outlined-action');

    window.addEventListener('resize', () => {
        const width = document.body.clientWidth;
        width <= 577 ? (setSize('s'),
            setColor('outlined-action'))
            : width <= 1081
                ? (setSize('l'),
                    setColor('outlined-action'))
                : (setSize('xl'),
                    setColor('outlined-action'))
    })

    function action() {
        prop.action();
    };

    return <Button view={color} size={size} type="submit" className="btn" onClick={action}>
        {prop.name}
    </Button>
}

export default CustomButton;