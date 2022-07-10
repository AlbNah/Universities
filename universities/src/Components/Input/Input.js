import React, { Component } from 'react'
import Wrapper from '../../UI/Wrapper/Wrapper'

class Input extends Component {
  render() {
    return (
        <Wrapper>
        <input
            ref={this.props.myRef}
            className={this.props.className}
            type={this.props.type}
        />
        <br />
        </Wrapper>
      
    )
  }
}

export default Input