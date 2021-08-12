import React from "react";
import {Alert, AlertTitle} from '@material-ui/lab/';


const AlertSuccess = ({success}) => {
    
    return (
        <Alert severity="success" style={{display: success ? "block": "none"}}>
        <AlertTitle>Success</AlertTitle>
        Your account has been created successfully — <strong><a href="/login">You may log in right here.</a></strong>
      </Alert>
    )
};
export default AlertSuccess