import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {NavUtil} from "./NavUtil";
import {PageHome} from "../pages/PageHome";
import React from "react";
import './Routes.css'
import {PageRGB} from "../pages/PageRGB";
import {PageHSL} from "../pages/PageHSL";

export function Routes() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route path={NavUtil.home()} children={<PageHome/>}/>
          <Route path={NavUtil.hsl(':h', ':s', ':l')} children={<PageHSL/>}/>
          <Route path={NavUtil.rgb(':r', ':g', ':b')} children={<PageRGB/>}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}


