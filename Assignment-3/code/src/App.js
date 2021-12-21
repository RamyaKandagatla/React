import React from 'react';

import './App.css';


var arrow="<";

var rightarrow='>'

var orderDetails={
  'name':'Alan Ford',
  'employeeid':1234578,
  'appointment':'9:00 (24-05-2016)',
  'email':'alan.form@example.com',
  'phone': 31123456789,
  'status':'In Progress',
  'Door':'Mark',
  'Time':'10:30 (25-05-2016)',
  'avatar':'https://www.w3schools.com/howto/img_avatar.png',
  'title': 'Boltaart Bosbeseen',
  'description':'overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf.'
}


const App=()=> {
  return (
    <div className="site-container">
    <div className='order-details'>
      <div className='nav'>
        <div className='nav-container'>
          <a href='#'className='nav-arrow arrow'>{arrow}</a>
          <h1 className='nav-title'>{orderDetails.name}</h1>
          <span className='nav-text'>{orderDetails.employeeid}</span>
          <button className='btn nav-btn '>Print</button>
        </div>
      </div>


      <div className='container'>
        <div className='customer-info block'>
          <p className='text'><span><b>Appointment on: </b></span> {orderDetails.appointment}</p>
          <p className='text'><span><b>Email:</b> </span> {orderDetails.email}</p>
          <p className='text'><span><b>Phone:</b> +</span> {orderDetails.phone}</p>

        </div>


        <div className='order-info grid block'>

          <div className='unit one-third'>
            <p className='text text-label'><b>Status</b></p>
            <p className='text order-status'>{orderDetails.status}</p>
          </div>
          
          <div className='unit one-third'>
            <p className='text text-label'><b>Door</b></p>
            <p className='text order-status'>{orderDetails.Door}</p>
          </div>
          
          <div className='unit one-third'>
            <p className='text text-label'><b>Time</b></p>
            <p className='text order-status'>{orderDetails.Time}</p>
          </div>
          
        </div>


        <ul className='product-list block'>
          <li className='product'>
            <label className='img custom-checkbox'>
              <input type='checkbox' className='product-input' value='on'></input>
              <span className='custom-checkbox-indicator'></span>
              <img src={orderDetails.avatar} alt="" width="100" height="100"></img>
            </label>
            <a href='#' className='product-desc'>
              <span className='product-arrow arrow'>{rightarrow}</span>
              <div className='product-info'>
                <h3 className='product-title text'>
                  {orderDetails.title}
                </h3>
                <p className='text-help text'>
                  {orderDetails.description}
                </p>
              </div>
            </a>
          </li>
        </ul>


      </div>
    </div>
    </div>
  );
}

export default App;
