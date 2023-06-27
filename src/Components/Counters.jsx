import React, { Component } from "react";
import Counter from "./Counter";
import { styled } from "styled-components";

export default class Counters extends Component {
  // define the counters state
  // the key is the counter id and it's body is {value , amount od icre. or dec.}
  state = {
    1: {
      value: 0,
      amount: 2,
    },
    2: {
      value: 0,
      amount: 4,
    },
    3: {
      value: 0,
      amount: 6,
    },
    4: {
      value: 0,
      amount: 8,
    },
  };
  // two callbacks functions to pass it as a props when click btns
  onIncrement = (counter) => {
    this.setState({
      [counter]: {
        amount: this.state[counter].amount,
        value: this.state[counter].value + +this.state[counter].amount,
      },
    });
  };
  onDecrement = (counter) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [counter]: {
          amount: this.state[counter].amount,
          value: this.state[counter].value - +this.state[counter].amount,
        },
      };
    });
  };
  // styled components 
  styledSection= styled.section`
    margin : 200px  auto;
    width: 17%;

  `

  styledTotalSpan = styled.p`
    font-size :25px;
    display: flex;
    gap: 10px;
  
    & span {
      font-size :20px;
      background-color :#f9350a;
      color : #fff;
      padding: 2px 4px;
      border-radius: 7px;

    }

  `

  render() {
    return (
      <this.styledSection>
        {Object.entries(this.state).map((counter) => {
          return (
            <Counter
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
              id={counter[0]}
              value={counter[1].value}
            />
          );
        })}
        <this.styledTotalSpan className="total">
          total
          <span>
            {Object.values(this.state)
              .map((obj) => obj.value)
              .reduce((a, b) => a + b)}
          </span>
        </this.styledTotalSpan>
      </this.styledSection>
    );
  }
}
