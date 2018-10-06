import React, {Component} from 'react';
import {Card, CardSection, Input, MyButton} from './common';

class LoginForm extends Component{
    render() {
        return(
            <Card>
                <CardSection>
                    <Input label={"Email"}  placeholder={"email@gmail.com"}></Input>
                </CardSection>
                <CardSection>
                    <Input label={"Password"} secureTextEntry placeholder={"password"}></Input>
                </CardSection>
                <CardSection>
                    <MyButton>Login</MyButton>
                </CardSection>

            </Card>
        );
    }
}

export default LoginForm;