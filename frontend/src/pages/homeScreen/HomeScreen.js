
import React ,{ useState, useEffect }from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row , Col} from 'antd';
import { map } from 'rxjs/operators';
//import products from '../../products';
import Product from '../../components/product/Product';
import Message from '../../components/message/Message';
import Loader from '../../components/loader/Loader';


import { listProducts } from '../../actions/productActions';

const HomeScreen = () => {
 
    const dispatch = useDispatch() // the method used to dispatch actions and trigger state changes to the store 
    
    const productList = useSelector(state => state.productList) //recover(recupere) data from state productList
    const { loading, error, products } = productList //all possibility to send from productProducers to productList
    
    
    useEffect(() => {
        dispatch(listProducts()) //firing (déclencher) off the actions => get product and reducers Download to the state
  
    },[dispatch])  
    //[] the second argument if you want to pass an array of dependencies
    //anything you want to put the useEffect run when you change it
    //if you want to run this function every changement on thas element you have to put that element in [elemnt1,element2] for example
   

    return (

        
        <>
            <h1>Latest products</h1>
            { loading ? (
           <Loader />
            ) : error ? (
           <Message variant="danger"> {error}</Message>  
            ) :(
            <Row className="">
            
                {products.map(product => (
                    <Col key={product._id} sm={12} md={8} lg={5}>
               
                    <Product product={product}  />
                </Col>
                ))}
            </Row>
             )}
            
        </>
    )
}

export default HomeScreen
