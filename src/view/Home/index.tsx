import React from "react";
import ToolbarMenu from "../../componets/ToolbarMenu";
import { Grid, Paper, createStyles, makeStyles, Theme } from "@material-ui/core";
import Menu from "../../componets/Menu";
import Map from "../../componets/MapCustom";
import MapCustom from "../../componets/MapCustom";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}),
);

    const Home :  React.FC<{}> = () => {
        const classes = useStyles();
        const getfilters = (filters:any) => {
          
        };
      
      
    return (
        <div id="HomePage" style={{ background:"#bbb6b626"}}>
        <ToolbarMenu/>
        <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
           <Menu ></Menu>
        </Grid>
        <Grid item xs={7}>
        
            <MapCustom /> 
         
        </Grid>
         
      </Grid>
    </div>
        </div>
    );


}

export default Home;