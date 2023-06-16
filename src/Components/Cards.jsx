import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './Cardsdata';

import "./style.css"
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action';

const Cards = () => {

  const [data,Setdata] = useState(Cardsdata);

  const dispatch = useDispatch(Cardsdata);

  const send=(e)=>{
    console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
        <h2 className="text-center">Add to Cart projects</h2>
        
        <div className="row ">
          <div className="col-11 mx-auto">
            <div className="row gy-4">
            {
            data.map((elem,id)=>{
              return(
                <>
                    <Card style={{ width: '23rem' }} className='mx-2 mt-4 card_style' key={id}>
                      <Card.Img variant="top" src={elem.imgdata} style={{height:"16rem"}} className='mt-2'/>
                        <Card.Body>
                          <Card.Title>{elem.rname}</Card.Title>
                          <Card.Text>
                            Price : Rs {elem.price}
                          </Card.Text>
                          <div className="button_div d-flex justify-content-center" >
                            <Button variant="primary" className='col-lg-12' onClick={()=>send(elem)}>Add to Cart</Button>
                          </div>
                        </Card.Body>
                    </Card>
                </>
              )
            })
          }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cards