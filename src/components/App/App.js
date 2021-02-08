import React from 'react';
import './App.css';
import ItemList from '../ItemList/ItemList';

const App = () => {
  const createId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
  }

  const initialState = {
    cards: [{
      disabled: false,
      gift: [null, 'мышь в подарок', ''],
      id: createId(),
      portionsNumb: '10',
      selectedText: 'Печень утки разварная с артишоками.',
      taste: 'с фуа-гра',
      weight: '0.5'
    },{
      disabled: false,
      gift: [2, 'мыши в подарок', ''],
      id: createId(),
      portionsNumb: '40',
      selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      taste: 'с рыбой',
      weight: '2'
    },{
      disabled: true,
      gift: [5, 'мышей в подарок', 'Заказчик доволен'],
      id: createId(),
      portionsNumb: '100',
      selectedText: 'Филе из цыплят с трюфелями в бульоне.',
      taste: 'с курой',
      weight: '5'
    }]
  };


  return (
    <div className="app">
    <header className="app__header">
    Ты сегодня покормил кота?А?
    </header>
    <ItemList
    cards={initialState.cards}
    />
    </div>
  );
}

export default App;