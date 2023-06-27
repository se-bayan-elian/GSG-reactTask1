import React, { Component } from 'react'
import styled from 'styled-components';


export default class Counter extends Component {
  styledBtn = styled.button`
  --background-color : ${(props) => (props.varient === 'incremental') ? 'darksalmon' : '#015c5c'};
  width: 45px;
  height: 50px;
  background-color : #fff;
  color: var(--background-color);
  border : 1px solid var(--background-color);
  transition: 0.5s all linear;
  cursor: pointer;
  border-radius: 7px;
  font-size: 20px;
  &:hover {
    background-color : var(--background-color);
    color : #fff;
    box-shadow:  0 0 8px 1px rgba(0, 0, 0,0.25);
  }
  &[disabled]{
    background-color : #efefef;
    pointer-events: none;
  }
` ;
 styledValueSpan = styled.span`
  font-size: 27px;
  color: #000e0e;
`
 styledCounterContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom : 20px;
 `;
  render() {
    return (
      // component contain 2 btns and span to display the value 
      <this.styledCounterContainer>
        <this.styledBtn varient="incremental" onClick={()=> this.props.onIncrement(this.props.id)}>+</this.styledBtn>
        <this.styledValueSpan>{(this.props.value > 9 ? '': '0')+this.props.value}</this.styledValueSpan>
        <this.styledBtn varient="decremental" disabled={this.props.value <= 0} onClick={()=> this.props.onDecrement(this.props.id)}>-</this.styledBtn>
      </this.styledCounterContainer>
    )
  }
}
