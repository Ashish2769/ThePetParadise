import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ForgetPasswordService from './services/ForgetPasswordService'
import { Grid, TextField, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";

function ForgetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const navigate = useNavigate()

  //event handlers for login
  const forgotPassword = (event) => {
    event.preventDefault()
    if (email.length === 0) {
      toast.error('please enter email')
    } else if (dateOfBirth.length === 0) {
      toast.error('please enter dateOfBirth')
    } else if (password.length === 0) {
      toast.error('please enter password')
    } else if (confirmPwd.length === 0) {
      toast.error('please enter confirm password')
    } else if (password !== confirmPwd) {
      toast.error('password does not match')
    } else {
      const forgotPassword = {
        password,
        email,
      }

      ForgetPasswordService.update(forgotPassword)
        .then((response) => {
          console.log('password changed successfully', response.data)
          toast.success('password changed successfully', {
            position: toast.POSITION.TOP_CENTER,
          })
          navigate('/')
        })
        .catch((error) => {
          toast.error('invalid email or date of birth')
          console.log('something went wrong', error)
        })
    }
  }

  return (
    <div>
      <div className='wrapper'>
        <div
          className='container'
          style={{
            width: 600,
            marginTop: 80,
            marginLeft: 650,
            marginBottom: 300,
            borderStyle: 'solid',
            borderWidth: 3,
            borderRadius: 20,
            borderColor: 'rebeccapurple',
            alignItems: 'center'
          }}
          >
          <h2 className='mb-3' style={{ marginTop: 30 }}>
            Forgot Password
          </h2>
          <form>
            
            <div className='row'>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Email: </label>
                  <input
                    className='floating-input form-control'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Date Of Birth: </label>
                  <input
                    className='floating-input form-control'
                    name='dateOfBirth'
                    type='date'
                    placeholder='Date Of Birth'
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Password: </label>
                  <input
                    className='floating-input form-control'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='on'
                  />
                </div>
              </div>
              <div className='col-lg-12' style={{ marginTop: 20 }}>
                <div className=' form-group'>
                  <label>Confirm Password: </label>
                  <input
                    className='floating-input form-control'
                    name='confirmPwd'
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    autoComplete='on'
                  />
                </div>
              </div>
            </div>
            <p />
            <br></br>
            <button
              className='btn btn-success'
              onClick={forgotPassword}
              style={{ marginBottom: 30 }}>
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
