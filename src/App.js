// import logo from './logo.svg';
import './App.css';
import Header from './cmps/Header'
import Footer from './cmps/Footer'
import CandyPage from './views/CandyPage'
import Home from './views/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { HashRouter as Router, Redirect, Route, Switch, NavLink } from 'react-router-dom';





function App() {
  const [candys, setCandys] = useState([])


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
    return props.loggedInUser ? <Route  {...props} component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }

  return (
    <div className="App main-layout">
      <Router>
      <Header />
        <Switch>
        <Route exact component={Home} path='/' />

          <PrivateRoute loggedInUser={true} path="/CandyPage"
            render={() => (
              <CandyPage candys={candys} />)}
            exact={true} />

        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
