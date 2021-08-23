import React, { useState } from 'react';
import './Signup.css';
import {Button } from '@material-ui/core';
import { auth } from '../Firebase/firebase'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router';


const Signup = () => {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState("");
    const [clg, setclg] = useState("");
    const [email, setemail] = useState("");
    const [pnum, setpnum] = useState("");
    const [pass1, setpass1] = useState("");
    const [pass2, setpass2] = useState("");

    // Error States
    let [fnameError, setfnameError] = useState("");
    let [lnameError, setlnameError] = useState("");
    let [pass1Error, setpass1Error] = useState("");
    let [pass2Error, setpass2Error] = useState("");
    let [passequalError, setpassequalerror] = useState("");


    const signUp = () => {

        try {
            auth
                .createUserWithEmailAndPassword(email, pass1)
                .then(() => {
                    axios.post('/SignUp', {
                        id: auth.currentUser.uid,
                        name: fname + " " + lname,
                        age: age,
                        college: "Thapar University",
                        email: email,
                        phone: pnum
                    }).then(() => {
                        auth.currentUser.updateProfile({displayName:fname + " " + lname})
                        alert("Account Created")
                        history.push('/')
                    })
                        .catch((e) => {
                            auth.currentUser.delete()
                            alert(e)
                        })
                })
                .catch((e) => {

                    alert(e);
                })
        } catch (e) {
            alert(e)
        }
    }


    const [open, setOpen] = useState(false);
    const history = useHistory()
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    let valid = () => {
        let fnameError = ""; let lnameError = ""; let pass1Error = ""; let pass2Error = ""; let passequalError = "";

        if (fname.length < 3 || fname == null) {
            fnameError = "Invalid first name";
        }
        if (lname.length < 3 || lname == null) {
            lnameError = "Invalid last name";
        }
        if (pass1.length < 6) {
            pass1Error = "Length should be >= 6";
        }
        if (pass2.length < 6) {
            pass2Error = "Length should be >= 6";
        }
        if (pass1 != pass2) {
            passequalError = "Passwords doesn't match";
        }

        if (fnameError || lnameError || pass1Error || pass2Error || passequalError) {
            setfnameError(fnameError);
            setlnameError(lnameError);
            setpass1Error(pass1Error);
            setpass2Error(pass2Error);
            setpassequalerror(passequalError);
            return false;
        }
        return true;
    }

    const handleSubmitForm = (event) => {

        let isValid = valid();
        event.preventDefault();
        if (isValid) {
            setfnameError("");
            setlnameError("");
            setpass1Error("");
            setpass2Error("");
            setpassequalerror("");
            signUp();
        }
    };

    return (
        <div className="signup">
            <div className="signup_container">
                <h1>Create your Account</h1>
                <form>
                    <div className="form_container">
                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>First Name</h4>
                                <input type="text" required value={fname} onChange={(event) => { setfname(event.target.value) }}/>
                                <p className="error">{fnameError}</p>
                            </div>
                            <div className="form_elements">
                                <h4>Last Name</h4>
                                <input type="text" required value={lname} onChange={(event => { setlname(event.target.value) })}/>
                                <p className="error">{lnameError}</p>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Age</h4>
                                <input type="number" required value={age} onChange={(event => { setage(event.target.value) })}/>
                            </div>
                            <div className="form_elements">
                                <h4>Choose your College</h4>
                                <select id="college" name="college" required value={clg} onChange={(event => {setclg(event.target.value) })}>
                                    <option value="TIET">Thapar University</option>
                                    <option value="PEC">Punjab Engineering College</option>
                                    <option value="CU">Chandigarh University</option>
                                    <option value="NITJ">NIT Jalandhar</option>
                                </select>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Email</h4>
                                <input type="email" value={email} required onChange={(event => { setemail(event.target.value) })}/>
                            </div>
                            <div className="form_elements">
                                <h4>Mobile Number</h4>
                                <input type="number" value={pnum} required onChange={(event => { setpnum(event.target.value) })}/>
                            </div>
                        </div>

                        <div className="form_cont">
                            <div className="form_elements">
                                <h4>Password</h4>
                                <input type="password" value={pass1} required onChange={(event => { setpass1(event.target.value) })}/>
                                <p className="error">{pass1Error}</p>
                            </div>
                            <div className="form_elements">
                                <h4>Confirm Password</h4>
                                <input type="password" value={pass2} required onChange={(event => { setpass2(event.target.value) })}/>
                                <p className="error">{pass2Error} {passequalError}</p>
                            </div>
                        </div>
                        </div>
                </form>

                <div className="form_btn">
                    <Button variant="contained" className="btn" onClick={handleSubmitForm}>Sign Up</Button>
                </div>

                <p>Already have an account?</p>
                <div className="form_btn">
                    <Button variant="contained" className="btn" component={Link} to="/login">Log In</Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
