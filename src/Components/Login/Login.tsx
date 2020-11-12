import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../FormControl/FormCOntrols'
import { required } from '../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../redux/auth-reducer'
import { reduxStoreType } from '../redux/redux-store'
import { Redirect } from 'react-router-dom'

type LoginFormPropsType = {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
   error: string
}

const LoginForm = (props: LoginFormPropsType) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
         </div>
         <div>
            <Field
               placeholder={'Password'}
               name={'password'}
               component={Input}
               type={'password'}
               validate={[required]}
            />
         </div>
         <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
         </div>
         {props.error && <div>{props.error}</div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

type PropsType = {
   login: (email: string, password: string, rememberMe: boolean) => void
   isAuth: boolean
}

const Login = ({ login, isAuth }: PropsType) => {
   const onSubmit = (formData: any) => {
      login(formData.email, formData.password, formData.rememberMe)
   }

   if (isAuth) {
      return <Redirect to={'/profile'} />
   }

   return (
      <>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </>
   )
}
const mapStateToProps = (state: reduxStoreType) => ({
   isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
