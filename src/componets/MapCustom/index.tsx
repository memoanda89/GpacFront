
import React, { useState, useEffect } from "react";
import style from '../../assets/css/App.styles'

import ReactMapGL, { Marker, Popup } from "react-map-gl";


import useMyStore from "../../zustand"
import { Divider, Grid, Avatar, TableBody, TableCell, TableRow, Button, Icon, Theme, makeStyles, createStyles } from "@material-ui/core";

import LocationCity from '@material-ui/icons/LocationCity';
import { GpacObj, zipCodeObject } from "../../zustand/types";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green, pink, yellow, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    yellow: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
    }, red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
    },
  }),
);

const [objStore] = useMyStore;
const MapCustom: React.FC<{}> = () => {
  const classes = useStyles();

  // const [viewport, setViewport] = useState({
  //   latitude: 40.5360,
  //   longitude:-94.7522 ,
  //   width:1030,
  //   height:800,
  //   zoom: 2
  // });

  const arraygpac = objStore(state => state.gpacMapObject);
  const getGpac = objStore(state => state.getGapMap);
  const zipCodeArray = objStore(state => state.zipCode);
  const getZipcode = objStore(state => state.getZipCode);
  const configMapa = objStore(state => state.viewport);
  const setViewPort = objStore(state => state.setViewPort);
  const [selectedPark, setSelectedPark] = useState<GpacObj | undefined>();

  const [ZipCodeSelected, setSelectedZipCode] = useState<zipCodeObject | undefined>();
  useEffect(() => {
    const listener = (e: { key: string; }) => {
      if (e.key === "Escape") {
        setSelectedPark(undefined);
      }
    };
    (async function () {
      await getGpac();
      await getZipcode();
    })()
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [arraygpac]);
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  return (
    <div>
      <ReactMapGL
        {...configMapa}
        mapboxApiAccessToken="pk.eyJ1IjoiZ3VpbGxlcm1vYW5kYSIsImEiOiJja2JiNHVyMjYwMHlvMnNueGY3aDRlcG00In0.5JlHUpgSA1la6mjvYycTMQ"
        mapStyle='mapbox://styles/mapbox/streets-v11'

        onViewportChange={viewport => {
          // setViewport(viewport);
          setViewPort(viewport);
        }

        }
      >

        {arraygpac.map(park => (
          <Marker
            key={uuidv4()}
            latitude={park.latitud}
            longitude={park.longitud}
          >
            <a
              
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
            {park?.IdActivity===3? <Avatar className={classes.green}>
       
      </Avatar> :   park?.IdActivity===4?  <Avatar className={classes.yellow}> </Avatar>
        
      :  <Avatar className={classes.red}></Avatar>    }
            </a>
          </Marker>
        )
        )}
        {selectedPark ? (
          <Popup
            latitude={selectedPark.latitud}
            longitude={selectedPark.longitud}
            onClose={() => {
              setSelectedPark(undefined);
            }}
          >
            <div>

              <div style={{ width: '320px' }}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <p style={{ fontWeight: 'bold' }}>{selectedPark.name}
                  <br />
                 <span style={{ fontWeight: 'lighter' }}>{selectedPark.functional}</span>
                    </p>
                  </Grid>
                  <Grid item xs={4}>
                    <p> <a href='·/'>{selectedPark.type}</a></p>
                  </Grid>
                  <Grid item xs={2} >

                    <Avatar src="/static/images/avatar/1.jpg" style={{ marginTop: '15px' }} alt="My Avatar" />

                  </Grid>
                  <Grid item xs={10}>
                    <p >Recluter {selectedPark.recruiter}
                  <br />
                     <span  >{selectedPark.state}</span>
                    </p>
                  </Grid>
                  <Grid item xs={5}>

                  </Grid>
                  <Grid item xs={7}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: 'PRIMARY',
                        width: '100%',
                        borderRadius: '30px',


                      }}
                    >
                      PROFILE
      </Button>
                  </Grid>
                </Grid>

              </div>
            </div>
          </Popup>
        ) : null}

        {zipCodeArray.records.map(zipCode => (
          <Marker
            key={zipCode.datasetid}
            latitude={zipCode.fields.latitude}
            longitude={zipCode.fields.longitude}
          >
            <a
              
              onClick={e => {
                e.preventDefault();
                setSelectedZipCode(zipCode);
              }}
            >
              <LocationCity />
            </a>
          </Marker>
        )
        )}
        {ZipCodeSelected ? (
          <Popup
            latitude={ZipCodeSelected.fields.latitude}
            longitude={ZipCodeSelected.fields.longitude}
            onClose={() => {
              setSelectedZipCode
                (undefined);
            }}
          >
            <div>

            <div style={{ width: '320px' }}>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
                    <p style={{ fontWeight: 'bold' }}>{ZipCodeSelected.fields.city}
                  <br />
                      <span style={{ fontWeight: 'lighter' }}>{ZipCodeSelected.fields.state}</span>
                    </p>
                  </Grid>
                  <Grid item xs={3}>
                    <p> <a href='·/'>ALPHA</a></p>
                  </Grid>
                  <Grid item xs={2} >

                    <Avatar src="/static/images/avatar/1.jpg" style={{ marginTop: '15px' }} alt="My Avatar" />

                  </Grid>
                  <Grid item xs={10}>
                    <p >Adyan Sosa
                  <br />
                      <span  >User Experience Designer</span>
                    </p>
                  </Grid>
                  <Grid item xs={5}>

                  </Grid>
                  <Grid item xs={7}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: 'PRIMARY',
                        width: '100%',
                        borderRadius: '30px',
                      }}
                    >
                      PROFILE
      </Button>
                  </Grid>
                </Grid>

              </div>
            </div>
          </Popup>
        ) : null}    

      </ReactMapGL>
    </div>
  );


}



export default MapCustom;