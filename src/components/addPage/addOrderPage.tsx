import { TextInput } from "@gravity-ui/uikit";
import { useState } from "react";
import Header from "../header/header";
import { useAppDispatch } from "../../app/hooks";
import { addOrder } from '../../features/orders/ordersSlice';
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/customButton";
import './addOrderPage.scss'

function AddOrderPage() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [newOrderDate, setNewOrderDate] = useState<string>("");
    const [newOrderClient, setNewOrderClient] = useState<string>("");
    const [newOrderDriver, setNewOrderDriver] = useState<string>("");
    const [newOrderTel, setNewOrderTel] = useState<string>("");
    const [newOrderComment, setNewOrderComment] = useState<string>("");
    const [newOrderStatus, setNewOrderStatus] = useState<string>("active");
    const [newOrderCode, setNewOrderCode] = useState<string>("");

    function handleAddOrder() {
        const newOrder = {
            date: newOrderDate,
            client: newOrderClient,
            driver: newOrderDriver,
            tel: newOrderTel,
            comment: newOrderComment,
            status: newOrderStatus,
            code: newOrderCode
        };
        dispatch(addOrder(newOrder));
        navigate('/admin', { replace: false })
    }

    function handleCancel() {
        navigate(-1)
    }

    return (
        <div className="addOrder">
            <Header />
            <div className="inputsBlock">
                <TextInput
                    className="firstInput"
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
                    className="lastInput"
                    type="text"
                    placeholder="Code"
                    aria-label="code"
                    value={newOrderCode}
                    onChange={(e) => setNewOrderCode(e.target.value)}
                    hasClear={true}
                ></TextInput>
            </div>
            <div className="buttonsBlock">
                <CustomButton name={'Add'} action={handleAddOrder} />
                <CustomButton name={'Сancel'} action={handleCancel} />
            </div>
        </div>
    )
}

export default AddOrderPage;