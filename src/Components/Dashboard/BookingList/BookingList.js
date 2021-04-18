import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const BookingList = () => {
    const [userInfo] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    console.log("🚀 ~ file: BookingList.js ~ line 7 ~ BookingList ~ orders", orders)
    const email = userInfo.email;
    useEffect(() => {
      fetch("https://digma-server.herokuapp.com/order/" + email)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }, []);

    return (
        <div style={{margin: "0 auto"}} className="w-75 pb-5">
             <div className="">
        <h3 className="p-3 text-center">
          {userInfo.name}, previously you booked for,
        </h3>
      </div>
      <table className="table">
        <thead className="btn-blueCyan text-light">
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Consumer</th>
            <th scope="col">Dates</th>
            <th scope="col">Status</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.map((obj) => (
            <tr key={obj._id}>
              <th scope="row">{obj.service}</th>
              <td>{obj.name} </td>
              <td> {obj.orderTime} </td>
              <td>
              {obj.status} 
              </td>
            </tr>
          )
          )}
        </tbody>
      </table>
        </div>
    );
};
export default BookingList;