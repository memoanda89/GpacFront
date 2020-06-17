export interface User {
    address: object;
    company: object;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
  } 
  export interface data {
    Id: number;
    description: string;
   
  } 
  


  export interface Catalogo {
    contenido:data[];
    catalogo:String;
    seleccionado:number|string|unknown;
  } 

  export interface GpacMap{
    gpac :GpacObj[];
  }

  export interface GpacObj{
    id:number;
    name:string;
    zipCode:number;
    latitud:number;
    longitud:number
    idState:number;
    IdActivity:number;
  }

export interface fieldsZipMap{
  
    city: string;
    zip: number;
    dst: number;
    geopoint: number[],
    longitude: number;
    state: string;
    latitude: number;
    timezone: number;
   
 
}
export interface geometryZipMap{
  
    city: string;
    zip: number;
    dst: number;
    geopoint: number[],
    longitude: number;
    state: string;
    latitude: number;
    timezone: number;
 
}
export interface zipCodeObject{
    datasetid:string;
    recordid:string;
    fields: fieldsZipMap,
    geometry: geometryZipMap,
    record_timestamp: string;
}
export interface facets{
    count: number,
    path: string,
    state: string,
    name: string,
}
export interface facet_groups{
    facets:facets[]
}
export interface zipCodeMap{
    records:zipCodeObject[];
    facet_groups:facet_groups[];
}

export interface  searchMap{
    activty:number;
    type:number;
    
}
export interface FiltersMap{
  name:string;
  activty:number;
  type:number;
  coach:number;
  recluter:number;
  candidate:number;
  functional:number;
  specilty:number;
  industry:number;
  state:string;
  zip:string;
}

export interface GuardaGpac{
name:string;
activty:number;
type:number;
coach:number;
recluter:number;
candidate:number;
functional:number;
specilty:number;
industry:number;
state:string;
zip:string;
latitud:number;
longitud:number;
}
export interface viewport{
    latitude:number,
    longitude:number,
    width:number,
    height:number,
    zoom:number
}

export interface zipState{
    value: string,
    options: zipProperties[];
   
}
export interface zipProperties{
  value:string;
  value2:string;
  nombre:string;
  coordi:number[];
 
}
  export interface MyState {
    filter:FiltersMap;
    zipState:zipState;
    viewport:viewport;
    searchMap:searchMap|undefined;
    getActivitySel:number;
    zipCodeInit:zipCodeMap;
    zipCode:zipCodeMap;
    activity:Catalogo| undefined;
    type:Catalogo| undefined;
    generic:Catalogo| undefined;
    specilty:Catalogo|undefined;
    functional:Catalogo|undefined;
    candidate:Catalogo|undefined;
    coach:Catalogo|undefined;
    recluiter:Catalogo|undefined;
    stated:Catalogo|undefined;
    guardaGpac:GuardaGpac;
    gpacMapObject:GpacObj[];
    isLoading: boolean;
    getActivity:()=>void;
    getType:()=>void;
    getGeneric:(catalogo:string)=>void;
    getGapMap:()=>void;
    getZipCode:()=>void;
    getZipCodeInit:()=>void;
    getSpecilty:(catalogo:string)=>void;
    getFunctional:(catalogo:string)=>void;
    getCandidate:(catalogo:string)=>void;
    getCoach:(catalogo:string)=>void;
    getRecluter:(catalogo:string)=>void;
    getStated:(catalogo:string)=>void;
    getMapFilters:(arg0: FiltersMap)=>void;
    setViewPort:( viewport:viewport)=>void;
    SaveGpac:( gpac:GuardaGpac)=>void;
    getZipcode:(zip:any,filter: FiltersMap)=>void;
    setZIP:(filter: FiltersMap,zip: any)=>void;
    setType:(filter: FiltersMap,zip: any)=>void;
    setName:(filter: FiltersMap,zip: any)=>void;
    setSpecilty:(filter: FiltersMap,zip: any)=>void;
    setRecluter:(filter: FiltersMap,zip: any)=>void;
    setIndustry:(filter: FiltersMap,zip: any)=>void;
    setFunctional:(filter: FiltersMap,zip: any)=>void;
    setCoach:(filter: FiltersMap,zip: any)=>void;
    setCandidate:(filter: FiltersMap,zip: any)=>void;
    setActivity:(filter: FiltersMap,zip: any)=>void;
    setNameGuardar:(name:any,Gpac:GuardaGpac)=>void;
    setstateGuardar:(name:any,Gpac:GuardaGpac)=>void;
    setInfoGuardar:(zip:any,latitud:number|undefined,longitud:number|undefined,Gpac:GuardaGpac)=>void;
    getZipcodeGuarda:(state: any,Gpac: GuardaGpac)=>void;
    setTypeSave:(filter: GuardaGpac,zip: any)=>void;
    setSpeciltySave:(filter: GuardaGpac,zip: any)=>void;
    setRecluterSave:(filter: GuardaGpac,zip: any)=>void;
    setIndustrySave:(filter: GuardaGpac,zip: any)=>void;
    setFunctionalSave:(filter: GuardaGpac,zip: any)=>void;
    setCoachSave:(filter: GuardaGpac,zip: any)=>void;
    setCandidateSave:(filter: GuardaGpac,zip: any)=>void;
    setActivitySave:(filter: GuardaGpac,zip: any)=>void;
    // setActivity:(seleccionado:number)=>void;
} 