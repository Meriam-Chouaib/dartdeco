import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import { getUserDetails, updateUserProfile } from '../../actions/userActions';
import FormLogin from '../../components/formLogin/FormLogin';
import { Form , Button,Row,Col } from 'react-bootstrap';
import { Alert } from 'antd';
import { useLocation } from 'react-router';
//import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants';
    
//let history = useHistory();


const ProfileScreen = () => {
 
 
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [message , setMessage] = useState(null)


    const dispatch = useDispatch()
    

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails 
    //this variables from the userReducers

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin 

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile 

    const location = useLocation();

    
  
    const history = useNavigate();

    useEffect (() => {
        if(!userInfo){
          history('/signin')
            //history.push(redirect)
        } else {
            if(!user || !user.name || success){
              //if it is success so we have the user update profile
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch,history, user, success]); //because when they change it we want to redirect again

    
   
   

    function submitHandler(e) {
    
      e.preventDefault();
      //dispatch (sending) login
    if(password !== confirmPassword){
        setMessage('password do not match')

    }else {
      dispatch(updateUserProfile({id:user._id, name, email, password})) 
      //dispatch(envoi) id,name,email,password
    }
     
 
  }

    
    //**************form********************************
      

    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
<>
<h2>User profile</h2>
    { loading ? (<Loader />) 
      : error ? (
      <Message variant="danger"> {error}</Message>  
       ) :(


      <div className="profile-form">
        
      <Row>
        <Col>

       
          {message &&     <Alert message="Error Text" type="error" >{message}</Alert>}
          {success &&     <Alert message="Profile updated" type="success" >Profile updated</Alert>}
          <Form  onSubmit={submitHandler}  >

          <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" value={name} 
            onChange={(e) => setName(e.target.value)}>

            </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)}>

            </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}>
              
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="Password" placeholder="confirm the password" value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}>
              
          </Form.Control>
        </Form.Group>

        <Button  type='submit' variant='primary'>
          Update
        </Button>

        
      
      </Form>
        </Col>
        <Col >
          <h2>My orders</h2>
        </Col>
    </Row>
     
     

      
   
       </div>
      
 
          )

          
        }
        </> )
  }

export default ProfileScreen
