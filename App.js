import React, { Component } from 'react'
import './App.css';
import GridLayout from 'react-grid-layout';
import { Search, Grid, Header, Segment, Icon } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return (
      <Grid>
      <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        <div key="a" className="alpa" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>Alpha</div>
        <div key="b" className="betta" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>Beta</div>
        <div key="c" className="bita" data-grid={{x: 4, y: 0, w: 1, h: 2}}>Charles</div>
      </GridLayout>
      <Grid.Column className="forty">
        <Search id="searchelement"
          input={{ icon: 'search', iconPosition: 'left'}}
          placeholder= 'Search Here'
        />
      </Grid.Column>

      </Grid>
    )
  }
}

export default App;