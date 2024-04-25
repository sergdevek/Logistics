import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Order {
    date: string,
    client: string,
    driver: string,
    tel: string,
    comment: string,
    status: string,
    code: string
}

const initialState: Array<Order> = [
    { date: '10.11.2024', client: 'Ivanov & Co', driver: 'Petrov', tel: '8-919-380-58-92', comment: 'Call befor 1 hour', status: 'New', code: '12454' },
    { date: '21.04.2024', client: 'Bosch', driver: 'Sidorov', tel: '8-919-377-58-92', comment: 'Call befor 1 hour', status: 'Active', code: '12345' },
    { date: '22.04.2024', client: 'Lada', driver: 'Ivanov', tel: '8-919-377-68-92', comment: 'Call befor 1 hour', status: 'Done', code: '12678' },
    { date: '20.04.2024', client: 'Bosch', driver: 'Petrov', tel: '8-919-377-57-90', comment: 'Call befor 1 hour', status: 'Done', code: '12460' },
    { date: '1.11.2024', client: 'Honda', driver: 'Petrov', tel: '8-919-377-60-92', comment: 'Call befor 1 hour', status: 'Active', code: '12460' },
    { date: '5.11.2024', client: 'Ivanov & Co', driver: 'Sidorov', tel: '8-920-377-58-91', comment: 'Call befor 1 hour', status: 'New', code: '12346' },
    { date: '10.11.2024', client: 'Snicers & Co', driver: 'Ivanov', tel: '8-919-377-90-92', comment: 'Call befor 1 hour', status: 'New', code: '12678' },
    { date: '3.12.2024', client: 'Snicers & Co', driver: 'Petrov', tel: '8-919-358-58-92', comment: 'Call befor 1 hour', status: 'Active', code: '12460' },
]

export const orderSlice = createSlice({

    name: "orders",
    initialState,
    reducers: {

        addOrder: (state, action: PayloadAction<Order>) => {
            state.push(action.payload);
        },

        editOrder: (state, action) => {
            const { id, date, client, driver, tel, comment, status, code } = action.payload
            const existingOrder = state.find((elem, index) => index === id)
            if (existingOrder) {
                existingOrder.date = date
                existingOrder.client = client
                existingOrder.driver = driver
                existingOrder.tel = tel
                existingOrder.comment = comment
                existingOrder.status = status
                existingOrder.code = code
            }
        },

        removeAllOrders: (state) => {
            state.length = 0
            return state;
        },

        removeSelectedIds: (state, action: PayloadAction<Array<string>>) => {
            let temp: Order[] = [];
            state.filter((elem, index) => {
                let exist = !action.payload.includes(index.toString())
                if (exist) {
                    temp.push(elem);
                }
            })
            return state = temp;
        },

        sortOrders: (state, action: PayloadAction<Array<string>>) => {

            function compare(a: Order, b: Order) {

                const comparableFirst = a.date.split(".").reverse().join(".")
                const comparableSecond = b.date.split(".").reverse().join(".")

                const comparableFirstTel = a.tel.split("-").join("")
                const comparableSecondTel = b.tel.split("-").join("")

                let result = 0;
                switch (action.payload[0]) {
                    case 'driver':
                        result = a.driver.localeCompare(b.driver);
                        break;
                    case 'client':
                        result = a.client.localeCompare(b.client);
                        break;
                    case 'date':
                        result = (+new Date(comparableFirst) - +new Date(comparableSecond));
                        break;
                    case 'status':
                        result = a.status.localeCompare(b.status);
                        break;
                    case 'code':
                        result = (+a.code - +b.code);
                        break;
                    case 'tel':
                        result = +comparableFirstTel - +comparableSecondTel;
                        break;
                }
                return result;
            }
            return state.sort(compare);
        }
    }
});

export const { addOrder, editOrder, removeAllOrders, removeSelectedIds, sortOrders } = orderSlice.actions;
export const orderSelector = (state: RootState) => state.ordersReducer;
export default orderSlice.reducer;