// import logo from './logo.svg';
import './App.css';
import Header from './cmps/Header'
import Footer from './cmps/Footer'
import CandyPage from './views/CandyPage'
import Home from './views/Home'
import Contact from './views/Contact'
import Signup from './views/Signup'
import Cart from './views/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


function App() {
  const [candys, setCandys] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userCart, setUserCart] = useState([])


  useEffect(() => {
    const getCandys = async () => {
      const candysFromServer = await fetchCandys();
      setCandys(candysFromServer);
    }
    getCandys();
  }, [])

  const fetchCandys = async () => {
    const res = await fetch('http://localhost:3030/api/candy')
    const data = await res.json()
    return data
  }

  const PrivateRoute = (props) => {
    console.log('props', props)
    return props.loggedInUser ? <Route  {...props} component={props.component} path={props.path} /> : <Redirect to={{
      pathname: "/Signup", state: { loggedInUser: props.loggedInUser }, handleLogin: setLoggedInUser
    }} />
  }


  return (
    <div className="App main-layout">
      <Router>
        <Header loggedInUser={loggedInUser} handleLogin={setLoggedInUser} />
        <Switch>
          {<PrivateRoute loggedInUser={loggedInUser} component={Contact} path='/Contact#/' />}
          {<PrivateRoute loggedInUser={loggedInUser} exact component={Home} path='/' />}
          {<PrivateRoute loggedInUser={loggedInUser} exact component={Contact} path='/Contact' />}
          {<Route path='/Cart' render={(props) => <Cart userCart={userCart} loggedInUser={loggedInUser}  {...props} />} />}
          {<Route exact component={Signup} path='/Signup' />}
          {/* {<Route  path="/Signup" render={(props) => }} */}
          {/* <Route path="Signup" render={(props) => <Signup {...props}/>}/> */}


          <PrivateRoute loggedInUser={loggedInUser} path="/CandyPage"
            render={(props) => (
              <CandyPage setUserCart={setUserCart} userCart={userCart} candys={candys} {...props} />)}
            exact={true} />

        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
