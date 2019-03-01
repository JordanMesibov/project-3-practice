import React, { Component } from 'react';
import featuredCard from './components/featuredCard';
import Wrapper from './components/Wrapper';
import featured from './featured.json';
import './App.css';


class App extends Component {
  // make state retain info about featured items
  state = {
    featuredList: featured
  };
  
  render() {

    const { featuredList } = this.state;
    console.log(featured);

    return (
      <Wrapper>
        <h1 className="title">Featured</h1>
        {featuredList.map(featured => {
          return (
            <featuredCard
            key={featured.id}
            featuredId={featured.id}
            name={featured.name}
            image={featured.image}
            type={featured.type}
            price={featured.price}
            />
          );
        })}
      </Wrapper>
    );

  }
}

export default App;
