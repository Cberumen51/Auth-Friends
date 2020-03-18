import React from 'react';
import { withFormik,Form, Field} from 'formik';
import axios from 'axios';

import { Link } from 'react-router-dom';



function Regristration({errors, touched}){

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
            {errors.username && <p>{errors.email}</p>}
             <Field
                type = 'text'
                name = 'email'
                placeholder = 'Email'
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
                Already have a Friend? Login <Link to = '/'>Here</Link>
            </div>

        </Form>


    </div>
};

const FormikRegristration = withFormik({
    mapPropsToValues({username, email, password}){

        return{
            username: username || '',
            email: email || '',
            password: password || '',
        };
    },

    handleSubmit(values, { resetForm }){

        console.log('Handle Submit Values:',values)

        axios.post('http://localhost:5000/api/login', values)

        .then(response => {
            console.log('Axios.post Response:', response)
            resetForm();
        })

        .catch(error => {
            console.log('Axios.post Error:', error)
        });
        
    },

})(Regristration)

export default FormikRegristration