import React, {useEffect} from 'react';
import {login} from "../../services/api.service";

const LoginPage = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);
    return (
        <div>
            login
        </div>
    );
};

export default LoginPage;