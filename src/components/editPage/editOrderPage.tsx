import { TextInput } from "@gravity-ui/uikit";
import { useState } from "react";
import Header from "../header/header";
import { useAppDispatch } from "../../app/hooks";
import { editOrder } from '../../features/orders/ordersSlice';
import { useNavigate, useLocation } from "react-router-dom";
import CustomButton from "../button/customButton";
import './editOrderPage.scss'

function EditOrderPage() {

    const selectedIds = useLocation().state;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [newOrderDate, setNewOrderDate] = useState<string>("");
    const [newOrderClient, setNewOrderClient] = useState<string>("");
    const [newOrderDriver, setNewOrderDriver] = useState<string>("");
    const [newOrderTel, setNewOrderTel] = useState<string>("");
    const [newOrderComment, setNewOrderComment] = useState<string>("");
    const [newOrderStatus, setNewOrderStatus] = useState<string>("active");
    const [newOrderCode, setNewOrderCode] = useState<string>("");

    function handleOrderChange() {
        let modifiedOrder = {
            id: +selectedIds[0],
            date: newOrderDate,
            client: newOrderClient,
            driver: newOrderDriver,
            tel: newOrderTel,
            comment: newOrderComment,
            status: newOrderStatus,
            code: newOrderCode
        };
        dispatch(editOrder(modifiedOrder));
        navigate('/admin', { replace: false })
    }

    function handleCancel() {
        navigate(-1)
    }

    return (
        <div className="editOrder">
            <Header />
            <div className="inputsBlock">
                <TextInput
                    type="text"
                    placeholder="Date"
                    aria-label="date"
                    value={newOrderDate}
                    onChange={(e) => setNewOrderDate(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="text"
                    placeholder="Client"
                    aria-label="client"
                    value={newOrderClient}
                    onChange={(e) => setNewOrderClient(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="text"
                    placeholder="Driver"
                    aria-label="driver"
                    value={newOrderDriver}
                    onChange={(e) => setNewOrderDriver(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="tel"
                    placeholder="Tel"
                    aria-label="tel"
                    value={newOrderTel}
                    onChange={(e) => setNewOrderTel(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="text"
                    placeholder="Comment"
                    aria-label="comment"
                    value={newOrderComment}
                    onChange={(e) => setNewOrderComment(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="text"
                    placeholder="Status"
                    aria-label="status"
                    value={newOrderStatus}
                    onChange={(e) => setNewOrderStatus(e.target.value)}
                    hasClear={true}
                ></TextInput>
                <TextInput
                    type="text"
                    placeholder="Code"
                    aria-label="code"
                    value={newOrderCode}
                    onChange={(e) => setNewOrderCode(e.target.value)}
                    hasClear={true}
                ></TextInput>
            </div>
            <div className="buttonsBlock">
                <CustomButton name={'Edit'} action={handleOrderChange} />
                <CustomButton name={'Сancel'} action={handleCancel} />
            </div>
        </div>
    )
}

export default EditOrderPage;