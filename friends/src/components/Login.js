import React from 'react';
import { withFormik,Form, Field} from 'formik';
import axios from 'axios';

import { Link } from 'react-router-dom';



function Login({ errors, touched, ...props}){

    return <div className = 'form'>
        <Form>

          <div>
            {errors.username && <p>{errors.username}</p>}
             <Field
                type = 'text'
                name = 'username'
                placeholder = 'Username'
            />
          </div>
          
          <div>
            {touched.username && errors.password && <p>{errors.password}</p>}
             <Field
                type = 'password'
                name = 'password'
                placeholder = 'password'
              />
          </div>

            <button type = 'submit'>Submit</button>


            <div>
               Want to join the Friends List? Register <Link to = '/register'>Here</Link>
            </div>

        </Form>


    </div>
};

const FormikLogin = withFormik({
    mapPropsToValues({username, password}){

        return{
            username: username || '',
            password: password || '',
        };
    },

    handleSubmit(values, {resetForm}, {...props} ){

        console.log('Handle Submit Values:',props)

        axios.post('http://localhost:5000/api/login', values)

        .then(res => {
            console.log('res', res)
            if(res.status === 200 && res.data) {
                localStorage.setItem('token', JSON.stringify(res.data))
                resetForm();
                props.history.push('/api/friends')
           
            }
        })

        .catch(error => {
            console.log('err:', error)
        });
        
    },
})(Login)

export default FormikLogin