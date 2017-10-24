import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home1 from './components/home1'
import Home2 from './components/home2'

const router =
<Switch>
              <Route exact path="/" component={Home1}/>
              <Route path="/home1" component={Home1}/>
              <Route path="/home2" component={Home2}/>
</Switch>
export default router;
