import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import PaymentProcess from './PaymentProcess';

const BookingPage = () => {
    const {id} = useParams();
    const [userInfo ] = useContext(UserContext);
    const [service, setService] = useState({})
const [paid, setPaid] = useState(false)
const dateFormat = require("dateformat");
    const handlePayment = (paymentId) => {
const date = dateFormat( new Date(), "shortDate" )
      const orderDetails = {
        ...userInfo,
        paymentId,
        service: service.title,
        serviceImg: service.img,
        orderTime: date,
        status: 'pending',
      } 
    console.log(orderDetails)
    const url = `https://digma-server.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    }).then((res) => {
      if (res) {
        setPaid(true)
      }
    });
    }

      useEffect(() => {
        const url = `https://digma-server.herokuapp.com/service/${id}`
        fetch(url)
        .then((response) => response.json())
        .then(data => setService(data))
      }, [])
    

      const {title, img} = service

    return (
        <div>
           {service && <div className="row mt-4">
               <div className="col offset-2">
               You are Booking for <span className="font-weight-bolder">{title}</span>; <br/>
                Ensure Payment before taking Our Services!!
               </div>
               <div className="col">
<img className="" src={img} alt="" height="100px"/>
               </div>
            </div>}
          { !paid? <PaymentProcess handlePayment={handlePayment} /> : <div className="container text-center mt-3">
              <h4>Your Payment Sent. <br/>Thank You {userInfo.name} for making trust!</h4>
          <p className="text-success">You Can Track your purchased services from Dashboard</p><button className="btn btn-blueCyan "><Link  to="/dashboard" className="text-light link">Go To Dashboard</Link></button>
          </div> }
        </div>
    );
}

export default BookingPage;