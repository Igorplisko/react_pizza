import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizza'



// function App() {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas)
//     })

//   }, [])

//   return
// }


class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // store.dispatch(setPizzas(data.pizzas))



    })
  }


  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home itemsPizzas={[]} />} exact />
          <Route path="/cart" component={Cart} exact />

        </div>
      </div >
    );
  }

}

const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(App);



//? fetch('http://localhost:3000/db.json')
//?   .then((res) => res.json())
//?   .then(json => {
//?     setPizzas(json.pizzas)
// ?  });