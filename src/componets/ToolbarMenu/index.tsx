import React, { useEffect } from "react";

import { IconButton, Toolbar, Typography, Button, Avatar, InputBase, fade, createStyles, Theme, makeStyles, useTheme, Grid, Select } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import logo from './../../assets/images/logoGpac.png' 
import LogoGpac from "../LogoGpac";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MyButton from '../Boton'
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/More';
import style from '../../assets/css/App.styles' 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useMyStore from "../../zustand"
const [objStore] = useMyStore;
const useStyles = makeStyles((theme: Theme) =>
createStyles({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  textSearch : {
    borderTopLeftRadius:10 ,
    borderBottomLeftRadius:10 ,
    border:"1px solid black"
  },
  comboSearch : {
    width: 140,
    background: "#3f51b5",
    color: "white",
    height: "37px !important",
    marginTop:1,
    borderTopRightRadius:15,
    borderBottomRightRadius:15
 
}

}),
);
    const ToolbarMenu :  React.FC<{}> = () => {

      useEffect(() => {

        (async function () {
           
          await getType();
         
        })()
      },
        []
      );
     
     const handleKeyPress = (event: { key: string; }) => {
        if(event.key === 'Enter'){
          // getMapFilters({
            
          // })
        }
      }
      const arrayType = objStore(state => state.type);
      const getType = objStore(state => state.getType);
      const classes = useStyles();
      const getMapFilters=objStore(state=> state.getMapFilters);
      const theme = useTheme();
      const filters=objStore(state => state.filter);
 
    return (
       
          
          <Toolbar style={{backgroundColor:"white",color:"black"}}>
             <Grid container spacing={3}>
             <Grid item xs={2}>
              <img src={logo} style={{height:"40px"}} alt="logo" />
           </Grid>
           <Grid item xs={8}>
               
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase className={classes.textSearch}
              placeholder="Search…"
              onKeyPress={handleKeyPress} 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
 <Select className={classes.comboSearch}
          native
          
        
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
    
          <option value={0}></option>
          {arrayType?.contenido.map((item: { Id: string | number | string[] | undefined; description: React.ReactNode; })=>
            <option value={item.Id}>{item.description}</option>)}
        </Select>
        
          </div>
           </Grid>
           <Grid item >
           <NotificationsNoneIcon style={{marginTop:'8px'}} />
           </Grid>
           <Grid item  style={{marginTop:'10px'}}>
           <label  >Jonathan</label>
           </Grid>
           
            <Grid item>
            
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
               
           </Grid>
           <Grid item>
            
           <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreVertIcon />
          </IconButton>
           
       </Grid>
          
          </Grid>

        
        </Toolbar>
        
    );


}

export default ToolbarMenu;