import React, { useEffect, constructor, useState } from "react";
import style from '../../assets/css/App.styles'
import { Select, InputLabel, FormControl } from "@material-ui/core";
import { Catalogo } from "../../zustand/types";
import useMyStore from "../../zustand";


const [objStore] = useMyStore;
export default React.memo(function CustomSelect(this: any, {
  contenido,catalogo,seleccionadoValor
}: any){


  const classes = style();
  
  const [setSeleccionado] = React.useState(Object);

  const valorSeleccionado = (value:number|string|unknown) => {
      seleccionadoValor(value)
  };

  const selectCombo = (
    <div  style={{width:'100%'}}>
      <FormControl variant="outlined" className={classes.formControl} style={{ width:'100%' }}>
        <InputLabel htmlFor="outlined-age-native-simple">{catalogo}</InputLabel>
        <Select style={{
          borderRadius: "30px",
          width: '100%',
          borderColor: "blue",
          marginLeft:'3%',
          marginBottom: "3%",
          height: '40px'
        }}
        onChange={e=>valorSeleccionado(e.target.value)}
           native
          label="data"
          
          inputProps={{
            name: {catalogo},
            id: 'outlined-age-native-simple',
          }}
        >
         <option value={0}></option>
          {contenido.map((item: { Id: string | number | string[] | undefined; description: React.ReactNode; })=>
            <option value={item.Id}>{item.description}</option>)}
           
        </Select>
      </FormControl>
    
    </div>
  );
  return selectCombo

});




