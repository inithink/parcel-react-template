import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export function Header(){
  return (
    <Container>
      <svg width="20" height="20">
        <rect x="0" y="0" width="20" height="20" fill="#FFFFFF"/>
      </svg>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/hsl/10/90/50">Red</NavLink>
      <NavLink to="/hsl/120/100/40">Green</NavLink>
      <NavLink to="/rgb/33/150/243">Blue</NavLink>
      <NavLink to="/rgb/240/98/146">Pink</NavLink>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #2d5986;
  padding-top: 10px;
  padding-left: 12px;
  height: 40px;
  z-index: 10000;
`;