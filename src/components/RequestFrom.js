import React, { useState } from "react";
import { Dialog, TextField, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { Dropdown } from "react-bootstrap";
import { Cloudinary } from "@cloudinary/base";


const RequestForm = ({open, setOpen}) => {
    const [ money, setMoney] = useState(null);
    const [ moneyVND, setMoneyVND] = useState(null)
    const [ requestFor, setRequestFor] = useState('Please choose one');
    const [ location, setLocation] = useState('');
    const [ details, setDetails] = useState('');
    const [ media, setMedia] = useState('');
    
    const request = {
      "need": money,
      "requestFor": requestFor,
      "location": location,
      "details": details,
      "media": media,
    };

    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dmgak3gru', 
      uploadPreset: 'jn245z5u'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          setMedia(result.info.secure_url)
        }
      }
    )
console.log("request", request)
    let VND = Intl.NumberFormat("en-VN", {
        style: "currency",
        currency: "VND",
    });
    
  const handleClose = () => {
    setOpen(false);
    if (!money || money <= 0 || !location || !media ) {
        alert('Please make sure your input is valid.')
    }
  };

  const handleCancel = () => {
      setOpen(false)
  }
  

  const handleMoneyInput = (e) => {
    setMoneyVND(VND.format(e.target.value));
    setMoney(e.target.value)
  }

  const handleClick = (e) => {
    setRequestFor(e.target.name)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  const handleDetails = (e) => {
    setDetails(e.target.value)
  }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">What do you request for?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please help us understand your needs better through the below information. We will send help as soon as possible.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="money"
            label="How much money do you need? *"
            type="number"
            fullWidth
            onChange={handleMoneyInput}
          /> {moneyVND}

          <div style={{display:"flex", gap:"2rem"}}>
<div>Request for: </div>
<Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      {requestFor}
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item name="Self" onClick={handleClick}>Self</Dropdown.Item>
      <Dropdown.Item name="Family" onClick={handleClick}>Family</Dropdown.Item>
      <Dropdown.Item name="Neighbor" onClick={handleClick}>Neighbor</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
          </div> < br/>

          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Tell us your city or province *"
            type="text"
            fullWidth
            onChange={handleLocation}
          /> <br/>

          <TextField
            autoFocus
            margin="dense"
            id="details"
            label="Share us your story"
            type="text"
            fullWidth
            onChange={handleDetails}
          /> <br/>
         
         <div style={{display:"flex", gap:"2rem"}}>
         <div> Upload your image *</div>
         <button onClick={myWidget.open} id="upload_widget" className="cloudinary-button">Upload files</button>
         </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
};

export default RequestForm;