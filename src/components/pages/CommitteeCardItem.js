import React from 'react';
import { Link } from 'react-router-dom';

/* Function template for the committee cards */
function CommitteeCardItem(props) {
    return (
        <>
            <li className='committee__cards__item'>
                <Link className='committee__cards__item__link' to={props.path}>
                    <figure className='committee__cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='committee__cards__item__img'
                            alt='Committee'
                            src={props.src}
                        />
                    </figure>
                    <div className='committee__cards__item__info'>
                        <h5 className='committee__cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CommitteeCardItem;
