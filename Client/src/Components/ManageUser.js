import React, { useEffect, useState } from 'react';
import { Button, Dialog, makeStyles } from "@material-ui/core";
import User from './User';
import Popup from './Dialog/Popup';


const useStyle = makeStyles((theme) =>
({
Button : {
    border : "solid 8px white",
    backgroundColor : "lightBlue",
    padding : "10px",
    textAlign: "center",
    marginLeft : "15px"  
},
root: {
    width : 250,
    height : 180,
    border : "3px solid black",
    marginTop : " 30px",
    marginLeft : "30px",
    textAlign: "left",
    fontSize: 14,
  },
  btn: {
    border : "1px solid black"
  },
}));



export default function ManageUser()
{
    const classes = useStyle();
    const [AllUsersClicked, setAllUser] =  useState(false);
    const [openPopup,setOpenPopup ] = useState(false);
   
    useEffect(() => {

    })

    const GetAllUser =async () =>
    {
        setAllUser(true)
    }
    

    const addUser = () =>
    {
        setAllUser(false)   
        setOpenPopup(true)
        console.log(openPopup)
    }

    return(
        <div>
            <h2>Users</h2>
            <Button className={classes.Button} onClick={GetAllUser}>All Users</Button>
            <Button className={classes.Button} onClick = {addUser}>Add User</Button>
            <div>
                {AllUsersClicked
                ? <User></User>   
                : null
                }
                     <Popup 
                      openPopup={openPopup}
                      setOpenPopup = {setOpenPopup}
                     >  
                     </Popup>
           </div> 
        </div>
    )

  
}