import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "../components/home";
import About from "../components/about";
import Gigs from "../components/gigs";
import Shop from "../components/shop";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Members from "../components/members";


function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/gigs' component={Gigs}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/members' component={Members}/>
      </Switch>
    </main>
  );
}

export default Main;