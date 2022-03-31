import './LoginPage.css';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styledComponents from 'styled-components';

const LoginPage = () => {
    return (
        <div class="page">
            <div class="logo">
                <img src="https://chambermaster.blob.core.windows.net/images/customers/2064/members/5099/logos/MEMBER_PAGE_HEADER/2018cbcagreenverticalfdic.png" alt="logo" id="logo-img"></img>
            </div>
            <div class="Login">
                <h1>Login</h1>
                
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Button variant="primary" type="submit" id="button">
                    Submit
                </Button>
                </Form>
            </div>
        
        </div>
    );
};

export default LoginPage;