import React from "react";
import {Alert, AlertTitle} from '@material-ui/lab/';


const AlertError = ({alert, isSubmitted}) => {

    return (
        <Alert severity="error" style={{display: alert ? "block" : "none"}}>
           <AlertTitle>Error</AlertTitle> {isSubmitted ? "This field is required." : "Please fill down the valid content in all below fields and check our Temrs & Conditions."}
            — <strong>Check again!</strong>
        </Alert>
    )
};
export default AlertError