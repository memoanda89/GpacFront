import React from "react";
import style from '../../assets/css/App.styles' 
import { FormControl, InputLabel, Select ,Tab, Tabs, AppBar, makeStyles, Box, Typography, Theme, useTheme} from "@material-ui/core";
import CustomSelect from "../CustomSelect";
import SwipeableViews from 'react-swipeable-views';
import InventoryFilters from "../InventoryFilters";
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import PinDropIcon from '@material-ui/icons/PinDrop';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  
  },
}));

const Filtros :  React.FC<{}> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
    
    return (
      <div className={classes.root}>
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          
          
        >
          <Tab label="Dig" icon={<PinDropIcon />} disabled  {...a11yProps(0)}/>
          <Tab label="Inventory" icon={<BusinessIcon />} {...a11yProps(1)} />
          
        </Tabs>
     
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
           <InventoryFilters  />

        </TabPanel>
       
      </SwipeableViews>
    </div>
    );


}

export default Filtros;