import React from "react";
import Navigator from "../Navigator";
import DeleteIcon from '@material-ui/icons/Delete';
import style from '../../assets/css/App.styles'
import Filtros from "../Filtros";
import { Grid, Button, Fab, ClickAwayListener, Theme, createStyles, makeStyles, Fade, Modal, Backdrop, MenuItem, Icon } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import AddModal from "../AddModal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    }, modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, button: {
      margin: theme.spacing(1),
      background:'black',
      marginTop: '36px',
      width: '100%',
        borderRadius: '30px',
        padding: '5px',
        marginLeft: '3%'
    },
  }),
);
const Menu: React.FC<{}> = (getfilters) => {
  
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


   
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
      <div >
     
      <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleOpen} 

      >
        ADD
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AddModal></AddModal>
          </div>
        </Fade>
      </Modal>
      </div>
 
      </div>
        
        <Navigator></Navigator>
      </Grid>
      <Grid item xs={8}>
         <Filtros  ></Filtros> 
      </Grid>
    </Grid>
  );


}

export default Menu;