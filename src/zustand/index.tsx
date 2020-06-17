import create, { GetState, SetState } from "zustand"
import { MyState, FiltersMap, viewport,GuardaGpac, zipState } from "./types";


export default create((setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
  
  // const server = "http://localhost:8081/api/";
  // const serverCatalog = "http://localhost:8081/api/getCatalogo/";
  const server = "http://lavameappservicios.us-west-2.elasticbeanstalk.com/api/";
  const serverCatalog = "http://lavameappservicios.us-west-2.elasticbeanstalk.com/api/getCatalogo/";

  const zipCodeApi = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&rows=300&facet=state";


  const zipcodeFilters = (value: FiltersMap) => {
    const api = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&refine.state=" + value.state
    return api;
  };
  const zipcodeFiltersString = (value: string) => {
    const api = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=&refine.state=" + value
    return api;
  };
  return {
    filter:{
      name:"",
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
    },
    viewport: {
      latitude: 40.5360,
      longitude: -94.7522,
      width: 1030,
      height: 900,
      zoom: 2
    },
    zipState:{
      value:"",
      options:[],
      
      
    },
    guardaGpac:{
      name:"",
      state:"",
      specilty:0,
      functional:0,
      activty:0,
      candidate:0,
      coach:0,
      industry:0,
      recluter:0,
      type:0,
      zip:"",
      latitud:0,
      longitud:0
    },
    searchMap: undefined,
    activity: undefined,
    getActivitySel: 0,
    generic: undefined,
    type: undefined,
    specilty: undefined,
    functional: undefined,
    candidate: undefined,
    coach: undefined,
    recluiter: undefined,
    stated: undefined,
    gpacMapObject: [],
    zipCode: {
      records: [],
      facet_groups: [

      ]
    },
    zipCodeInit: {
      records: [],
      facet_groups: [

      ]
    },
    isLoading: false,
    getActivity: async () => {
      setState({ isLoading: true });
      const result = await fetch(server + "getActivity");
      const activity = await result.json();
      setState({ activity, isLoading: false });

    },
    getType: async () => {
      setState({ isLoading: true });
      const result = await fetch(server + "getType");
      const type = await result.json();
      setState({ type, isLoading: false });

    }, getGapMap: async () => {
      setState({ isLoading: true });
      const result = await fetch(server + "getGpac");
      const gpacMapObject = await result.json();
      setState({ gpacMapObject, isLoading: false });

    },
    getZipCode: async () => {
      setState({ isLoading: true });
      const result = await fetch(zipCodeApi);
      const zipCode = await result.json();
      setState({ zipCode, isLoading: false });
 
    },
    getZipCodeInit: async () => {
      setState({ isLoading: true });
      const result = await fetch(zipCodeApi);
      const zipCodeInit = await result.json();
      setState({ zipCodeInit, isLoading: false });
     

    }, getGeneric: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const generic = await resultGeneric.json();
      setState({ generic, isLoading: false });


    }, 
    getSpecilty: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const specilty = await resultGeneric.json();
      setState({ specilty, isLoading: false });


    }, getFunctional: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const functional = await resultGeneric.json();
      setState({ functional, isLoading: false });


    }, getCandidate: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const candidate = await resultGeneric.json();
      setState({ candidate, isLoading: false });


    }, getCoach: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const coach = await resultGeneric.json();
      setState({ coach, isLoading: false });


    }, getRecluter: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const recluiter = await resultGeneric.json();
      setState({ recluiter, isLoading: false });


    }, getStated: async (catalogo: string) => {
      setState({ isLoading: true });
      const resultGeneric = await fetch(serverCatalog + catalogo);
      const stated = await resultGeneric.json();
      setState({ stated, isLoading: false });


    }, getMapFilters: async (filter: FiltersMap) => {
      setState({ isLoading: true });

      if(filter.state!="" ){

  
      const resultGeneric = await fetch(zipcodeFilters(filter));
      const zipCode = await resultGeneric.json();
      setState({ zipCode, isLoading: false });
    }
   
      const data = { filter };
      (async () => {
        const rawResponse = await fetch(server + "filtros", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
       
       const  gpacMapObject = await rawResponse.json();
 
      setState({gpacMapObject, isLoading: false });
      })();

    }, setViewPort:async(viewport: viewport) => {
      setState({
        viewport: viewport
      })
    }, SaveGpac:async (GuardaGpac: GuardaGpac) => {
      const data = { GuardaGpac };
      const option = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      var dataInfo = fetch(server + "GuardaGpac", option);
    }, getZipcode:async (state: any,FiltersMap: FiltersMap) => {

      const resultGeneric = await fetch(zipcodeFiltersString(state));
      const zipCodeArray= await resultGeneric.json();
    
      const data = zipCodeArray.records.map((recorod: { fields: { geopoint: any; zip: any; }; }) => {

        let rObj = {
          coordi:recorod.fields.geopoint,
          nombre:recorod.fields.zip,
          value:recorod.fields.zip
           
        }
        return rObj
      });
      
      const zipState={value:state,options:data};
      const filter=FiltersMap;
      filter.state=state;
        setState({zipState, isLoading: false,filter });
        
        console.log(filter);
    }, setZIP:async(filter: FiltersMap,zip: any) => {
      filter.zip=zip;
      setState({  isLoading: false,filter }); 
    }, setName:async(filter: FiltersMap,zip: any) => {
      filter.name=zip;
      setState({  isLoading: false,filter }); 
    },setType:async(filter: FiltersMap,type: any) => {
      filter.type=type;
      setState({  isLoading: false,filter }); 
    },setSpecilty:async(filter: FiltersMap,specilty: any) => {
      filter.specilty=specilty;
      setState({  isLoading: false,filter }); 
    },setRecluter:async(filter: FiltersMap,zip: any) => {
      filter.recluter=zip;
      setState({  isLoading: false,filter }); 
    },setIndustry:async(filter: FiltersMap,zip: any) => {
      filter.industry=zip;
      setState({  isLoading: false,filter }); 
    },setFunctional:async(filter: FiltersMap,zip: any) => {
      filter.functional=zip;
      setState({  isLoading: false,filter }); 
    },setCoach:async(filter: FiltersMap,zip: any) => {
      filter.coach=zip;
      setState({  isLoading: false,filter }); 
    },setCandidate:async(filter: FiltersMap,zip: any) => {
      filter.candidate=zip;
      setState({  isLoading: false,filter }); 
    },setActivity:async(filter: FiltersMap,zip: any) => {
      filter.activty=zip;
      setState({  isLoading: false,filter }); 
    },setNameGuardar:async(name:string,Gpac:GuardaGpac) => {
      const guardaGpac =Gpac;
      guardaGpac.name=name;
      setState({  isLoading: false,guardaGpac }); 
    }, getZipcodeGuarda:async (state: any,Gpac: GuardaGpac) => {

      const resultGeneric = await fetch(zipcodeFiltersString(state));
      const zipCodeArray= await resultGeneric.json();
    
      const data = zipCodeArray.records.map((recorod: { fields: { geopoint: any; zip: any; }; }) => {

        let rObj = {
          coordi:recorod.fields.geopoint,
          nombre:recorod.fields.zip,
          value:recorod.fields.zip
           
        }
        return rObj
      });
      
      const zipState={value:state,options:data};
      
      Gpac.state=state;
      const guardaGpac=Gpac;
        setState({zipState, isLoading: false,guardaGpac });
        
   
    },setInfoGuardar:async(zip:string,latitud:any,longitud:any,Gpac:GuardaGpac) => {
      const guardaGpac =Gpac;
      guardaGpac.zip=zip;
      guardaGpac.latitud=latitud;
      guardaGpac.longitud=longitud;
      console.log(guardaGpac);
      setState({  isLoading: false,guardaGpac }); 
    },setstateGuardar:async(name:any,Gpac:GuardaGpac) => {
      const guardaGpac =Gpac;
      guardaGpac.state=name;
  
      setState({  isLoading: false,guardaGpac }); 
    },setTypeSave:async(filter: GuardaGpac,type: any) => {
      filter.type=type;
      setState({  isLoading: false,filter }); 
    },setSpeciltySave:async(filter: GuardaGpac,specilty: any) => {
      filter.specilty=specilty;
      setState({  isLoading: false,filter }); 
    },setRecluterSave:async(filter: GuardaGpac,zip: any) => {
      filter.recluter=zip;
      setState({  isLoading: false,filter }); 
    },setIndustrySave:async(filter: GuardaGpac,zip: any) => {
      filter.industry=zip;
      setState({  isLoading: false,filter }); 
    },setFunctionalSave:async(filter: GuardaGpac,zip: any) => {
      filter.functional=zip;
      setState({  isLoading: false,filter }); 
    },setCoachSave:async(filter: GuardaGpac,zip: any) => {
      filter.coach=zip;
      setState({  isLoading: false,filter }); 
    },setCandidateSave:async(filter: GuardaGpac,zip: any) => {
      filter.candidate=zip;
      setState({  isLoading: false,filter }); 
    },setActivitySave:async(filter: GuardaGpac,zip: any) => {
      filter.activty=zip;
      setState({  isLoading: false,filter }); 
    }


  }
})

