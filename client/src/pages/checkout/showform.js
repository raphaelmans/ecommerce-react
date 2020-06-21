import React, { useState,useContext } from "react";
import CustomerInformation from "./customerinformation";
import ShippingMethod from "./shippingmethod";
import PaymentMethod from "./paymentmethod";
import CompleteOrder from "./completeorder";


const shippingCompany = [
  {
    companyName: "Ninja Van",
    fee: 2,
  },
  {
    companyName: "LBC",
    fee: 3,
  },
  {
    companyName: "Shopee",
    fee: 2.5,
  },
];

export default function ShowForm({totalFee,subTotal,shippingMode,setShipMethod}) {

 

  const [steps, setSteps] = useState(1);
  // const [shippingMode, setModeShip] = useState(shippingCompany[0].companyName);
  // const setShipMethod = (event) => {
  //   setModeShip(event.target.value);
  // };
  
  
  const [customerInfo, setCostumerInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    apt: "",
    country: "",
    city: "",
    zip: "",
  });

  const [payment, setPayment] = useState({
        cardNumber:"",
        name:"",
        cardDate:"",
        cvv:"",
  });

  const handlePayment = (event) => {
    setPayment({
      ...payment,
      [event.target.name]: event.target.value,
    });
  };

  const editForm = (moves) =>{
    setSteps(moves);
  }

  const handleShippingAddress = (event) => {
    setShippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value,
    });
  };

  
  const handleCountryField = (value) =>{
    setShippingAddress({
      ...shippingAddress,
      country: value,
    });
  }

  const handleCustomerInfo = (event) => {
    setCostumerInfo({
      ...customerInfo,
      [event.target.name]: event.target.value,
    });
  };

  
  const nextstep = () => {
    setSteps(steps + 1);
  };

  const prevstep = () => {
    setSteps(steps - 1);
  };
  switch (steps) {
    case 1:
      return (
        <CustomerInformation
          nextstep={nextstep}
          prevstep={prevstep}
          handleCustomerInfo={handleCustomerInfo}
          customerInfo={customerInfo}
          handleShippingAddress={handleShippingAddress}
          shippingAddress={shippingAddress}
          handleCountryField={handleCountryField}
        />
      );
    case 2:
      return (
        <ShippingMethod
          nextstep={nextstep}
          prevstep={prevstep}
          editForm={editForm}
          setShipMethod={setShipMethod}
          shippingMode={shippingMode}
          shippingCompany={shippingCompany}
          shippingAddress={shippingAddress}
        />
      );
    case 3:
      return <PaymentMethod 
      shippingMode={shippingMode}
      shippingAddress={shippingAddress}
      editForm={editForm}
      nextstep={nextstep} prevstep={prevstep} handlePayment={handlePayment} payment={payment}  />;
    case 4:
      return <CompleteOrder
      shippingMode={shippingMode}
      customerInfo={customerInfo}
      shippingAddress={shippingAddress}
      payment={payment}
      subTotal={subTotal}
      totalFee={totalFee}
      />;
    default:
      return <CustomerInformation nextstep={nextstep} prevstep={prevstep}  />;
  }
}
