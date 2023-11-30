import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { DLT,ADD,REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

  const [data,setData] = useState([]);

  const {id} = useParams();
  //console.log(id);

  const getdata = useSelector((state)=>state.cartreducer.carts);
  //console.log(getdata);

  const dispatch =useDispatch();//dispatch work is to call to action.js of action folder
  const history =useNavigate();
  const compare =()=>{
    const comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

// to increase the quantity of item
  const send=(e)=>{
    //console.log(e);
    dispatch(ADD(e));
  }

  const dlt =(id)=>{
    dispatch(DLT(id));
    history("/");

  };

//Remove one item
const remove = (item)=>{
  dispatch(REMOVE(item));
};

  useEffect(()=>{
    compare();
  },[id]);

  return (
    <>
       <div className="container mt-2">
          <h2 className='text-center'>Items Details Page</h2>
          
            <div className=" container mt-5 iteamsdetails">
                {
                  data.map((ele,idk)=>{
                    return (<>
                <div className="items_img">
                  <img src={ele.imgdata} alt="" />
                </div>

                <div className="details" key={idk}>
                  <table>
                    <tr>
                      <td>
                        <p><strong>Resturant</strong> : {ele.rname}</p>
                        <p><strong>Price</strong> :{ele.price}</p>
                        <p><strong>Dishes</strong> : {ele.address}</p>
                        <p><strong>Total</strong> : {ele.price * ele.qnty}</p>
                        <div className="my-3 mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#add",color:"#111"}}>
                          <span style={{fontSize:24}} onClick={ele.qnty <= 1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                          <span style={{fontSize:22}}>{ele.qnty}</span>
                          <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                        </div>
                      </td>
                      <td>
                      <p><strong>Rating</strong> <span style={{background:"green",padding:"2px 5px",borderRadius:'5px'}}>{ele.rating} ⋆</span></p>
                      <p><strong>Order Review :</strong> <span>{ele.somedata}</span></p>
                        <p><strong>Remove :</strong> <span><i class="fa-solid fa-trash-arrow-up" style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>dlt(ele.id)}></i></span></p>
                      </td>
                    </tr>
                  </table>
                </div>
                    </>
               ) })
             }
                   
            </div>
        </div> 
    </>
  )
}

export default CardsDetails;
