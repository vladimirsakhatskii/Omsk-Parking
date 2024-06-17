import './SingUpForm.css'

export default function SignUpForm() {
    return (
        <body>
            {/* <header>
                <h1>Добро пожалолвать в Omsk Parking</h1>
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
        </body>
    )
}