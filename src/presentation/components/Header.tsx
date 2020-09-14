import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {NavUtil} from "../routes/NavUtil";

export function Header() {
  return (
    <Container>
      <Link to={NavUtil.home()}>
        <Icon width="24" height="24">
          <rect x="0" y="0" width="24" height="24" fill="#FFFFFF"/>
        </Icon>
      </Link>
      <Link to={NavUtil.home()}>Home</Link>
      <Link to={NavUtil.hsl(10,90,50)}>Red</Link>
      <Link to={NavUtil.hsl(120,100,40)}>Green</Link>
      <Link to={NavUtil.rgb(33,150,243)}>Blue</Link>
      <Link to={NavUtil.rgb(240,98,146)}>Pink</Link>
    </Container>
  );
}

const Icon = styled.svg`
  margin-right: 4px;
  vertical-align: middle;
  line-height: 40px;
`

const Link = styled(NavLink)`
  vertical-align: middle;
  line-height: 40px;
`
const Container = styled.header`
  display: table-cell;
  color: white;
  background-color: ${props => props.theme.primaryColor};
  padding-left: 12px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  a:not(:last-child){
    margin-right: 8px;
  }
`;