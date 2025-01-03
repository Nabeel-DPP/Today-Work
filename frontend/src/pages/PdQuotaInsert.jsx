import React, { useState, useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const PdQuotaInsert = () => {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    QId: '',           
  AreaId: '',           
  DistId: '',       
  PrdId: '',     
  Quota: '',          
           
  });

  const [area , setArea ] = useState([]);
  const [dist , setDist ] = useState([]);
  const [prod , setProd ] = useState([]);
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  useEffect(() => {
    // Fetch areas for the dropdown
    const fetchArea = async () => {
      const response = await axios.get("http://localhost:5555/area"); // Adjust the API endpoint accordingly
      setArea(response.data);
      console.log ("This is 1st Response", response);
    };
    fetchArea();
  }, []);
  
  useEffect(() => {
    // Fetch areas for the dropdown
    const fetchDist = async () => {
      const response = await axios.get("http://localhost:5555/distributor"); // Adjust the API endpoint accordingly
      setDist(response.data);
      console.log ("This is 2nd Response",response);
    };
    fetchDist();
  }, []);

  useEffect(() => {
    // Fetch areas for the dropdown
    const fetchProduct = async () => {
      const response = await axios.get("http://localhost:5555/product"); // Adjust the API endpoint accordingly
      setProd(response.data);
      console.log ("This is 3rd Response",response);
    };
    fetchProduct();
  }, []);
  


  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
    try {
        
        const response = await axios.post("http://localhost:5555/pdQuota", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Product added successfully!');
          
          setFormData({
            QId: '',           
            AreaId: '',           
            DistId: '',       
            PrdId: '',     
            Quota: '',               
          });
          navigate("/productQuota");
        } else {
          alert('Failed to add Product Quota.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error occurred while submitting the form.');
      }
    
  };






  const [theme, setTheme] = useState('white'); // Initial form theme

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update the form theme
  };







  return (
    <div>

     <ThemeToggle onThemeChange={handleThemeChange} />
   <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Product Quota Information</h1>
    <div className="row">
  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="QId"
        value={formData.QId}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Order ID.
      </div>
      <label className="distributor-label">Quota ID</label>
    </div>
  </div>

  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="AreaId"
        value={formData.AreaId}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Distributor ID.
      </div>
      <label className="distributor-label">Area ID</label>
    </div>
  </div> */}
  <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="AreaId" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {area.map(a => (
          <option key={a.AreaId} value={a.AreaId}>{a.AreaName}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Area Name</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>
  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="DistId"
        value={formData.DistId}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Distributor ID</label>
    </div>
  </div> */}

<div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="DistId" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {dist.map(d => (
          <option key={d.DistId} value={d.DistId}>{d.distName}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Distributor Name</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>


  {/* <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="PrdId"
        value={formData.PrdId}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Area ID.
      </div>
      <label className="distributor-label">Product ID</label>
    </div>
  </div> */}


<div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="PrdId" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {prod.map(p => (
          <option key={p.prod_id} value={p.prod_id}>{p.prod_name}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Product Name</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>

  <div className="col-md-12 col-lg-6 col-sm-12">
    <div className="distributor-input-group">
      <i className="input-icon fa fa-user"></i>
      <input
        required
        type="number"
        name="Quota"
        value={formData.Quota}
        onChange={handleChange}
        className="distributor-input"
        autoComplete="off"
      />
      <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
      <div className="invalid-feedback">
        <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;Please enter a valid Institute ID.
      </div>
      <label className="distributor-label">Quota</label>
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
  </div>
  );
};

export default PdQuotaInsert;














