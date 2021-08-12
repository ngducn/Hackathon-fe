import React from "react";
import { TextField, Button } from "@material-ui/core";

const OTPForm = ({handleSubmitOTP, handleOtp}) => {

    return (
        <form  className="formSignUp" style={{textAlign:"center"}} noValidate autoComplete="off" onSubmit={handleSubmitOTP}>
        <div>
            <TextField id="standard-basic" label="SMS OTP" type="number" onChange={handleOtp}/>
            <Button variant="contained">Resend</Button>
         </div> <br />
 
        <span>
        <Button variant="contained" color="primary" className="submit" type="submit" style={{backgroundColor:"#ff4c68"}}>
          Submit
       </Button>
       </span>
        </form>
    )
};
export default OTPForm