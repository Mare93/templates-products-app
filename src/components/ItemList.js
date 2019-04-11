import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ItemList extends Component {
  render() {
    
    return this.props.items.map((item) => (
      <Item key={item.id} item={item}  />

    ));
    
  }
}

// PropTypes
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ItemList;