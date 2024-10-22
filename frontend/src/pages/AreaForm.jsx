import React, { useState,} from 'react';
import '../DemoForm.css'; // Assuming you have a separate CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ThemeToggle from '../components/ThemeToggle';
const AreaEditForm = () => {

  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    AreaId: '',
    AreaName: '',
    Manager: '',
    E_Mail: '',
    ZoneId: '',
    status: '',
    lead_days: '',
    Manager_nick: '',
    area_manager: '',
    area_manager_email: '',
    area_manager_phone: '',
    manager_phone: '',
    FixPay: '',
    type:'',
    province:''
  });

  // Populate form data from row data
  // useEffect(() => {
  //   console.log("This is the Data coming from Area Table : ", rowData);
  //   if (rowData) {
  //     setFormData({
  //       AreaId: rowData.AreaId,
  //       AreaName: rowData.AreaName,
  //       Manager: rowData.Manager,
  //       E_Mail: rowData.E_Mail,
  //       ZoneId: rowData.ZoneId,
  //       status: rowData.status,
  //       lead_days: rowData.lead_days,
  //       Manager_nick: rowData.Manager_nick,
  //       area_manager: rowData.area_manager,
  //       area_manager_email: rowData.area_manager_email,
  //       area_manager_phone: rowData.area_manager_phone,
  //       manager_phone: rowData.manager_phone,
  //       FixPay: rowData.FixPay
  //     });

      
  //   }
  // }, [rowData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //    console.log('Inserted Data : ',formData)
  //   try {
  //    const response = await axios.post("http://localhost:5555/area", formData);
      
  //    if (response.status === 201)
  //    {
  //    navigate("/areaTable"); // Navigate back to AreaTable after successful update
  //    }
   
  //   } catch (error) {
  //     console.error("Error: Inserting area data: ", error);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log("Submitted Data of Form : ", formData);
    try {
        
        const response = await axios.post("http://localhost:5555/area", formData); // Post request to the server's '/area' endpoint
          console.log(response);
        if (response.status === 201) {  // Check if the response is OK
          alert('Area added successfully!');
          
          setFormData({
            AreaId: '',
            AreaName: '',
            ZoneId: '',
            status: '',
            arr_date: '',
            lead_days: '',
            Manager: '',
            E_Mail: '',
            Manager_nick: '',
            area_manager: '',
            area_manager_email: '',
            area_manager_phone: '',
            manager_phone: '',
            FixPay: '',
            type:'',
            province:''
          });
          navigate("/areaTable");
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
    <div className="areaForm">
    <ThemeToggle onThemeChange={handleThemeChange} />
    <div className={` distributor-form__container ${theme} mt-5`}>
     
    <form onSubmit={handleSubmit} >
    <h1 className="distributor-form__title p-1 w-50 mb-5 ">Area Information</h1>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
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
          <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback">  <i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid distributor name </div>
            <label className="distributor-label">Area ID</label>
            <i className="input-icon fa fa-user"></i>
          </div>
        </div>
        <div className="distributor-input-group col-md-12 col-lg-6 col-sm-12">
        <i class="input-icon fa-solid fa-street-view mr-5"></i>
            <select
              required
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="distributor-input"
            >
              <option value="" disabled hidden> 
                
                
               </option>
              <option value="0">0</option>
              <option value="1">1</option>
              {/* <option value="Dropshipping">Dropshipping</option> */}

            </select>
            
            
           <label className="distributor-label ml-2" >Status</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please select a sale area.</div>
            
          </div>
 </div>



      

      <div className="row">
       
      <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="AreaName"
              value={formData.AreaName}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            
            <label className="distributor-label">Area Name</label>
            <i class="input-icon fa-solid fa-envelope"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid email address</div>
          </div>
        </div>
       
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="Manager"
              value={formData.Manager}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manger</label>
            <i class="input-icon fa-solid fa-phone-flip"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp; Please enter a valid 11-digit phone number</div>
          </div>
        </div>
        
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="email"
              name="E_Mail"
              value={formData.E_Mail}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">E-mail</label>
            <i class="input-icon  fa-solid fa-location-crosshairs"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid address</div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="distSince"
              value={formData.date}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Date</label>
            <i class="input-icon fa-solid fa-calendar-days"></i>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter the year since the distributor started</div>
          </div>
        </div>





      </div>
      
    
  


      <div className="row mt-5">
        <div className=" col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="ZoneId"
              value={formData.ZoneId}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Zone ID</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid NTC Value</div>
            <i class="input-icon fa-brands fa-cc-diners-club"></i>
          </div>
        </div>


        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="lead_days"
              value={formData.lead_days}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
            <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid CNIC Number</div>
            <label className="distributor-label">Lead Days</label>
            <i class="input-icon fa-solid fa-address-card"></i>
          </div>
        </div>
       
 </div>
 <div className="row">
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="Manager_nick"
              value={formData.Manager_nick}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manager Nick Name</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid GL Customer ID</div>
            <i class="input-icon fa-regular fa-address-card"></i>
          </div>
        </div>


        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="area_manager"
              value={formData.area_manager}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid Status of SSR
          </div>
            <i class="input-icon fa-solid fa-file-shield"></i>
          </div>
        </div>
       
 </div>


      {/* Select Dropdown for Distributor Category */}
      <div className="row">
        {/* <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <select
              required
              name="strn"
              value={formData.strn}
              onChange={handleChange}
              className="distributor-input"
            >
              <option value="" disabled hidden>

              </option>
              
              <option value="Wholesale">Registered</option>
              <option value="Retail">Unregistered</option>
              
            </select>
            <label className="distributor-label">STRN</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid STRN Status</div>
            <i class="input-icon mr-2 fa-regular fa-file-lines"></i>
          </div>
        </div> */}
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="email"
              name="area_manager_email"
              value={formData.area_manager_email}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager' Email</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="area_manager_phone"
              value={formData.area_manager_phone}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Area Manager's Phone</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
  </div>



  <div className="row">
        
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="manager_phone"
              value={formData.manager_phone}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Manager's Phone</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="number"
              name="FixPay"
              value={formData.FixPay}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Fixed Pay</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
  </div>






  <div className="row">
        
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Type</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-sm-12">
          <div className="distributor-input-group">
            <input
              required
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="distributor-input"
              autoComplete="off"
            />
            <label className="distributor-label">Province</label>
            <div className="valid-feedback"><i class="fa-regular fa-circle-check"></i></div>
          <div className="invalid-feedback"><i class="fa-solid fa-triangle-exclamation"></i>&nbsp; &nbsp;Please enter a valid number of Days</div>
            <i class="input-icon fa-solid fa-lock"></i>
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

export default AreaEditForm;














