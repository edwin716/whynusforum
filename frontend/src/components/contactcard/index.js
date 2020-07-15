import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import logo from './biz.png';
import logo1 from './computing.png';
import logo2 from './de.png';
import logo3 from './engineering.jpg';
import logo4 from './fass.png';
import logo5 from './law.png';
import logo6 from './med.png';
import logo7 from './science.png';
import logo8 from './usp.jpg';
import './styles.css';

// const ContactCard = () => (

class ContactCard extends Component {
  render() {
    

    return (
      <Card.Group>
        <Card href="http://www.nusbizadclub.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Bizad Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://nuscomputing.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo1} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Computing Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://sdemedia.wixsite.com/declub" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo2} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Design & Environment Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="http://enginclub.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo3} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Engineering Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://www.fassclub.org/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo4} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>FASS Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://www.nuslawclub.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo5} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Law Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="http://www.nusmedsoc.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo6} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Medical Society</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://www.facebook.com/nus.science.club/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo7} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>Science Club</Card.Header>
          </Card.Content>
      </Card>
      <Card href="https://nususc.com/" style={{width:"25%", height:"25%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo8} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header>University Scholars Club</Card.Header>
          </Card.Content>
      </Card>
      </Card.Group>
      );
    }
  }

export default ContactCard;

