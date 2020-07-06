import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import logo from './fass.png';
import {Link} from 'react-router-dom';
import './styles.css';

class ContactCard extends Component {
  render() {
    

    return (
        
        <Card.Group>
        <Card>
          <Card.Content>
          <Card.Meta>
            <img src={logo} alt="Logo" />
            </Card.Meta>
            <Card.Header><a href="https://www.fassclub.org/">FASS Club</a></Card.Header>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
          <Card.Meta>
            <img src={logo} alt="Logo" />
            </Card.Meta>
            <Card.Header><a href="https://www.fassclub.org/">FASS Club</a></Card.Header>
          </Card.Content>
        </Card>
        </Card.Group>
      
    );
  }
}

export default ContactCard;