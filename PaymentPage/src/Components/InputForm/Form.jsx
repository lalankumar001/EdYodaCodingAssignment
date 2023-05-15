
import React, { useState } from 'react';
import DurationImg from '../../assets/ClockIcon.svg'
import RazorpayIMg from '../../assets/Razorpay Icon.svg'
import './form.css'

const Form = () => {
    const [subscription, setSubscription] = useState('monthly');
    const [totalAmount, setTotalAmount] = useState(0);
    const [ActualAmount, setActualAmount] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubscriptionChange = (event) => {
        event.preventDefault();
        const selectedSubscription = event.target.value;
        let amount = 0;
        switch (selectedSubscription) {
          case 'monthly':
            amount = 99;
            break;
          case 'half-yearly':
            amount = 149;
            break;
          case 'yearly':
            amount = 179;
            break;
          default:
            break;
        }
        const total = amount * 1.18; // Add 18% GST
        setSubscription(selectedSubscription);
        setTotalAmount(total);

        const ActualAmount = 18500 -amount*1.18;
        setSubscription(selectedSubscription)
        setActualAmount(ActualAmount);
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        // Send data to backend
        setFormSubmitted(true);
      };
  const CancelHandler = (event) => {
    alert('Are you sure you want to cancel?')

  }
const PurchageHandler = (event) =>{
    event.preventDefault();
    alert('purchage completed successfully')
}
      return (
    <div className='form'>
        <form onSubmit={handleFormSubmit}>
        <div className='Form_signupTab'>
            <h3><span className='OneDigit'>1</span>
                <br />
                Sign Up
            </h3>
        </div>

        <div className='Form_subscribeTab'>
            <h3> <span className='twoDigit'>2</span>
                <br />
                Subscribe
            </h3>
        </div>
        <div className='Heading'>
            <h1>Select your subcription plan</h1>
        </div>
{/* Payment Plan */}
        <div>
      <div className='card_first_plan'>
        <label className='Card_badge'>Offer expired</label>
        <br />
        <label>
          <input
            type="radio"    
            checked='checked'
          />
          12 Months Subscription <label className='price_Hidden'>Total ₹99
          </label>
        </label>
        <br />
       <span className='Price_permonth_Hidden'> ₹8 /mo </span>
      </div>

      <div className='card_second_plan'>
        <label className='Card_badge_recommended'>Recommended</label>
        <br />
        <label>
          <input
            type="checkbox"    
            checked='checked'
            value="yearly"
            onChange={handleSubscriptionChange}
          />
          12 Months Subscription <label className='price'>Total ₹179
          </label>
        </label>
        <br />
       <span className='Price_permonth'> ₹15 /mo </span>
      </div>
      <div className='card_third_plan'>
        <br />
        <label>
          <input
            type="radio" 
            onChange={handleSubscriptionChange}   
            value="half-yearly"
          />
          6 Months Subscription <label className='price'>Total ₹149
          </label>
        </label>
        <br />
       <span className='Price_permonth'> ₹25 /mo </span>
      </div>
      <div className='card_last_plan'>
        <br />
        <label>
          <input
            type="radio" 
            onChange={handleSubscriptionChange}   
            value="monthly"
             />
          3 Months Subscription <label className='price'>Total ₹99
          </label>
        </label>
        <br />
       <span className='Price_permonth'> ₹33 /mo </span>
      </div>
        </div>
<hr />
<div className='Sub_fee'>
    <h5>Subscription Fee <span className='sub_priceOff'>₹18,500</span></h5>
</div>

<div className='card_Limited_plan'>
        <br />
        <span> Limited time offer <span className='price'>-₹{`. ${ActualAmount}`}
        <br />
        <img src={DurationImg} alt="Img" width="17" /> <span className='Offer_valid'> Offer valid till 25th March 2023</span>
          </span>
        </span>
      </div>
        
      <div className='Sub_fee'>
    <h5>Total (incl. of 18% GST) <span className='sub_priceOff'>₹ {`. ${totalAmount}`}</span></h5>
</div>
<div className='Button'>
            <button className='Cancel_btn' onClick={CancelHandler}>CANCEL</button> &nbsp; &nbsp;
             <button className='Pay_btn' type="submit" onClick={PurchageHandler}>PROCEED TO PAY</button>
        </div>
        <img src={RazorpayIMg} alt="img" width='65' />
        </form>  
    </div>
  )
}

export default Form