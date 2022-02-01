import React, {FC} from 'react'
import { Card, Avatar,Row,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
//import products from '../../products';
import Rating from '../rating/Rating';
const { Meta } = Card;

interface Iproduct{
        product:{
        _id: string;
        name: string;
        image: string;
        description: string;
        brand: string;
        category: string;
        price: number;
        countInStock: number;
        rating: number;
        numReviews: number;
    }
 
}


    function Product(props:Iproduct){
 
    return (
    <>
    <Row gutter={16} >
      <Col className="gutter-row product" span={12} >
            <Card
                hoverable
                style={{ width: 250 }}
                cover={<img alt={props.product.name} 
                src={props.product.image} />}
         
            >
                
                <Meta title={props.product.name} description={props.product.description} />
                <Link to={`/product/${props.product._id}`}>View product</Link>
               <div className="rating col-3">
                    {props.product.rating} from {props.product.numReviews} reviews
                  
                    <Rating value={props.product.rating} 
                            text={`${props.product.numReviews} reviews`
                            
                        }
                    />

               </div>
               <div>
                   <h2>${props.product.price}</h2>
               </div>
            </Card>
            </Col>
    </Row>


 
         {/*}  <Card
                style={{ width: 150 }}
                cover={
                <img
                    alt={props.product.name}
                    src={props.product.image}
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <h2>{props.product.name}</h2>
                <a href={`/product/${props.product._id}`}>  <img
                    alt={props.product.name}
                    src={props.product.image}
                /></a>
                <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={props.product.name}
                description={props.product.description}
                />
            </Card>*/}
              
        </>
    )
}


export default Product
