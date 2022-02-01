import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { login } from '../../actions/userActions';
import FormLogin from '../../components/formLogin/FormLogin';
import { Form , Button,Row,Col } from 'react-bootstrap';
import { Alert } from 'antd';
import { useLocation } from 'react-router';
//import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

    
//let history = useHistory();


const LoginScreen = () => {
 
 
     
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const dispatch = useDispatch()
   

      function submitHandler(e) {
      
        e.preventDefault();
        //dispatchlogin
      
        dispatch(login(email, password)) 
        //passing email and password from the form
   
    }
    

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin 
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

    
    {/* const dispatch = useDispatch()
   const submitHandler =  (e) => {
       // if (e && e.preventDefault) { // add?
     {/** 
       try{
            e.preventDefault();
           // e.persist();
            dispatch(login(email, password))
            console.log('yes')
        }
      catch(error){
        console.log(error)
      }
      try{ e.preventDefault();
      dispatch(login(email, password))
      console.log('yes')}
      catch(error){ console.log(error)}
     } */}
    
    //**************form********************************
      

    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
      <>
      <h1>Sign in</h1>

        <Form  onSubmit={submitHandler}  >
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
      <Button  type='submit' variant='primary'>
        Sign In
      </Button>

      
     
    </Form>

        <h1>New Customer?{` `} 
        <a href={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
        </a>
        </h1>
   
  </>
 
  )}

export default LoginScreen
