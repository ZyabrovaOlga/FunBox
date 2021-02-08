import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

class ItemList extends React.Component {
  render() {
    const { cards } = this.props;

    return (
      <div>
      {cards.map((card, index) =>
        <Item
        key={card.id}
        disabled={card.disabled}
        gift={card.gift}
        portionsNumb={card.portionsNumb}
        selectedText={card.selectedText}
        taste={card.taste}
        weight={card.weight}
        />)}
      </div>
    );
  }
}

export default ItemList;