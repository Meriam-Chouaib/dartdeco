
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Card, Row,Col,Button,Image,ListGroup ,Form,Strong} from 'react-bootstrap';

import Rating from '../../components/rating/Rating';
import Message from '../../components/message/Message';
import { PATHS } from '../../core/enums/paths';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { listProductDetails } from '../../actions/productActions';
import { Alert } from 'antd';
import Loader from '../../components/loader/Loader';
import './ProductScreen.scss'







const ProductScreen = ({ match}  ) => {
   
   
    const [qty, setQty] = useState(1)
   
    const dispatch = useDispatch();
    const { id } = useParams();

    const productDetails = useSelector((state) => state.productDetails)
    const{ loading, error, product } = productDetails

    
    
  

    useEffect(() => {
     dispatch(listProductDetails(id))
     }, [dispatch, match])

     const navigate = useNavigate();
    const addToCartHandler = () => {
      
        navigate(`/cart/${id}?qty=${qty}`)

    }

      
    return (
        <>
             <Link to={PATHS.HOME}> Back to home</Link> 
             { loading ? (
                 <Loader />
                 
                ) : error ? (
                    <Message variant="danger"> {error}</Message>  
                ) :  (
                    <div>
                        <Row  className="product" >
                            <Col className="gutter-row " md={6} >
                               <Image    src={product.image} alt={product.name} fluid />
                                
                               </Col>
                               <Col md={3}>
                                   <ListGroup variant='flush'>
                                       <ListGroup.Item>
                                           <h3>{product.name}</h3>

                                       </ListGroup.Item>
                                       <ListGroup.Item>
                                        <Rating value={product.rating}
                                                text={`${product.numReviews} reviews`}
                                        />
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Price: $ {product.price}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: $ {product.description}
                                        </ListGroup.Item>                                      

                                   </ListGroup>
                                   </Col>
                                   <Col md={3}>
                                       <Card>
                                           <ListGroup variant='flush'>
                                               <ListGroup.Item>
                                                   <Row>
                                                       <Col>Price :</Col>
                                                       <Col>
                                                         $ {product.price}
                                                       </Col>
                                                   </Row>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Status:</Col>
                                                        <Col> {product.countInStock > 1 ? 'In stock' : 'Out of the stock'}</Col>
                                                    </Row>

                                                </ListGroup.Item>

                                                {product.countInStock > 0 && (
                                                    <ListGroup.Item>
                                                        
                                                        <Row>
                                                            <Col>Quantity</Col>
                                                            <Col> 
                                                            <Form.Control as='select' value={qty}  
                                                              onChange={(e) => setQty(e.target.value)} >
                                                                {
                                                                [...Array(product.countInStock).keys()].map(
                                                                    (x) => (
                                                                        <option key={x + 1} value={x + 1} >{x+1} </option>
                                                                    )
                                                                )}
                                                                {/* [0,1,2,3] si il y'a 3=countInStock */}
                                                            
                                                            </Form.Control>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                )}

                                                <ListGroup.Item>
                                                    <Button onClick={addToCartHandler} className="btn-add-to-card" disabled={product.countInStock === 0} >Add to card</Button>
                                                </ListGroup.Item>
                                           </ListGroup>
                                       </Card>
                         
                                   </Col>
                        </Row>
                    </div>
                
                )
            }
              
        
           
        </>
    )

        }
export default ProductScreen
