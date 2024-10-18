import React, { useState,} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderDetailInsert = () => {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    order_detail_id:'',
    order_id:'',
    product_id:'',
    base_units:'',
    cash_price:'',
    bonus_units:'',
    value:'',
    comments:'',
    prd_remarks:'',
    dispatch_status:'',
    sch: '',           
    pack_on_sch: '',        
    trade_price: '',        
    product_scheme: '',    
    units_convert_date: '', 
    old_units: '',          
    old_bonus: '',          
    old_price: '',          
    old_value: '',          
    svn: '',                
    inv_notes: '',
    
  });

 
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
    try {
        
        const response = await axios.post("http://localhost:5555/orderDetail", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
            order_detail_id:'',
     order_id:'',
     product_id:'',
     base_units:'',
     cash_price:'',
     bonus_units:'',
     value:'',
     comments:'',
     prd_remarks:'',
     dispatch_status:'',
     sch: '',           
     pack_on_sch: '',        
     trade_price: '',        
     product_scheme: '',    
     units_convert_date: '', 
     old_units: '',          
     old_bonus: '',          
     old_price: '',          
     old_value: '',          
     svn: '',                
     inv_notes: '',        
    
          });
          navigate("/orderDetailTable");
        } else {
          alert('Failed to add Order Detail.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
    
  };











  return (
   
    <div className="distributor-form__container mt-5">
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Order Detail Information</h1>
    <div className="row">
    <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <i className="input-icon fa fa-user"></i>
          <input
            required
            type="number"
            name="order_detail_id"
            value={formData.order_detail_id}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <div className="valid-feedback">
            <i className="fa-regular fa-circle-check"></i>
          </div>
          <div className="invalid-feedback">
            <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order Detail ID
          </div>
          <label className="distributor-label">Order Detail ID</label>
        </div>
      </div>

      {/* Order ID */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="order_id"
            value={formData.order_id}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Order ID</label>
        </div>
      </div>

      {/* Product ID */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Product ID</label>
        </div>
      </div>

      {/* Base Units */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="base_units"
            value={formData.base_units}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Base Units</label>
        </div>
      </div>

      {/* Cash Price */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="cash_price"
            value={formData.cash_price}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Cash Price</label>
        </div>
      </div>

      {/* Bonus Units */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="bonus_units"
            value={formData.bonus_units}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Bonus Units</label>
        </div>
      </div>

      {/* Value */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Value</label>
        </div>
      </div>

      {/* Comments */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="text"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Comments</label>
        </div>
      </div>

      {/* Product Remarks */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="text"
            name="prd_remarks"
            value={formData.prd_remarks}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Product Remarks</label>
        </div>
      </div>

      {/* Dispatch Status */}
      <div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type="text"
            name="dispatch_status"
            value={formData.dispatch_status}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Dispatch Status</label>
        </div>
      </div>

      <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="sch"
      value={formData.sch}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Schedule</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="pack_on_sch"
      value={formData.pack_on_sch}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Pack on Schedule</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="trade_price"
      value={formData.trade_price}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Trade Price</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type='number'
            name="product_scheme"
            value={formData.product_scheme}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Product Scheme</label>
        </div>
      </div>
<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="units_convert_date"
      value={formData.units_convert_date}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Units Convert Date</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="old_units"
      value={formData.old_units}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Old Units</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="old_bonus"
      value={formData.old_bonus}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Old Bonus</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="old_price"
      value={formData.old_price}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Old Price</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="old_value"
      value={formData.old_value}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Old Value</label>
  </div>
</div>

<div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      required
      type="number"
      name="svn"
      value={formData.svn}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">SVN</label>
  </div>
</div>


<div className="col-md-12 col-lg-6 col-sm-12">
        <div className="distributor-input-group">
          <input
            required
            type='text'
            name="inv_notes"
            value={formData.inv_notes}
            onChange={handleChange}
            className="distributor-input"
            autoComplete="off"
          />
          <label className="distributor-label">Innvoice Notes</label>
        </div>
      </div>






      </div>
      {/* Submit Button */}
      <div className="row">
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="submit" className="distributor-submit-btn"  >
            Submit
          </button>
        </div>
        <div className=" col-md-12 col-lg-3 col-sm-12">
          <button type="reset" className="distributor-reset-btn">
            Reset
          </button>
        </div>
      </div>
     
      
      
    </form>
  </div>
  );
};

export default OrderDetailInsert;














