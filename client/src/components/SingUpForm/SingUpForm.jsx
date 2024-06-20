import { useEffect } from 'react'
import './SingUpForm.css'

export default function SignUpForm() {
    
    useEffect(()=>{
        document.body.className = 'body_SignUpForm'
    })

    return (
        <>
            {/* <header>
                <h1>Удачи на парковках Омска</h1>
            </header> */}
            <div className='form-container'>
                <form className='form'>
                    <input
                        type="name"
                        placeholder="Your name"
                        className="input"
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="input"
                    />
                    <button className='submit'>
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    )
}