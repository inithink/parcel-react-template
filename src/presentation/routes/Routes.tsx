import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {UrlFactory} from "./UrlFactory";
import {PageHome} from "../pages/PageHome";
import React from "react";
import './Routes.css'
import styled from 'styled-components'
import {Header} from "../components/Header";
import {PageRGB} from "../pages/PageRGB";
import {PageHSL} from "../pages/PageHSL";

const Container = styled.div`
  //position: absolute;
  //top: 0;
  //left: 0;
  //right: 0;
  //bottom: 0;
`;
const PageContainer = styled.div`
  position: relative;
  margin-top: 40px;
`;

export function Routes() {
  let location = useLocation();

  return (
    <Container>
      <Header/>
      <PageContainer>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
            style={{
              position: 'absolute',
              top: 0,
            }}
          >
            <Switch location={location}>
              <Route path={UrlFactory.home()} children={<PageHome/>}/>
              <Route path={UrlFactory.hsl(':h', ':s',':l')} children={<PageHSL/>}/>
              <Route path={UrlFactory.rgb(':r', ':g',':b')} children={<PageRGB/>}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </PageContainer>
    </Container>
  );
}


