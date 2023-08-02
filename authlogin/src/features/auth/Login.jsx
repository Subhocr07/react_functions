import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from './AuthSlice';
import { useLoginMutation } from './ApiAuthSlice';

const Login = () => {
    const userRef = useRef(null);
    const errRef = useRef(null);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await login({ user, pwd }).unwrap();
            dispatch(setCredentials({ ...userData, user }));
            setUser('');
            setPwd('');
            navigate('/welcome');
        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    const handleUserInput = (e) => setUser(e.target.value);

    const handlePwdInput = (e) => setPwd(e.target.value);

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section className="login">
                    {errMsg && (
                        <p ref={errRef} className="errmsg" aria-live="assertive">
                            {errMsg}
                        </p>
                    )}

                    <h1>Employee Login</h1>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            value={user}
                            onChange={handleUserInput}
                            autoComplete="off"
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                </section>
            )}
        </>
    );
};

export default Login;
