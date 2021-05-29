import React from 'react';
import { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default function Popup(props) {
  const {openPopup,setOpenPopup} = props;


  useEffect(()  => {

    },[])

    const handleClose = () => {
      setOpenPopup(false);
    };

    const addNewUser = async () => {
        let obj = { }
        console.log(obj)
        const request = await axios.post("http://localhost:8000/createAccount",obj)
        console.log(request)
        .then((response) => console.log(response)) 
        alert("New user created successfully")
        setOpenPopup(false);
    }


  return (
    <div>
   <Dialog open={openPopup}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="email"
            halfWidth
          /><br></br>
              <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="email"
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  color="primary" onClick={addNewUser}>
            Add User
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
