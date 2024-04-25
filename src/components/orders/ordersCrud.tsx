import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { removeAllOrders, removeSelectedIds } from '../../features/orders/ordersSlice';
import CustomButton from "../button/customButton";
import './ordersCrud.scss';

interface mypropsType {
    selectedIds: string[]
    changedSelectedIds: (value: string[]) => void
}

function OrdersCrud({ selectedIds, changedSelectedIds }: mypropsType) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function handleAddOrder() {
        navigate('/add', { replace: false })
    }

    function handleOrderChange() {
        if (selectedIds.length !== 1) {
            alert('Choose only one order to edit!')
        } else {
            navigate('/edit', { replace: false, state: selectedIds })
        }
    }

    function handleRemoveSelectedIds() {
        dispatch(removeSelectedIds(selectedIds));
        changedSelectedIds([])
    }

    function handleRemoveAllOrders() {
        dispatch(removeAllOrders());
        changedSelectedIds([])
    }

    return (
        <div className="crud">
            <CustomButton name={'Add'} action={handleAddOrder} />
            <CustomButton name={'Edit'} action={handleOrderChange} />
            <CustomButton name={'Remove Selected'} action={handleRemoveSelectedIds} />
            <CustomButton name={'Remove All'} action={handleRemoveAllOrders} />
        </div>
    );
};

export default OrdersCrud;