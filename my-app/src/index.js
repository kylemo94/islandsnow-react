import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Menu, Dropdown, Icon, Grid, Divider, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Container Align = "center">
        <img  src ='//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749' alt = "Island Snow Logo"/>
        </Container>

    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item >Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown  item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >KIDS</Menu.Item>

            <Dropdown  item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item >SEARCH</Menu.Item>

          </Container>

        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <img src = '//cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?9243197903709543590' alt = "IslandSnow Image"/>

    )
  }
}

class FooterMenu extends React.Component {
  render(){
    return (
       <Segment className = "GridContainer">
         <Grid columns={3} relaxed='very'>
           <Grid.Column textAlign='center'>
              NAVIGATION
             <Divider horizontal>
             </Divider>
             About Us
             <Divider horizontal>
             </Divider>
             Videos
             <Divider horizontal>
             </Divider>
             Store Locations
           </Grid.Column>

           <Grid.Column textAlign='center'>
             MAIN MENU
             <Divider horizontal>
             </Divider>
             Men
             <Divider horizontal>
             </Divider>
             Women
             <Divider horizontal>
             </Divider>
             Kids
           </Grid.Column>

           <Grid.Column textAlign='center'>
             CONNECT
             <Divider horizontal>
             </Divider>
             Sign up for the latest updates
             <Divider horizontal>
             </Divider>
             <Input
               action={{ color: 'black', content:'Join'}}
               placeorder='Enter email address'
               />

           </Grid.Column>

         </Grid>

       </Segment>







    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));