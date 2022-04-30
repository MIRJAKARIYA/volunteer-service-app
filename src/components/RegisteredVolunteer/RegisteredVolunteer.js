import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {AiTwotoneDelete} from 'react-icons/ai'

const RegisteredVolunteer = ({volunteer,handleOwnVolunteer}) => {
    const [user] = useAuthState(auth);
    const {email, name, registrationdate, volunteerservice, _id} = volunteer;
    return (
        <tr>
            <td>{name}</td>   
            <td>{email}</td>   
            <td>{registrationdate}</td>   
            <td>{volunteerservice}</td>   
            <td>
                <button disabled={user.email === email && true} className={`${user.email === email?'text-red-700':'text-red-200'} ml-4 text-2xl`}>{<AiTwotoneDelete></AiTwotoneDelete>}</button>
            </td>   
        </tr>
    );
};

export default RegisteredVolunteer;