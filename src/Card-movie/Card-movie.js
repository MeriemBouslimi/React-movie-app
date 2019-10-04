import React from 'react';
import Rating from './Stars';



function Cards (props){
    
return(
  <div>
        <div className='films'>,
            {props.carte.map((el,i)=>
            <div>
            <div className='carte'>
              <Rating count={el.rating}/>
            <img className="affiche" src={el.figure} alt=''></img>
            <div className="bar-title">
            <h2 className='title'>{el.title}</h2>
            <button type="button" class="btn btn-primary">watch Now</button>
            </div>
            </div>
            </div>
            )}
        </div>
        </div>
        
    )};
    
export default Cards;