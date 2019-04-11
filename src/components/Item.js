import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';


const Item = (props) => {
  
  const { id, name, description, features=[], price } = props.item;
  return (
    <div  style={divStyle} item={props.item}>
  
      <Card>
        <CardHeader>{props.item.name}</CardHeader>
        <CardBody>
          <CardText>{props.item.description}</CardText>
          <ul>
            { props.item.features.map((feature, i) => (
           <li key={i}>{features[i]}</li>

            
          ))}
          </ul>
          <CardText>{props.item.price}</CardText>
          <Button color="primary" >Select</Button>
        </CardBody>
      </Card>
    </div>)
};

Item.propTypes = {
  product: PropTypes.object.isRequired,
  }

var divStyle ={
  width: '25%', padding: '2px',
  display: 'inline-block'
}   


export default Item;
