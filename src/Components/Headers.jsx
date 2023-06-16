import React,{ useEffect, useState }from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';
import { dark } from '@mui/material/styles/createPalette';

import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';


const Headers = () => {

  const [price,Setprice] = useState(0);
  console.log(price);
  const getdata = useSelector((state)=>state.cartreducer.carts);
  //console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);// this is from Material ui ok
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dlt =(id)=>{
    dispatch(DLT(id))
  };

  const total =()=>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = ele.price * ele.qnty + price
    });
    Setprice(price);
  };

  useEffect(()=>{
    total()
  },[total]);

  return (
   <>
    <Navbar bg="dark" variant="dark" className='my-3'>
        <Container>

          <NavLink className='text-white mx-5 text-decoration-none' style={{fontSize:"30px"}} to="/">Sadan_Restro</NavLink>
          <Nav className="me-auto">
          <NavLink className='text-white text-decoration-none' style={{fontSize:"30px"}} to="/">Home</NavLink>
          </Nav>
          
          <Badge badgeContent={getdata.length} color="primary" className='mx-3' 
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
           >
            <i class="fa-solid fa-cart-shopping "></i>
          </Badge>
       
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                {
                  getdata.length ?
                  <div className="card_details" style={{width: "24rem",padding: 10}}>
                      <table className='table'>
                        <thead >
                          <tr>
                            <th >Photo :</th>
                            <th >Resturant Name:</th>
                          </tr>
                        </thead>
                       
                        <tbody >
                            {
                              getdata.map((e,id)=>{
                                return(
                                  <>
                                    <tr >
                                      <td >
                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                          <img src={e.imgdata} style={{width : "5rem",height:"5rem"}} alt="" />
                                        </NavLink>
                                      </td>
                                      <td >
                                        <p>{e.rname}</p>
                                        <p>Price : Rs {e.price}</p>
                                        <p> Quantity : {e.qnty}</p>
                                        <p><i class="fa-solid fa-trash-arrow-up smalltrash" style={{color: "red",fontSize: 20,cursor:"pointer"}} onClick={()=>dlt(e.id)}></i></p>
                                      </td>
                                      <td className='mt-3' >
                                        <i class="fa-solid fa-trash-arrow-up largetrash" style={{color: "red",fontSize: 20,cursor:"pointer"}} onClick={()=>dlt(e.id)} ></i>
                                      </td>
                                    </tr>
                                  </>
                                )
                              })
                            }
                        <p className='text-center'>Total : Rs {price}</p>{/*here price is from usestate ok not from e.price  */}
                        </tbody>
                      </table> 
                  </div>  :

                  <div className="card_details d-flex justify-content-center align-items-center" style={{padding:5,position:"relative"}}>
                  <i class="fa-solid fa-xmark text-dark" style={{ position:"absolute",top:2,right:20,fontSize:23,color:dark,cursor:"pointer"}} onClick={handleClose}></i>
                  <p style={{fontSize:22}}>Your carts is empty</p>
                  <img src="cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10 }} />
                  </div>

                }

                
          </Menu>
      </Container>
    </Navbar>
   </>
  )
}

export default Headers;