import { BrowserRouter, Route} from 'react-router-dom'
import {UserContext} from './Components/context';
import LogInContext from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Main from './Components/Main';
import Subscription from './Components/Subscription';
import ManageUser from './Components/ManageUser';
import Movies from './Components/Movies';
import './App.css';
import { useState } from 'react';


function App() {
const [per, setPer] = useState({})

  return (
   <UserContext.Provider value={{per, setPer }}>
    <BrowserRouter>
       <div className="App">
         <Route exact path="/">
           <LogInContext/>  
         </Route>
         <Route path="/CreateAccount">
           <CreateAccount/>
         </Route>
         <Route path="/Main">
           <Main/>
         </Route>
         <Route path="/Subscription">
           <Subscription/>
         </Route>
         <Route path="/ManageUser">
           <ManageUser/>
         </Route>
         <Route path="/Movies">
           <Movies/>
         </Route>
       </div>
    </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
