import React, {useState} from 'react';
import MainComponent from './components/MainComponent';
import Homepage from './pages/Homepage';
import AuthProvider,{ useAuth} from "./context/AuthContext";

function AppRouter() {
    let auth = useAuth();
    console.log(auth.token)
    const [login, setLogin] = useState(true)
    return ( 
    <div>
        <AuthProvider >
        {auth.token && <MainComponent />}
        {!auth.token && <Homepage />}
        </AuthProvider > 

    </div>
    );
}

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;