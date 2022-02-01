import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { register } from '../../actions/userActions';
import FormLogin from '../../components/formLogin/FormLogin';
import { Form , Button,Row,Col } from 'react-bootstrap';
import { Alert } from 'antd';
import { useLocation } from 'react-router';
//import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

    
//let history = useHistory();


const RegisterScreen = () => {
 
 
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')
    const [message , setMessage] = useState(null)


   
    

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister 
    //this variables from the userReducers

    const location = useLocation();

    const redirect = location.search ? location.search.split('=')[1] : '/'
  
    const history = useNavigate();

    useEffect (() => {
        if(userInfo){
          history(redirect)
            //history.push(redirect)
        }
    },[history, userInfo, redirect]) //because when they change it we want to redirect again

    
    const dispatch = useDispatch()
   

    function submitHandler(e) {
    
      e.preventDefault();
      //dispatch (sending) login
    if(password !== confirmPassword){
        setMessage('password do not match')

    }else {
        dispatch(register(name,email, password)) 
      //passing email and password from the form
    }
     
 
  }

    
    //**************form********************************
      

    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
      <>
      <h1>Sign Up</h1>
        {message &&     <Alert message="Error Text" type="error" >{message}</Alert>}
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
        Register
      </Button>

      
     
    </Form>

        <h1>Have an account?{` `} 
        <a href={redirect ? `/signin?redirect=${redirect}` : '/signin'}>
            Login
        </a>
        </h1>
   
  </>
 
  )}

export default RegisterScreen
