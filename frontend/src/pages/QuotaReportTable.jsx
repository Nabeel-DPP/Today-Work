import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import "../Table.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUpModal } from '../components/Modal';
import { useLocation } from 'react-router-dom';
import QuotaSnackbar from './QuotaSnackbar';
import QuotaReport from './QuotaReport';
const QuotaReportTable =()=> 
{ 
  const location = useLocation();
  const {  displayData,formData } = location.state || {};
  console.log("FormData is come from Create Order" ,formData)
  console.log("Display data of the Form" ,displayData)
  const [snackbar , setSnackbar] = useState(false);
  const navigate = useNavigate();
  const [recordToDelete, setRecordToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quota , setQuota]=useState("")
  const [error, setError] = useState(null);
  const [editRow , setEditRow] = useState(null);
  const [totalPurchase, setTotalPurchase] = useState(0);
  const [productData , setProductData ] = useState([]);
  const [quotaData , setQuotaData] =useState([]);
  const [orderData , setOrderData] = useState([]);
const [orderDetailData , setOrderDetailData] =useState([]);
const [updatedQuota , setUpdatedQuota] =useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productResponse, productLogResponse, orderDetailResponse ,quotaDetailResponse ] = await Promise.all([
          axios.get("http://localhost:5555/product"),        // Fetch products
          axios.get("http://localhost:5555/prodLog"),     // Fetch product logs
          axios.get("http://localhost:5555/orderDetail"),    // Fetch order details
          axios.get("http://localhost:5555/pdQuota") // Fetch Quota Details 
        ]);
  
        setQuotaData(quotaDetailResponse.data);

   
        // Combine the data into a unified structure
        const combinedData = productResponse.data.map((product) => {
          const productLog = productLogResponse.data.find((log) => log.prod_id === product.prod_id && log.log_status==1 && log.bonus_units !==0 );
          const orderDetail = orderDetailResponse.data.find((detail) => detail.product_id === product.prod_id);
         const quotaDetail =quotaDetailResponse.data.find((detail) => detail. PrdId == product.prod_id);
         let prodQuota = quotaDetail?.Quota;
        //  console.log("Quota Found " , prodQuota);
          const baseSchemeValue = productLog?.bonus_scheme ? Math.floor(productLog.bonus_scheme / 10) : 0;
          const bonusSchemeValue = productLog?.bonus_units ? Math.floor(productLog.bonus_units / 10) : 0;
          const schemeValue = `${baseSchemeValue}+${bonusSchemeValue}`;
          
          

          return {
            _id: product._id,
            prod_id: product.prod_id,
            prod_name: product.prod_name,
           f_price: productLog?.fp || "N/A",
           t_price: productLog?.tp || "N/A",  // Price from product log
           mr_price: productLog?.mrp || "N/A",  // Price from product log 
           scheme: schemeValue || "N/A",       // Calculated scheme
            base_units: productLog?.bonus_scheme || "N/A", // Base packs from order detail
            bonus_units: productLog?.bonus_units || "N/A", // Bonus packs from order detail
            // value: orderDetail?.value || "N/A", // Bonus packs from order detail
            // base_units:"",
            // bonus_units:"",
            // value:"",
            rpb:productLog?.rpb,
            originalBonusSchemeValue: bonusSchemeValue,
            quota:prodQuota || ""
          };

        }).filter((item) => item.f_price !== "N/A");
        ;
  
console.log(orderDetailResponse);

        setRows(combinedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from multiple sources:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  useEffect(()=>
    {
    
    const fetchDatabase = async () => {
      try {
        const orderResponse = await axios.get("http://localhost:5555/order");
        console.log("DB Required 1: " , orderResponse.data)
        setOrderData(orderResponse.data);
  
  
        const response = await axios.get("http://localhost:5555/orderDetail");
        console.log("DB Required 2: " , response.data)
        setOrderDetailData(response.data);
  
      } catch (error) {
        console.error("Error fetching the data: ", error);
        setError(error);
        
      }
    };
    fetchDatabase();
  
  
  
  },[])
  

// This is the useEffect for fetching the Updated Quota Values based on Previous Placed Order
  useEffect(() => {

    const adjustQuota = () => {
         
      const userStartDate = new Date(formData.startDate); // User-provided start date
const userEndDate = new Date(formData.endDate);     // User-provided end date

const filteredOrders = orderData.filter((order) => {
  const orderDate = new Date(order.FeedDate); // Convert order's FeedDate to Date object
  return (
    order.tblDistId == formData.tblDistId &&
    orderDate >= userStartDate &&
    orderDate <= userEndDate
  );
});
            // Filter orders within the given conditions
          // const filteredOrders = orderData.filter(
          //   (order) =>
          //     order.tblDistId == formData.tblDistId &&
          //     new Date(order.FeedDate) >= new Date("2024-12-1")
          // );
      
          console.log("Log1 :",filteredOrders)
      
          if (filteredOrders.length > 0) {
            // Extract order IDs from filtered orders
            const orderIDs = filteredOrders.map((order) => order.OrderId);
      
            console.log("Distributor has placed this order:" , orderIDs)
      
            // Filter order details based on the product ID and order IDs
            // const filteredOrderDetails = orderDetailData.filter((detail) =>
            //   orderIDs.includes(detail.order_id) && detail.prod_id === newRow.prod_id
            // );
            const filteredOrderDetails = orderDetailData.filter((detail) =>
              orderIDs.includes(detail.order_id)
            );
            console.log("Order Details" ,filteredOrderDetails)
            // console.log("Quota Details" , quotaData);
      
      
      
      
      
      const quotaProducts = quotaData.filter((prod) => {
        const filterOrder = filteredOrderDetails.filter((detail) => {
          return detail.prod_id === prod.PrdId; // Explicit return for the condition
        });
      
        // console.log(filterOrder); // To log the filtered orders for debugging
      
        return filterOrder.length > 0; // Return true if filterOrder contains items
      });
      
      console.log("Quota Product that match Product ID : ",quotaProducts); // Use this further as needed
      
      const requiredRecord = quotaProducts.filter((q)=>
      {
        return q.AreaId ==formData.tblAreaId && q.DistId== formData.tblDistId
        
      })
      
      //Previous Product with Quota
      console.log("Required Product :" , requiredRecord)
      
      // const reqRecId = requiredRecord.map((reqRec)=>{
      //   return reqRec.PrdId
      // })
      // console.log(reqRecId);
      
       
      
      //Overall Quota on Product 
      const pwq = rows.filter((r)=>
      {
        return r.quota > 0
      })
      
      console.log(pwq);
      
      console.log("Required Records : " , requiredRecord);
      console.log("Filter Records : " , filteredOrderDetails);
      console.log("Products with Quota Records : " , pwq);


      const mergedFilterOrderDetails = filteredOrderDetails.reduce((acc, detail) => {
        const existing = acc.find(item => item.prod_id === detail.prod_id);
        if (existing) {
          // Add base_units if the prod_id already exists
          existing.base_units += detail.base_units;
        } else {
          // Add the current detail to the accumulator if it's a new prod_id
          acc.push({ ...detail });
        }
        return acc;
      }, []);
      
      console.log("Merged Filter Order Details:", mergedFilterOrderDetails);




      function updateQuota(requiredRecord,mergedFilterOrderDetails, pwq ) {
        // Step 1: Extract PrdId from requiredRecord into an array ok
        const prdIds = requiredRecord.map((record) => record.PrdId);
        // Step 2: Loop over each record in rows and check if prod_id is in prdIds
        const updatedPwq = pwq.map((pwq) => {
          // Check if row's prod_id matches any in prdIds
          if (prdIds.includes(pwq.prod_id)) {
              console.log(pwq.quota);
                setQuota(pwq.quota) 
              
            
              
            // Step 3: Find the corresponding base_units from filterOrderDetails for the matching prod_id
            const orderDetail = mergedFilterOrderDetails.find((detail) => detail.prod_id == pwq.prod_id);
             console.log("Order Detail Records : " , orderDetail)
          //  console.log("Order of Quota : " , orderDetail.base_units)
            if (orderDetail) {
              // Subtract base_units from the quota
              return { ...pwq, quota: pwq.quota - orderDetail.base_units };
            }
          }
          // If prod_id doesn't match or no base_units found, return the row unchanged
          return pwq;
        });
        // console.log(updatedPwq);
      
        return updatedPwq;
      }
      
      
      
      // Call the function and get the updated rows with adjusted quotas
      const updatedPwq = updateQuota(requiredRecord,mergedFilterOrderDetails , pwq );
      
      console.log("Updated PWQ:", updatedPwq); 
      setUpdatedQuota(updatedPwq);
      // setRows(updatedPwq);
      
      
      
      const mergedRows = rows.map((row) => {
        // Check if there's an updated quota for the current row's prod_id
        const updatedRow = updatedPwq.find((item) => item.prod_id == row.prod_id);
      
        // console.log("Updated Row : " , updatedRow)
        // If updatedRow exists, update the quota, otherwise keep the existing row
        return updatedRow ? { ...row, quota: updatedRow.quota } : row
      });
      
      console.log("Updated Quota in Rows : ",mergedRows);
      
       setRows(mergedRows)
      // setMergeData(mergedRows);
      
      
      // setRows(mergeData);
      
            // Calculate total base packs already purchased
           
      
      
      
      
            
          }
      
          
  
    
    };
  
    // Call adjustQuota after rows are rendered
    adjustQuota();
  }, [orderData , orderDetailData]); // Add dependencies
  
  


  

  const handleEditClick = (id) => {
    const selectedRow = rows.find((row) => row._id === id);
    navigate('/productEdit', { state: { rowData: selectedRow } });
  };



const handleDeleteClick = (id) => {
  setRecordToDelete(id); // Set the record ID to delete
  setShowModal(true); // Show the modal
};

const confirmDelete = async () => {
  if (recordToDelete) {
    try {
      // Send DELETE request to the server
      await axios.delete(`http://localhost:5555/product/${recordToDelete}`); // Adjust to your delete endpoint
      // Update local state to remove the deleted record
      setRows(rows.filter((row) => row._id !== recordToDelete));
    } catch (error) {
      console.error('Error deleting the row:', error);
    } finally {
      setShowModal(false); // Hide the modal after the operation
      setRecordToDelete(null); // Clear the record ID
    }
  }
};

const cancelDelete = () => {
  setShowModal(false); // Just hide the modal
  setRecordToDelete(null); // Clear the record ID
};






//This is the Perfect Function for updating a row
const processRowUpdate = async (newRow, oldRow) => {
  try {
    // Calculate bonus_units and value dynamically based on the new base_units
    let [baseSchemeValue, bonusSchemeValue] = newRow.scheme.split("+").map(Number);
    console.log("Base :",baseSchemeValue);
    console.log("Bonus :",bonusSchemeValue);
    const prod_quota = newRow.quota;
    console.log("Product Quota is :",prod_quota);
    console.log("Base Packs : ", newRow.base_units);
    setQuota(prod_quota);
    
   
setProductData(newRow);

  

    // console.log(newRow.rpb);  This line shows the RPB value for this Product




    const originalBonusSchemeValue = newRow.originalBonusSchemeValue || bonusSchemeValue;
   

    let bonusUnits;
    let isMatchedQuotaId = (quotaData, newRow) => {
      return quotaData.some((q) => q.PrdId == newRow.prod_id);
    };
    let isMatch =isMatchedQuotaId(quotaData, newRow);
    console.log("ID Matched:",isMatch );
//If Base Units are greater than the RPB
    if(newRow.base_units >= newRow.rpb )
    {

//If the Base Units are greater and have Quota on it 
            if(prod_quota)
              {
                  if(newRow.base_units <= prod_quota)
                  {
                    bonusUnits = Math.floor((newRow.base_units / baseSchemeValue) * originalBonusSchemeValue);
                    newRow.scheme = `${baseSchemeValue}+${originalBonusSchemeValue}`; // Update the scheme field 
                    
                   
                  }
                  else
                  { 
                    console.log("Exeed the Quota")
                    console.log("RPB for this Row is : " , newRow.rpb);
                    // alert(`You cannot Exceed from the Quota : ${prod_quota}`);
                    setSnackbar(true);
                  
                    newRow.base_units=prod_quota;
                    if(newRow.base_units >= newRow.rpb ) {bonusUnits = Math.floor((newRow.base_units / baseSchemeValue) * originalBonusSchemeValue) } else {bonusUnits=0;bonusSchemeValue=0}
                    newRow.scheme = `${baseSchemeValue}+${bonusSchemeValue}`;
                    console.log("Scheme has been changed : " , newRow.scheme);
                   
                  }

              }
              else if(prod_quota ==0 && isMatch )
                {
                 setSnackbar(true);
                 newRow.base_units = prod_quota
                }
               else 
               {
                //If the Base Units are greater and have no Quota on it 
                 bonusUnits = Math.floor((newRow.base_units/baseSchemeValue) * originalBonusSchemeValue);  
                 //  bonusUnits = Math.floor((newRow.base_units / baseSchemeValue) * originalBonusSchemeValue);
                 newRow.scheme = `${baseSchemeValue}+${originalBonusSchemeValue}`; // Update the scheme field
               
               }


    
  }
  //If Base Units are less than the RPB
    else 
    { 

   // bonusUnits = Math.floor((newRow.base_units/baseSchemeValue) * 1 );
      bonusUnits=0;
      bonusSchemeValue = 0; // Change the bonus scheme value
      newRow.scheme = `${baseSchemeValue}+${bonusSchemeValue}`;

      // let isMatchedQuotaId = (quotaData, newRow) => {
      //   return quotaData.some((q) => q.PrdId == newRow.prod_id);
      // };
      // let isMatch =isMatchedQuotaId(quotaData, newRow);
      // console.log("ID Matched:",isMatch );
     
      // console.log("Your New Row Scheme is : " , newRow.scheme);
            //If base units are less than RPB then we again check Quota on it
               if(prod_quota)
               {
               
                     if(newRow.base_units <= prod_quota)
                       {
                               // bonusUnits = Math.floor((newRow.base_units / baseSchemeValue) * originalBonusSchemeValue);
                               bonusUnits=0;
                               newRow.scheme = `${baseSchemeValue}+${bonusSchemeValue}`; // Update the scheme field    
                            
                        }
                     else
                        { 
                               console.log("Exeed the Quota")
                              // alert(`You cannot Exceed from the Quota : ${prod_quota}`);
                              setSnackbar(true);
         
                          newRow.base_units=prod_quota;
                          newRow.scheme = `${baseSchemeValue}+${bonusSchemeValue}`;
                        // bonusUnits = Math.floor((newRow.base_units / baseSchemeValue) * originalBonusSchemeValue);
                          // newRow.scheme = `${baseSchemeValue}+${originalBonusSchemeValue}`; // Update the scheme field 
                          
                        }

                } 
               else if(prod_quota ==0 && isMatch )
                {
                 setSnackbar(true);
                 newRow.base_units = prod_quota
                }
                else 
                {
                  console.log("Its not Quota Product");
                }
                           
  
    }
                                                                                                                        // Example: 10% of base_units
    const saleValue = Math.floor(newRow.base_units * newRow.f_price); // Example: base_units * f_price

    const updatedRow = {
      ...newRow,
      bonus_units: bonusUnits,
      value: saleValue,
    };

    // setTotalPurchase((prevTotal) => prevTotal + saleValue);

    setTotalPurchase((prevTotal) => prevTotal - oldRow.value + saleValue);
    const updatedRows = rows.map((row) => (row._id === newRow._id ? updatedRow : row));
    setRows(updatedRows);
    // const updatedRows = rows.map((row) => (row._id === newRow._id ? updatedRow : row));
    // setRows(updatedRows);

    console.log("Values in Updated Rows : " , updatedRow);
    return updatedRow;
  } catch (error) {
    console.error("Error during row update:", error);
    return oldRow; // Revert back to the old row in case of an error
  }
};



const handleProcessRowUpdateError = (error) => {
  console.error("Error during row update:", error);
};


const columns = [
  { field: 'prod_id', headerName: 'Sr. #', width: 75 , flex:1 },
  { field: 'prod_name', headerName: 'Product Name', width: 230 , flex:1 },
  { field: 'f_price', headerName: 'Price', width: 80, flex:1 } ,
  { field: 'scheme', headerName: 'Scheme', width: 80 , flex:1 },
  {
    field: 'base_units',
    headerName: 'Base Packs',
    width: 100,
    // editable: true, // Allow editing
    flex:1
  },
  {
    field: 'bonus_units',
    headerName: 'Bonus Packs',
    width: 110,
     flex:1
  },
  // {
  //   field: 'value',
  //   headerName: 'Sale Value',
  //   width: 100,
  //    flex:1
  // },
  {
    field: 'quota',
    headerName: 'Quota',
    width: 100,
     flex:1
  },
  
  // { field: 'narration', headerName: 'Narration', width: 100 , flex:1 },
 
];




  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const handleProceedToLastStep = () => {
    navigate('/finalOrder', { state: { rows , totalPurchase, formData } });
  };

  return (
    
    <div className='mx-5'>

<div className="add-btn d-flex w-100 mb-5 justify-content-end">
    <Link to="/productInsert" className='btn  btn-outline-success' > <i className="fa-regular fa-pen-to-square"></i></Link>
   
    
    </div>
    <div className="container d-flex justify-content-around">
      <div className="date row ">
      <p>From :</p> <p> {formData.startDate} </p>
      </div>
      <div className="date row">
      <p>To :</p> <p>{formData.endDate} </p>
      </div>
    </div>

    {displayData ? (
        <div className="card shadow-sm display-data">
          <div className="state-card-header  ">
            <span>Distributor Details</span>
          </div>
          <div className="card-body">
          <div className="row mb-3">
              <div className="col-md-6">
                <strong>Area ID:</strong>
              </div>
              <div className="col-md-6">
                {formData.tblAreaId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Distributor ID:</strong>
              </div>
              <div className="col-md-6">
                {formData.tblDistId}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Distributor Name:</strong>
              </div>
              <div className="col-md-6">
                {displayData.distributorName}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <strong>Sale Area Name:</strong>
              </div>
              <div className="col-md-6">
                {displayData.saleAreaName}
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center">
          <strong>No data available.</strong>
        </div>
      )}


<div className="stateInfoContainer mt-5 mb-5">
     {/* <h1 className="text-center mb-4">Select Product</h1> */}
    

    </div>
    <div className="table-caption">
    <h3 className="text-center col-md-6 border form-head-text p-2">Product Quota List</h3>
    </div>

   



    <Paper style={{ height: 700, width: '100%' }}>
   
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        checkboxSelection
        getRowId={(row) => row._id}// Specify _id as the unique identifier
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        initialState={{
          sorting: {
            sortModel: [{ field: 'prod_id', sort: 'asc' }], // Default sorting by 'value' in descending order
          },
        }}
        
        sx={{
            border: 0,
            boxShadow:5, // Remove default border
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#385F98',
              color: "white",
              // Bootstrap table header color
            },
            '& .MuiDataGrid-cell': {
              border: '1px solid #dee2e6', // Bootstrap table cell border
            },
            '& .MuiDataGrid-root': {
              fontSize: '15px' // Adjust text size
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#f1f1f1', // Hover effect like Bootstrap's 'table-hover'
            },
          }}
      />
    </Paper>
    {showModal && (
        <PopUpModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}


      <QuotaSnackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        productData= {productData}
      />
    </div>
  );
}

export default QuotaReportTable;