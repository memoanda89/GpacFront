import React, { useEffect, constructor, useState } from "react";
import style from '../../assets/css/App.styles'
import { Select, InputLabel, FormControl } from "@material-ui/core";
import { Catalogo } from "../../zustand/types";
import useMyStore from "../../zustand";


const [objStore] = useMyStore;
export default React.memo(function CustomSelectOnChange(this: any, {
  contenido,catalogo,seleccionadoValor
}: any){

 
  const classes = style();
  const stated = objStore(state => state.zipState);
  const getZipCode = objStore(state => state.getZipcode);
  const filters=objStore(state => state.filter);
  const [setSeleccionado] = React.useState(Object);
  const saveObj=objStore(state=> state.guardaGpac);
const guardaState=objStore(state => state.setstateGuardar);
  const valorSeleccionado = (value:number|string|unknown) => {
       
    guardaState(value,saveObj);
      getZipCode(value,filters)
      
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
       
    onChange={e=> valorSeleccionado(e.target.value )}
           native
          label="data"
          
          inputProps={{
            name: {catalogo},
            id: 'outlined-age-native-simple',
          }}
        >
         <option value={0}></option>
          {contenido[0].facets.map((item: { name: string | number | string[] | undefined; description: React.ReactNode; })=>
            <option value={item.name}>{item.name}</option>)}
           
        </Select>
      </FormControl>
    
    </div>
  );
  return selectCombo

});




