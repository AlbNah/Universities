import React, { Component } from 'react';
import './App.css';
import Wrapper from './UI/Wrapper/Wrapper';
import List from './Components/List/List';
import Listitem from './Components/Listitem/Listitem';
import Button from './Components/Button/Button';
import Input from './Components/Input/Input';
import Br from './Components/Br/Br';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universities: [],
      nextId: 1
    }
    this.searchRef = React.createRef('');
  }

  searchUniversity = () => {
    fetch(`http://universities.hipolabs.com/search?country=${this.searchRef.current.value}`)
    .then(data => data.json())
    .then(res => {
      this.setState({
        universities: res
      })
      console.log(res)
    })
  }

  // alpha_two_code: "AM"
  // country: "Armenia"
  // domains: ['armmed.am']
  // name: "Mehrabyan Medical Institute and Medical College"
  // state-province: null
  // web_pages: ['http://www.armmed.am/']

  render() {
    return(
        <Wrapper>
          <Input className="input" type="text" myRef={this.searchRef} />
          <Button className="button" onClick={this.searchUniversity}>Search</Button>
        <List className="list">
          {this.state.universities.map(el => {
            return(
              <Listitem key={Math.random()} className="listitem">
                {el.alpha_two_code} <Br />
                {el.country}  <Br />
                {el.domains[0]} <Br />
                {el.name} <Br />
                {el.web_pages[0]}
              </Listitem>
            )
          })}
        </List>
        </Wrapper>
    )
  }
}

export default App;
