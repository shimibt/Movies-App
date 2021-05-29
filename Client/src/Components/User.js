import { Button, makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from "react";
import axios from 'axios';


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
    fontSize: 16,
  },
  btn: {
    border : "1px solid black"
  },
}));

export default function User()
{

    useEffect(()  => {
       async function GetAllUsers(){
       let resp = await axios.get("http://localhost:8000/users")
       resp = await resp.data
       console.log(resp)
       setUsers(resp);
        }
        GetAllUsers()
    },[])

 

    const classes = useStyle();
    const [name,setName] = useState();
    const [users, setUsers] = useState();

    const edit = () => 
    {
        console.log(users)
    }


    return(
    <Card className={classes.root}>
    <CardContent>
      <Typography variant="h5" component="h2">
      </Typography>
      <Typography variant="h9" component="p">
        Name : {name} <br></br>
        User Name : <br></br>
        Session time out (Minutes) : <br></br>
        Created data : <br></br>
        Premissions  :
      </Typography>
    </CardContent>
    <CardActions>
      <Button className={classes.btn} size="small" onClick={edit}>Edit</Button>
      <Button className={classes.btn} size="small">Delete</Button>
    </CardActions>
  </Card>
    )
}