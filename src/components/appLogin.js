import React, {useState, useEffect} from 'react';
import {setToken, deleteToken, getToken, initAxiosInterceptors} from '../helpers/auth-helpers';
import { Axios } from 'axios';

initAxiosInterceptors();

export default function AppLogin(){

    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);


    useEffect(() => {

        async function loadUser(){

            if(!getToken()) {

                setLoadingUser(false);
                return;
            }

            try {

                const {data: user} = await Axios.get('http://app.mycoinfolio/api/v1/users');
                setUser(user);
                setLoadingUser(false);


            } catch (error) {

                console.log(error);

            }

        }

        loadUser();
    }, [])

    //Login

    async function login(email, password) {

        const {data} = await Axios.post('http://app.mycoinfolio/api/v1/login', {email, password});
        setUser(data.user);
        setToken(data.token);
    }

    //SignUp

    async function AppSignup(user) {

        const { data } = await Axios.post('http://app.mycoinfolio/api/v1/signup', user);

    setUser(data.user);
    setToken(data.token);

    }

    function logOut() {

        setUser(null);
        deleteToken();

    }
}