import React, {useState} from 'react';
import MainComponent from './components/MainComponent';
import Homepage from './pages/Homepage';

function App() {
    const [login, setLogin] = useState(true)
    return ( 
    <div>
        {login && <MainComponent />}
        {!login && <Homepage />}
    </div>
    );
}

export default App;