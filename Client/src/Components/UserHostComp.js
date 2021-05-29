import {UserContextProvider} from './context';
import Login from './Login';

function UserHostComp() {
    return (
        <UserContextProvider>
            <Login />
        </UserContextProvider>
    )
}