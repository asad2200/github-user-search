// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Toast
import {ToastContainer, toast} from 'react-toastify';

// firebase
import firebase from "firebase";
import 'firebase/auth';

// Router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";

// Other
import {useState} from "react";
import {UserContext} from "./Context/UserContext";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import firebaseConfig from "./Config/firebaseConfig";

//initialize app
firebase.initializeApp(firebaseConfig);

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <ToastContainer position="top-center"  />
            <UserContext.Provider value={{user, setUser}}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="*" component={PageNotFound}/>
                </Switch>
                <Footer />
            </UserContext.Provider>
        </Router>
    );
}

export default App;
