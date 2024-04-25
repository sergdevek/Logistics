import { TextInput } from "@gravity-ui/uikit";
import { useState } from "react";
import { Order } from "../../features/orders/ordersSlice";
import CustomButton from "../button/customButton";
import './filterOrders.scss'

interface propsType {
    orders: Order[];
    filteredOrders: (filteredOrders: Order[]) => void;
}

function FilterOrders(props: propsType) {

    const [newOrderDate, setNewOrderDate] = useState<string>("");
    const [newOrderClient, setNewOrderClient] = useState<string>("");
    const [newOrderDriver, setNewOrderDriver] = useState<string>("");
    const [newOrderTel, setNewOrderTel] = useState<string>("");
    const [newOrderComment, setNewOrderComment] = useState<string>("");
    const [newOrderStatus, setNewOrderStatus] = useState<string>("");
    const [newOrderCode, setNewOrderCode] = useState<string>("");

    let condition = {
        date: newOrderDate,
        client: newOrderClient,
        driver: newOrderDriver,
        tel: newOrderTel,
        comment: newOrderComment,
        status: newOrderStatus,
        code: newOrderCode
    };

    const applayFilter = () => {
        const keys = Object.keys(props.orders[0]) as (keyof Order)[]
        return props.filteredOrders(props.orders.filter((order) =>
            keys.every(key => condition[key] === '' || order[key].includes(condition[key])))
        )
    }

    return <div id="filter">
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
        <CustomButton name={'Filter Applay'} action={applayFilter} />
    </div>
}

export default FilterOrders;