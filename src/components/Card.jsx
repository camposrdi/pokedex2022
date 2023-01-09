import React from 'react';
import ListaPokemon from './ListaPokemon';

const Card = ({results}) => {


    return (
        <div style={{ display: 'inline-block' }}>
            <div className='col'>
                <div className="card m-3" style={{width: '18rem'}}>
                    <img src={ListaPokemon} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-black">{results}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
