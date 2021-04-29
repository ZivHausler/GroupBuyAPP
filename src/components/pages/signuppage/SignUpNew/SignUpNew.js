import React from 'react';
import styles from './SignUpNew.module.css';

class SignUpNew extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
        // this.users = [
        //     {
        //         firstName: "Daniel",
        //         lastName: "Ezra",
        //         email: "daniel",
        //         password: "123456",
        //     },
        //     {
        //         firstName: "Ziv",
        //         lastName: "Housler",
        //         email: "zivhousler@gmail.com",
        //         password: "11223344",
        //     },
        //     {
        //         firstName: "Hadar",
        //         lastName: "Cohen",
        //         email: "hadar5z5z5z@gmail.com",
        //         password: "123",
        //     }
        // ]
        this.inputs = [
            {
                placeholder: 'First name',
                name: 'firstName',
                type: 'text',
                class: 'firstNameInput'
            },
            {
                placeholder: 'Last name',
                name: 'lastName',
                type: 'text',
                class: 'lastNameInput'
            },
            {
                placeholder: 'Email address',
                name: 'email',
                type: 'email',
                class: 'emailAddressInput'
            },
            {
                placeholder: 'Create password',
                name: 'password',
                type: 'text',
                class: 'passwordInput'
            }
        ]
        if(localStorage.users)
            this.users = JSON.parse(localStorage.users);

        console.log(this.users);
    }

    vaildateEmail = (email) => {
        for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].email.toLowerCase() === email.toLowerCase()){
               return true;
            }
        } return false;
    }

    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    registerNow = () => {
        console.log(this.vaildateEmail(this.state.email));
        if(!this.vaildateEmail(this.state.email)){
            console.log("adding user into the list");
            this.users.push({firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password});
            localStorage.users = JSON.stringify(this.users);
        }
        else console.log('This user email already exists => not adding the user');

    }

    render() {
        return (
            <div className={styles.newAccountDiv}>
                <div className={styles.inputsDiv}>
                    {this.inputs.map((input, i) => (
                        <input onChange={this.inputHandler} key={i} placeholder={input.placeholder} type={input.type} name={input.name} className={input.class}></input>))}
                </div>
                <p>Password must be at least 8 characters long.</p>
                <button onClick={this.registerNow} type="button" className="signButton">Sign Up</button>
            </div >
        )
    }
}

export default SignUpNew;