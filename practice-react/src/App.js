import React from "react";
import styled from "styled-components";
import List from "./uniqueList/List";

const DIV = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 2px 16px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
function App() {
  return (
    <DIV>
     hallo 
    <List />
    </DIV>
  );
}

export default App;
