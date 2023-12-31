import React, { Component } from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {

    const initialValues = {
        name:"",
            email:"",
            channel:""
    }

    const onSubmit= (values) => {
        console.log('form data',values)
    }

    const validate= (values) => {
        let errors ={} //1

            if(!values.name)
            {
                errors.name = 'Required'
            }

            if(!values.email)
            {
                errors.email = 'Required'
            }
            else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email))
            {
                errors.email = 'Invalid email format'
            }

            if(!values.channel)
            {
                errors.channel = 'Required'
            }

            return errors //2
    }

    const validationSchema = Yup.object(
        {
            name: Yup.string().required('Required'),
            email:Yup.string().email('Invalid email format').required(),
            channel:Yup.string().required()
        }
    )


    const formik = useFormik({

        initialValues,
        onSubmit,
        // validate
        validationSchema

        // initialValues:{
        //     name:"",
        //     email:"",
        //     channel:""
        // },
        // onSubmit:values =>
        // {
        //     console.log('form data',values)
        // },
        // validate:values =>{
        //     //values.name values.email, values.channel
        //     //errors.name errors.email errors.channel
        //     //errors.name = "This field is required".... 3
        //     let errors ={} //1

        //     if(!values.name)
        //     {
        //         errors.name = 'Required'
        //     }

        //     if(!values.email)
        //     {
        //         errors.email = 'Required'
        //     }
        //     else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email))
        //     {
        //         errors.email = 'Invalid email format'
        //     }

        //     if(!values.channel)
        //     {
        //         errors.channel = 'Required'
        //     }

        //     return errors //2
        // }
    })

    

    console.log('form values',formik.values)
    console.log('form errors',formik.errors)
    console.log('form touched',formik.touched) // Blur Property

    return(
        <div>

            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' 
                    name='name' 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.name}/>
                    {   
                        formik.touched.name && formik.errors.name? 
                        <div className='error'>
                            {formik.errors.name}
                        </div>:null
                    }
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                    {
                        formik.touched.email && formik.errors.email? 
                        <div className='error'>
                            {formik.errors.email}
                        </div>:null
                    }    
                </div>
                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' 
                    name='channel' 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}/>
                    {
                        formik.touched.channel && formik.errors.channel? 
                        <div className='error'>
                            {formik.errors.channel}
                        </div>:null
                    }    
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
export default YoutubeForm