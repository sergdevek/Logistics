import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useParams } from "react-router-dom";
import { withTableActions, withTableSelection, Table, Select } from "@gravity-ui/uikit";
import Header from "../header/header";
import { orderSelector, Order, sortOrders } from "../../features/orders/ordersSlice";
import FilterOrders from '../filter/filterOrders'
import CustomButton from "../button/customButton";
import "./userPage.scss";

type size = import("@gravity-ui/uikit").SelectProps["size"];

const UserPage: React.FC = () => {

  const { id } = useParams()

  const OrdersTable = withTableActions(withTableSelection(Table));
  const columns = [{ id: 'id' }, { id: 'date' }, { id: 'client' }, { id: 'driver' }, { id: 'tel' }, { id: 'comment' }, { id: 'status' }, { id: 'code' },];

  const selectedOrders = useAppSelector(orderSelector);
  const dispatch = useAppDispatch();

  let userOrders: Order[];
  if (selectedOrders.find(elem => elem.client === id)) {
    userOrders = selectedOrders.filter(elem => elem.client === id)
  } else {
    userOrders = selectedOrders.filter(elem => elem.driver === id)
  }

  const [orders, setOrders] = useState<Array<Order>>(userOrders);
  const [newSort, setNewSort] = useState<Array<string>>([]);
  const [selectedIds, setSelectedIds] = useState<Array<string>>([]);
  const [style, setStyle] = useState<string>('block');
  const [size, setSize] = useState<size>('s');
  const [width, setWidth] = useState(150);

  const userTable = orders.map((elem: Order, index: number) => {
    const obj = {
      id: index + 1,
      date: elem.date,
      client: elem.client,
      driver: elem.driver,
      tel: elem.tel,
      comment: elem.comment,
      status: elem.status,
      code: elem.code
    }
    return obj;
  })

  useEffect(() => {
    setOrders(userOrders);
  }, [selectedOrders]);

  function handlerSort(inner: string[]) {
    setNewSort([...newSort, ...inner])
    dispatch(sortOrders(inner))
    setNewSort([])
  }

  const handleFilter = () => {
    let elemFilter = document.getElementById('filter');
    style === 'none' ? setStyle('block') : setStyle('none');
    if (elemFilter)
      elemFilter.style.display = style;
  }

  function handleReset() {
    setOrders(userOrders)
  }

  function onFilter(filltedDataResult: Order[]) {
    setOrders(filltedDataResult)
  }

  const getStr = (value: string) => {
    return 'https://ati.su/firms/' + value + '/info '
  }

  const getRowActions = () => {
    return [
      {
        text: 'follow the link?',
        handler: (item: Order) => {
          const link = getStr(item.code)
          return window.location.href = link
        },
      },
    ];
  };

  window.addEventListener('resize', () => {
    const width = document.body.clientWidth;
    width <= 577
      ? (setSize('s'), setWidth(150))
      : width <= 1081
        ? (setSize('l'), setWidth(180))
        : (setSize('xl'), setWidth(200))
  })

  return (
    <div>
      <Header />
      <div className="filterBorder">
        <div className="leftBlock">
          <CustomButton name={'Filter'} action={handleFilter} />
          <CustomButton name={'Reset'} action={handleReset} />
          <CustomButton name={'Search'} action={handleReset} />
        </div>
        <div className="rightBlock">
          <Select className="select" label="Sort by ..." size={size} width={width} onUpdate={handlerSort}>
            <option value="date">Date</option>
            <option value="client">Client</option>
            <option value="driver">Driver</option>
            <option value="tel">Tel</option>
            <option value="cooment">Comment</option>
            <option value="status">Status</option>
            <option value="code">Code</option>
          </Select>
        </div>
      </div>
      <FilterOrders orders={orders} filteredOrders={onFilter} />
      <div className="table">
        <OrdersTable
          className='ordersTable'
          data={userTable}
          columns={columns}
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          getRowActions={getRowActions}
        />
      </div>
    </div>
  );
};

export default UserPage;