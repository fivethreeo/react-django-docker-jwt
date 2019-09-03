import './App.scss';
import React from 'react';import { Formik, FastField, Form } from 'formik';

import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

import { Container, Row } from "reactstrap";

const Header = loadable(() =>
  import(/* webpackChunkName: "header" */ './Header')
);
const Body = loadable(() => import(/* webpackChunkName: "body" */ './Body'));
const Login = loadable(() => import(/* webpackChunkName: "auth" */ '../auth/LoginComponent'));
const Register = loadable(() => import(/* webpackChunkName: "auth" */ '../auth/RegisterComponent'));
const Activate = loadable(() => import(/* webpackChunkName: "auth" */ '../auth/ActivateComponent'));

const Footer = loadable(() =>
  import(/* webpackChunkName: "footer" */ './Footer')
);

const App = () => {
 return (
   <>
   <Header />
   <Container>
      <Row>
          <Switch>
            <Route
              exact
              path="/"
              component={Body} 
            />
            <Route path="/activate" component={Activate} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
      </Row>
      <Row>
          <Footer />
      </Row>
    </Container>
    </>
  );
};
export default App;
