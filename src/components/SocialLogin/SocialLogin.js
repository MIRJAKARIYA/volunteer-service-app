import React, { useEffect } from 'react';
import google from '../../images/social-media-images/google.png';
import facebook from '../../images/social-media-images/fb.png';
import github from '../../images/social-media-images/github.png';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user1 || user2 || user3){
            navigate(from, { replace: true });
        }
    },[user1,user2,user3,navigate,from])
    return (
        <div className='mt-[-20px] mb-2'>
            <p className='text-center mb-2'>Or {location.pathname.includes('login')?"Sign In":"Sing Up"} Using</p>
            <div className='flex justify-center'>
                <div onClick={()=> signInWithGoogle()} style={{cursor:'pointer'}}> 
                    <img src={google} width={50} alt="" />
                </div>
                <div onClick={()=>signInWithFacebook()} style={{cursor:'pointer'}}>
                    <img src={facebook} width={95} alt="" />
                </div>
                <div onClick={()=>signInWithGithub()} style={{cursor:'pointer'}}>
                    <img src={github} width={50} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;