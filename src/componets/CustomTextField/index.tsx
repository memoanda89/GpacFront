import React from "react";
import { TextField, InputBase } from "@material-ui/core";
import style from '../../assets/css/App.styles'
 
 
const CustomTextField :  React.FC<{}> = () => {
    const classes = style();
    return (
        <div >
                

<InputBase className={classes.textSearchGeneric}
              placeholder="Search…"
              style={{
                width: "100%",
                
                padding:'5px',
                marginLeft:'3%',
                marginBottom: "3%",
                borderRadius: "30px",
                height: '40px'
      
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );


}

export default CustomTextField;