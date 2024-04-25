import { Select } from "@gravity-ui/uikit";
import Header from "../header/header"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './access.scss'

type size = import("@gravity-ui/uikit").SelectProps["size"];

const AccessPage: React.FC = () => {

    const [size, setSize] = useState<size>('s');
    const [width, setWidth] = useState(200);
    const navigate = useNavigate();

    function handlerChoice(choice: string[]) {
        let user = choice[0];
        user === "admin" ? navigate("/admin", { replace: false }) :
            navigate("/users/" + user, { replace: false })
    }

    window.addEventListener('resize', () => {
        const width = document.body.clientWidth;
        width <= 577
            ? (setSize('s'), setWidth(200))
            : width <= 1081
                ? (setSize('l'), setWidth(250))
                : (setSize('xl'), setWidth(300))
    })

    return (
        <div className="access">
            <Header />
            <Select className="select" label="Select user..." size={size} width={width} onUpdate={handlerChoice}>
                <option value="Snicers & Co">Snicers & Co</option>
                <option value="Ivanov & Co">Ivanov & Co</option>
                <option value="Bosch">Bosch</option>
                <option value="Honda">Honda</option>
                <option value="Sidorov">Sidorov</option>
                <option value="Ivanov">Ivanov</option>
                <option value="Petrov">Petrov</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </Select>
        </div>
    )
}

export default AccessPage;