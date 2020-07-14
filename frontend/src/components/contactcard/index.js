import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import logo from './fass.png';
import logo1 from './computing.png';
import logo2 from './biz.png';
import logo3 from './med.png';
import logo4 from './law.png';
import logo5 from './engineering.jpg';
import logo6 from './usp.jpg';
import logo7 from './de.png';
import logo8 from './science.png';
// import {Link} from 'react-router-dom';
import './styles.css';

class ContactCard extends Component {
  render() {
    

    return (
        <Card.Group>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://www.fassclub.org/">FASS Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo1} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://nuscomputing.com/">Computing Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo2} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="http://www.nusbizadclub.com/">Bizad Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo3} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="http://www.nusmedsoc.com/">Medical Society</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo4} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://www.nuslawclub.com/">Law Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo5} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="http://enginclub.com/">Engineering Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo6} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://nususc.com/">University Scholars Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo7} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://sdemedia.wixsite.com/declub">Design & Environment Club</a></Card.Header>
          </Card.Content>
        </Card>
        <Card style={{width:"15%", height:"15%", textAlign: "center"}}>
          <Card.Content>
          <Card.Meta>
            <img src={logo8} alt="Logo" />
          </Card.Meta>
          <br></br>
          <Card.Header><a href="https://www.facebook.com/nus.science.club/">Science Club</a></Card.Header>
          </Card.Content>
        </Card>
        </Card.Group>
      
    );
  }
}

export default ContactCard;