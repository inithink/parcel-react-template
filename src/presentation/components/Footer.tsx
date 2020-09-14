import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {NavUtil} from "../routes/NavUtil";

export function Footer() {
  return (
    <Container>
      <NavLink to={NavUtil.home()}>Home</NavLink>
      <NavLink to={NavUtil.hsl(10,90,50)}>Red</NavLink>
      <NavLink to={NavUtil.hsl(120,100,40)}>Green</NavLink>
      <NavLink to={NavUtil.rgb(33,150,243)}>Blue</NavLink>
      <NavLink to={NavUtil.rgb(240,98,146)}>Pink</NavLink>
    </Container>
  );
}

const Container = styled.footer`
  background-color: ${props => props.theme.primaryLightColor};
  color: white;
  padding-top: 10px;
  padding-left: 12px;
  height: 40px;
`;