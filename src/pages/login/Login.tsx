import React, {useRef, MouseEvent, useEffect} from "react";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './styles.sass'
import {useAuthState} from "react-firebase-hooks/auth";
import {getAuth} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AuthTemplates} from "../../core/actions/auth";

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, loading] = useAuthState(getAuth());

    const signUpGoogle = async (): Promise<void> => {
        dispatch({
            type: AuthTemplates.SignIn,
        });
        navigate('/');
    };

    useEffect(() => {
        if (user && !loading) {
            navigate('/');
        }
    }, [loading, user]);

    const loginRef = useRef<HTMLDivElement>(null);
    const registerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const togglePages = () => {
        if (loginRef.current && registerRef.current) {
            animateToggling(loginRef.current, registerRef.current);
        }
    }

    const preventForm = (event: MouseEvent) => {
        if (formRef.current) {
            event.preventDefault()
        }
    }

    const animateToggling = (firstPage: HTMLDivElement, secondPage: HTMLDivElement) => {
        firstPage.classList.toggle('page-display');
        secondPage.classList.toggle('page-display');
        setTimeout(() => {
            firstPage.classList.toggle('page-active');
            secondPage.classList.toggle('page-active');
        }, 0)
    }

    return (
        <>
        <main>
            <div className='register column' ref={registerRef}>
                <div className='row'>
                    <FontAwesomeIcon className='fa-2x' icon={faGoogle} onClick={signUpGoogle}/>
                    <FontAwesomeIcon className='fa-2x' icon={faGithub} />
                </div>
                <p>Or</p>
                <div className='column'>
                    <form className='column' ref={formRef}>
                        <input className='input' placeholder='Type your email' required/>
                        <input className='input' type='password' placeholder='Type your password' minLength={8} required/>
                        <input className='btn' type='submit' value='Sign up' onClick={preventForm}/>
                    </form>
                </div>
                <p onClick={togglePages}>Already have an account?</p>
            </div>
            <div className="column login page-active page-display" ref={loginRef}>
                <h3>Please log in to your account</h3>
                <div className='row'>
                    <FontAwesomeIcon className='fa-2x' icon={faGoogle} onClick={signUpGoogle}/>
                    <FontAwesomeIcon className='fa-2x' icon={faEnvelope} />
                    <FontAwesomeIcon className='fa-2x' icon={faGithub} />
                </div>
                <p onClick={togglePages}>Don't have an account?</p>
            </div>
        </main>
        </>
    );
}

export default LoginPage