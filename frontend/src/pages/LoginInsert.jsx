import React, { useState,  useEffect} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const LoginInsert = () => {

  const navigate = useNavigate();
 
  const [area , setArea ] = useState([]);
  const [dist , setDist ] = useState([]);

  const [formData, setFormData] = useState({
    loginId: '',
    login: '',
    password: '',
    name: '',
    desig:'',
    type:'',
    dept:'',
    areaId:'',
    areaName:'',
    distId:'',
    active:'',
    passw:'',
    created: Date,
    zonal:'',
    nickName:'',
    subArea:'',
    
  });

 
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




  



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
    try {
        
        const response = await axios.post("http://localhost:5555/login", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
    loginId: '',
    login: '',
    password: '',
    name: '',
    desig:'',
    type:'',
    dept:'',
    areaId:'',
    areaName:'',
    distId:'',
    active:'',
    passw:'',
    created: '',
    zonal:'',
    nickName:'',
    subArea:'',
    
          });
          navigate("/loginTable");
        } else {
          alert('Failed to add area.');
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
   <div className="loginInsert">
     <ThemeToggle onThemeChange={handleThemeChange} />
     <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Login Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
             <i className="input-icon fa fa-user"></i>
            <input
              required
              type="number"
              name="loginId"
              value={formData.loginId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
          <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Login ID</label>
            <i className="input-icon fa fa-user"></i>
          </div>
        </div>

        <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="areaName" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {area.map(a => (
          <option key={a.AreaId} value={a.AreaName}>{a.AreaName}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Area Name</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>


          <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            


            <select name="distId" className="distributor-input" onChange={handleChange} required>
        <option value=""></option>
        {dist.map(d => (
          <option key={d.DistId} value={d.DistId}>{d.distName}</option>
        ))}
      </select>
            
            
           <label className="distributor-label ml-2" >Distributor Name</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>




        <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i className="input-icon fa-solid fa-street-view mr-5"></i>
            <select
              required
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="distributor-input"
            >
              <option value="" disabled hidden> 
                
                
               </option>
              <option value="0">0</option>
              <option value="1">1</option>
         

            </select>
            
            
           <label className="distributor-label ml-2" >Type</label>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div> 
 </div>



      

      <div className="row">
       
      <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            
            <label className="distributor-label">Login</label>
            <i className="input-icon fa-solid fa-envelope"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid email address</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Password</label>
            <i className="input-icon fa-solid fa-phone-flip"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Name</label>
            <i className="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="desig"
              value={formData.desig}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Designation</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>



      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Department</label>
            <i className="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="areaId"
              value={formData.areaId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area ID</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>
      



      <div className="row">
        {/* <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="areaName"
              value={formData.areaName}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Name</label>
            <i className="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div> */}

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="distId"
              value={formData.distId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Distributor ID</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>



      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="Number"
              name="active"
              value={formData.active}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Active</label>
            <i className="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="passw"
              value={formData.passw}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Passw</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>

      </div>
      


      <div className="row">
      <div className="col-md-12 col-lg-6 col-sm-12">
  <div className="distributor-input-group">
    <input
      type="date"
      name="created"
      value={formData.created}
      onChange={handleChange}
      className="distributor-input"
      autoComplete="off"
    />
    <label className="distributor-label">Created Date</label>
  </div>
</div>

    

      </div>
      

      <div className="row">
        <div className="col-md-12 col-lg-4 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="zonal"
              value={formData.zonal}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Zonal</label>
            <i className="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-4 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Nick Name</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>




        <div className="col-md-12 col-lg-4 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="subArea"
              value={formData.subArea}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Sub Area</label>
            <i className="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i className="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i className="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
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

export default LoginInsert;














