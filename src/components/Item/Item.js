import React, {useState} from 'react';
import classnames from 'classnames';
import './Item.css';

const Item =({ disabled, gift, id, portionsNumb, selectedText, taste, weight } ) => {
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);

    const onCardClick = () => {
      if (!disabled) {
        setSelected(!selected);
      }
      if (selected) {
        setHovered(false);
      }
    }

    const onMouseEnter = () => {
      if (selected) {
        setHovered(true);
      }
    }

    return (
      <div className='item'>
        <div className={
          classnames({
          item__border: true,
          item__border_blue: !disabled,
          item__border_pink: selected,
          item__border_grey: disabled,
          item__content_hovered: hovered
          })
        }
        onMouseEnter={() => onMouseEnter()}
      >
        <div className={classnames({
          item__content: true,
          item__content_blue: !disabled,
          item__content_pink: selected,
          item__content_grey: disabled
        })} onClick={() => onCardClick()}>
          <div className='item__imgCat'>
          <div className={classnames({
            item__description: true,
            item__description_grey: disabled})}>
          <div className='item__title'>Сказочное заморское явство</div>
          <div className='item__name'>Нямушка</div>
          <div className='item__taste'>{taste}</div>
          <div className='item__portions'>{portionsNumb} порций<br />
          <b>{gift[0]} </b>{gift[1]}<br />
          {gift[2]}
          </div>
        </div>
        <div className={classnames({
          item__weightCircle: true,
          item__weightCircle_blue: !disabled,
          item__weightCircle_pink: selected,
          item__weightCircle_grey: disabled
        })} >
          <div className='item__weight'>{weight}</div>
          <div className='item__kg'>кг</div>
        </div>
      </div>
      </div>
      </div>
      {!disabled ?
        (!selected
          ? <div className='item__label'> Чего сидишь? Порадуй котэ, <a href='#' onClick={() => onCardClick()}>купи</a></div>
          : <div className='item__label'>{selectedText}</div>)
        : <div className='item__label item__label_yellow'>Печалька, {taste} закончился.</div>
      }
    </div>
  );
}

export default Item;