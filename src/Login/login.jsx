import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../components/redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../../src/components/common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {createField('EMAIL', 'email', [required], Input)}
        {createField('PASSWORD', 'password', [required], Input, {type: 'password'})}
        {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}

        { captchaUrl && <img src={captchaUrl}/> }
        { captchaUrl &&  createField('Symbols from image', 'captcha', [required], Input, {})}
        { error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>

}

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);