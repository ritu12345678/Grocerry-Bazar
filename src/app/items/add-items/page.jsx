

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";


const ProductAdd = () => {


  return (
    <>
      <div className="mt-3 mb-5 row">
        <div className="col-md-6">
       <h4> Add New Product</h4>
        </div>
      </div>
      <div className="">
       
        <div className="card mb-4">
          <div className="card-body">
            <h6 className="mb-4">Product</h6>
            <div className="row">
              <div className="col-md-4 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Product Name"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-md-8 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Short description"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-md-4 mb-4">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value=""
                    label="Select Type"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Food</MenuItem>
                    <MenuItem value={20}>Cleaning</MenuItem>
                   
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-4 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Product Quantity"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-md-4 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Product Price"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-md-4 mb-4">
                <TextField
                  type="date"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                />
              </div>
              
              <div className="col-md-4 mb-4">
                <TextField
                  id="outlined-basic"
                  label="Enter Tags"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
       
       
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex gap-3 justify-content-end">
            <button  className="btn-yellow" >
    Add Product
    </button>
            <button className='btn btn-outline-danger' >Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
