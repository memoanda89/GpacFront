import React, { useEffect, useState } from "react";
import { Grid, Button, createStyles, makeStyles, Theme, TextField, InputBase, FormControl, Select, InputLabel } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import CustomSelect from "../CustomSelect";
import useMyStore from "../../zustand";
import { useForm } from "react-hook-form";
import CustomTextField from "../CustomTextField";
import CustomSelectOnChange from "../CustomSelectOnChange";
import { searchMap } from "../../zustand/types";
import logo from './../../assets/images/logoGpac.png' 
 
import swal from 'sweetalert2';
 
const [objStore] = useMyStore;
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  button: {
    margin: theme.spacing(1),
  },textSearchGeneric : {
    borderTopLeftRadius:30 ,
    borderBottomLeftRadius:10 ,

    border:"1px solid black"
  }
}),
);

type Inputs = {
    example: string,
    exampleRequired: string,
  };
  const zipCode =[];
const AddModal :  React.FC<{}> = () => {
    const classes = useStyles();
    const Search=objStore(state=>state.searchMap);
   
    const [search, setSearch] = useState<searchMap | undefined>({
      activty:0,
      type:0
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
      const saveGpac=objStore(state=> state.SaveGpac);
      const saveObj=objStore(state=> state.guardaGpac);
     const guardarNameSet =objStore(state=> state.setNameGuardar);
      const isLoading = objStore(state => state.isLoading);
      const stated = objStore(state => state.zipState);
      const saveInfo = objStore(state => state.setInfoGuardar);

      const Type = objStore(state => state.setTypeSave);
  const Specilty = objStore(state => state.setSpeciltySave);
  const Recluter = objStore(state => state.setRecluterSave);
  const Industry = objStore(state => state.setIndustrySave);
  const Functional = objStore(state => state.setFunctionalSave);
  const Coach = objStore(state => state.setCoachSave);
  const Candidate = objStore(state => state.setCandidateSave);
  const Activity = objStore(state => state.setActivitySave);

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
         
          return <CustomSelectOnChange contenido={zipCodeArray.facet_groups} catalogo={"state"} seleccionadoValor={setStated} />;
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
        infoSearch.activty=seleccionado;
        Activity(saveObj,seleccionado);
      };
       
      const setType = (seleccionado: number) => {
        infoSearch.type=seleccionado;
        Type(saveObj,seleccionado);
      };
       
      const setCoach = (seleccionado: number) => {
        infoSearch.coach=seleccionado;
        Coach(saveObj,seleccionado);
      };
       
      const setRecluter = (seleccionado: number) => {
        infoSearch.recluter=seleccionado;
         Recluter(saveObj,seleccionado);
      };
       
      const setCandidate = (seleccionado: number) => {
        infoSearch.candidate=seleccionado;
        Candidate(saveObj,seleccionado);
      };
      const setFunctional = (seleccionado: number) => {
        infoSearch.functional=seleccionado;
        Functional(saveObj,seleccionado);
      };
    
     
    const setSpecilty = (seleccionado: number) => {
      infoSearch.specilty=seleccionado;
      Specilty(saveObj,seleccionado);
    };
    
    const setIndustry = (seleccionado: number) => {
      infoSearch.industry=seleccionado;
      Industry(saveObj,seleccionado);
    };
    
  
    
      const handleChange = (seleccionado: any) => {

        guardarNameSet(seleccionado,saveObj);
      swal.fire("calando");
    }  
     


  const test = (seleccionado: string|unknown) => {
    var coordi= stated.options.find(c=> c.value==seleccionado);
  
saveInfo(seleccionado,coordi?.coordi[0],coordi?.coordi[1],saveObj);
    
   };
      
        const GuardarRegistro = (seleccionado: any) => {


          console.log(saveObj);
          saveGpac(saveObj)

      
        };


    
  
      
       

    return (
 
    <form >
          
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <img src={logo} style={{height:"40px"}} alt="logo" />
        </Grid>
        <Grid item xs={4}>
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
        </Grid>
        <Grid item xs={4}>
       
        {renderSpecilty()}  
        </Grid>
        <Grid item xs={4}>
        {renderActivity()}
        </Grid> 
         <Grid item xs={4}>
         {renderFunctional()}
        </Grid>
       
        <Grid item xs={4}>
        {renderCandidate()}
        </Grid>
        <Grid item xs={4}>
        {renderCoach()}
    </Grid>
      <Grid item xs={4}>
      {renderRecluter()}  
        </Grid>
        <Grid item xs={4}>
      {renderIndustry()}  
        </Grid>
        <Grid item xs={4}>
      {renderType()}  
        </Grid>
        <Grid item xs={4}>
        {renderState()}
        </Grid>
       
        <Grid item xs={4}>
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
       <option>All</option>
       {stated.options.map(item =>
          <option value={item.value} >{item.value}</option>)} 
         
      </Select>
      </FormControl>
        </Grid>
       
        <Grid item xs={4}>
        <Button
       
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}  onClick={GuardarRegistro}
      >
        Save
      </Button>
        </Grid>
        </Grid>
        </form>
    );


}

export default AddModal;