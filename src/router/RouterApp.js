import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from '../users/Users';
import Posts from '../posts/Posts';

const AppRouter = () => (

    
        <section>
            
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/posts/" component={Posts} />
                <Route path="/users/" component={Users} />
            </Switch>

        </section>
   

)

export default AppRouter;