import React, { useEffect, useState } from "react";
import Logo from "./../../assets/images/LogoGpac.png"
import CustomSelect from "../CustomSelect";
import useMyStore from "../../zustand"
import { Divider, Button, InputLabel, Select, FormControl, InputBase } from "@material-ui/core";
import { useParams } from "react-router-dom";
import customTextField from "../CustomTextField";
import CustomTextField from "../CustomTextField";
import { searchMap } from "../../zustand/types";
import CustomSelectOnChange from "../CustomSelectOnChange"; 
import style from '../../assets/css/App.styles'
const [objStore] = useMyStore;
 
const InventoryFilters: React.FC<{}> = () => {
const Search=objStore(state=>state.searchMap);
const classes = style();
const [search, setSearch] = useState<searchMap | undefined>({
  activty:0,
  type:0,
 
});

const infoSearch = {
  activty:0,
  type:0,
  coach:0,
  recluter:0,
  candidate:0,
  functional:0,
  specilty:0,
  industry:0,
  state:"",
  zip:""
}

  const arrayActivity = objStore(state => state.activity);
  const getActivity = objStore(state => state.getActivity);
  const arrayType = objStore(state => state.type);
  const getType = objStore(state => state.getType);
  const arrayIndustry = objStore(state => state.generic);
  const getGeneric = objStore(state => state.getGeneric);
  const arraySpecilty= objStore(state => state.specilty);
  const getGenericSpecilty=objStore(state => state.getSpecilty);
 
  const arrayFunctional= objStore(state => state.functional);
  const getFunctional=objStore(state => state.getFunctional);
  const arrayCandidate= objStore(state => state.candidate);
  const getCandidate=objStore(state => state.getCandidate);
  const arrayCoach= objStore(state => state.coach);
  const getCoach=objStore(state => state.getCoach);
 
  const arrayRecluiter= objStore(state => state.recluiter);
  const getRecluter=objStore(state => state.getRecluter);

  const arrayState= objStore(state => state.stated);
  const getState=objStore(state => state.getStated);
 
  const zipCodeArray = objStore(state => state.zipCodeInit);
  const getZipcodeInit = objStore(state => state.getZipCodeInit);
  const setViewPortInit=objStore(state=> state.setViewPort);
  const getMapFilters=objStore(state=> state.getMapFilters);
  const filters=objStore(state => state.filter);
  const stated = objStore(state => state.zipState);
  const zipValue = objStore(state => state.setZIP);
  const Type = objStore(state => state.setType);
  const Specilty = objStore(state => state.setSpecilty);
  const Recluter = objStore(state => state.setRecluter);
  const Industry = objStore(state => state.setIndustry);
  const Functional = objStore(state => state.setFunctional);
  const Coach = objStore(state => state.setCoach);
  const Candidate = objStore(state => state.setCoach);
  const Activity = objStore(state => state.setActivity);
  const Name = objStore(state => state.setName);
  const setViewPort = objStore(state => state.setViewPort);
  const saveObj=objStore(state=> state.guardaGpac);
  const saveInfo = objStore(state => state.setInfoGuardar);
  const isLoading = objStore(state => state.isLoading);
  useEffect(() => {

    (async function () {
      await getActivity();
      await getType();
      await getZipcodeInit();
      await getGeneric("industry");
      await getGenericSpecilty("specialty");
      await getFunctional("functional");
      await getCandidate("candidate_type");
      await getCoach("coach");
      await getRecluter("recruiter");
      await getState("state");
    })()
  },
    []
  );



  const renderActivity = (): undefined | JSX.Element | string => {
    if (arrayActivity && arrayActivity.contenido.length) {
      return <CustomSelect contenido={arrayActivity.contenido} catalogo={arrayActivity.catalogo} seleccionadoValor={setActivity} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderType = (): undefined | JSX.Element | string => {
    if (arrayType && arrayType.contenido.length) {
      return <CustomSelect contenido={arrayType.contenido} catalogo={arrayType.catalogo} seleccionadoValor={setType} />;
  
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderSpecilty = (): undefined | JSX.Element | string => {
    if (arraySpecilty && arraySpecilty.contenido.length) {
      return <CustomSelect contenido={arraySpecilty.contenido} catalogo={arraySpecilty.catalogo} seleccionadoValor={setSpecilty} />;
  
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderIndustry = (): undefined | JSX.Element | string => {
    if (arrayIndustry && arrayIndustry.contenido.length) {
      return <CustomSelect contenido={arrayIndustry.contenido} catalogo={arrayIndustry.catalogo} seleccionadoValor={setIndustry} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderFunctional = (): undefined | JSX.Element | string => {
    if (arrayFunctional && arrayFunctional.contenido.length) {
      return <CustomSelect contenido={arrayFunctional.contenido} catalogo={arrayFunctional.catalogo} seleccionadoValor={setFunctional} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderCandidate = (): undefined | JSX.Element | string => {
    if (arrayCandidate && arrayCandidate.contenido.length) {
      return <CustomSelect contenido={arrayCandidate.contenido} catalogo={arrayCandidate.catalogo} seleccionadoValor={setCandidate} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderCoach = (): undefined | JSX.Element | string => {
    if (arrayCoach && arrayCoach.contenido.length) {
      return <CustomSelect contenido={arrayCoach.contenido} catalogo={arrayCoach.catalogo} seleccionadoValor={setCoach} />;
   } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderRecluter = (): undefined | JSX.Element | string => {
    if (arrayRecluiter && arrayRecluiter.contenido.length) {
      return <CustomSelect contenido={arrayRecluiter.contenido} catalogo={arrayRecluiter.catalogo} seleccionadoValor={setRecluter} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderState = (): undefined | JSX.Element | string => {
    if (zipCodeArray && zipCodeArray.facet_groups.length) {
     
      return <CustomSelectOnChange contenido={zipCodeArray.facet_groups} catalogo={"state"} seleccionadoValor={setStated}  />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  const renderZip = (): undefined | JSX.Element | string => {
    if (zipCodeArray && zipCodeArray.facet_groups.length) {
      const zipCode = zipCodeArray.records.map( recorod=> {

        let rObj = {
          id:recorod.fields.zip,
          description:recorod.fields.zip
        }
        return rObj
      });
      return <CustomSelect  contenido={zipCode} catalogo={"Zipcode"} seleccionadoValor={setZipCode} />;
    } else if (isLoading) {
      return "Cargando";
    }
  }
  
  const setZipCode = async (seleccionado: string) => {
    infoSearch.zip=seleccionado;
  
     // await getActivity();
 
  };
  const setStated = async (seleccionado: string) => {
    infoSearch.state=seleccionado;
 
  };

  const setActivity = (seleccionado: number) => {
    Activity(filters,seleccionado);
  };
   
  const setType = (seleccionado: number) => {
    Type(filters,seleccionado);
   
  };
   
  const setCoach = (seleccionado: number) => {
    Coach(filters,seleccionado);
   
  };
   
  const setRecluter = (seleccionado: number) => {
    Recluter(filters,seleccionado);
  };
   
  const setCandidate = (seleccionado: number) => {
    Candidate(filters,seleccionado);
   
  };
  const setFunctional = (seleccionado: number) => {
    Functional(filters,seleccionado);
   
  };

 
const setSpecilty = (seleccionado: number) => {
  Specilty(filters,seleccionado);
 
};

const setIndustry = (seleccionado: number) => {
  Industry(filters,seleccionado);
 
};


  
  const handleOpen = (seleccionado: any) => {
    getMapFilters(filters)
  };

  const test = (seleccionado: string|unknown) => {
    var coordi= stated.options.find(c=> c.value==seleccionado);
  
saveInfo(seleccionado,coordi?.coordi[0],coordi?.coordi[1],saveObj);
  zipValue(filters,seleccionado)


   
  };
    
  const handleChange = (seleccionado: any) => {
    setViewPort({
latitude:saveObj.latitud,
longitude:saveObj.longitud,
zoom:8,
width: 1030,
height: 900

    })
    Name(filters,seleccionado);
  
}  
 

  return (
    <div id="filters" style={{ borderLeft: "1px solid grey" }} >
       {renderType()}
       <InputBase  className={classes.textSearchGeneric}
              placeholder="Search…"
              style={{
                width: "100%",
                padding:'5px',
                marginLeft:'3%',
                marginBottom: "3%",
                borderRadius: "30px",
                height: '40px'
      
              }}
              onChange={e=> handleChange(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
      {renderIndustry()}
      {renderSpecilty()}  
      {renderActivity()}
      {renderFunctional()}
      {renderCandidate()}
      {renderCoach()}
      {renderRecluter()}  
      {renderState()}
      <FormControl variant="outlined"   style={{ width:'100%' }}>
    
      <InputLabel htmlFor="outlined-age-native-simple">Zipcode</InputLabel>
        <Select style={{
          borderRadius: "30px",
          width: '100%',
          borderColor: "blue",
          marginLeft:'3%',
          marginBottom: "3%",
          height: '40px'
        }}
         
           native
           onChange={e=> test(e.target.value )}
       

        >
         <option value={0}></option>
         {stated.options.map(item =>
            <option value={item.value} >{item.value}</option>)} 
           
        </Select>
        </FormControl>
    
      <Button variant="contained" size="large" color="primary"    onClick={handleOpen} style={{
        width: '100%',
        borderRadius: '30px',
        padding: '5px',
        marginLeft: '3%'
      }} >
        SEARCH
      </Button>
    </div>
  );


}

export default InventoryFilters;