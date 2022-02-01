import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Card, Row,Col,Button,Image,ListGroup ,Form} from 'react-bootstrap';
import { Alert } from 'antd';
import { addToCart } from '../../actions/cartActions';
import { useLocation } from 'react-router';
import queryString from 'query-string';



const CartScreen = () => {
  const location = useLocation();
  const { id } = useParams();
  

    const search = location.search;
    const qty= search? new URLSearchParams(search).get("qty"): 1 ;
    console.log(qty);//12345
    console.log(id);

    const dispatch = useDispatch();

    useEffect(() => {
      if(id){
        dispatch(addToCart(id,qty))
      }
    }, [dispatch, id, qty])

  return (
  <>
    <div className="CartScreen">
        <h1>Cart</h1>
        <h1>Cart</h1>
     
    </div>
    </>
  )
};

export default CartScreen;
