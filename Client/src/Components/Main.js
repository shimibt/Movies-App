import { Button, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { useContext, useState } from 'react';
import {  useHistory } from 'react-router-dom';
import { UserContext } from './context';
import { useEffect } from 'react';



const useStyle = makeStyles((theme) =>
({
 header: {

 },
 
 item : {
     border : "solid 8px white"
 },
 itemtext : {
     border : "solid 8px white",
     backgroundColor : "lightBlue",
     padding : "10px",
     textAlign: "center",
     marginLeft : "15px"
 }
}));



export default function Main()
{
const classes = useStyle();
const history = useHistory();
const {per} = useContext(UserContext);
const [isAdmin, setisAdmin] = useState(false)

useEffect(()  => {
setisAdmin(per.isAdmin)
},[])


const Movies  = () =>
{
  history.push("/Movies")
   
}

const Subscription  = () =>
{
    history.push("/Subscription")
}

const ManageUser  = () =>
{
    history.push("/ManageUser")
}

const Login  = () =>
{
    history.push("/")
}

return(
       
        <List component="nav" className={classes.header}>
          <ListItem component="div" className={classes.item}>
           <Button onClick={Movies} > <ListItemText inset className={classes.itemtext}>
              <TypoGraphy color="inherit" variant="title">
                 Movies
              </TypoGraphy>
            </ListItemText>
            </Button>
           <Button onClick={Subscription}>
              <ListItemText inset  className={classes.itemtext}>
                <TypoGraphy color="inherit" variant="title">
                   Subscription
                 </TypoGraphy>
                </ListItemText>
            </Button>  
             {isAdmin? 
            <Button onClick={ManageUser}>
               <ListItemText inset  className={classes.itemtext}>
                 <TypoGraphy color="inherit" variant="title">
                    User Management
                 </TypoGraphy>
               </ListItemText>
            </Button>
           :null} 
            <Button onClick={Login}>
               <ListItemText inset  className={classes.itemtext}>
                   <TypoGraphy color="inherit" variant="title">
                     Log Out
                   </TypoGraphy>
               </ListItemText>
            </Button>  
           </ListItem >
        </List>
   
    
)
}