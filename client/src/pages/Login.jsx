import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/AuthForm';

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (form, done) => {
    setError('');
    try {
      const { data } = await axios.post('/api/auth/login', {
        email: form.email,
        password: form.password
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to login. Try again.');
    } finally {
      done();
    }
  };

  return <AuthLayout title="Welcome back" subtitle="Log in to continue to your workspace." mode="login">
    <AuthForm mode="login" onSubmit={submit} serverError={error}/>
    <p className="auth-switch">Don't have an account? <Link to="/signup">Create one</Link></p>
  </AuthLayout>;
}

export function AuthLayout({ title, subtitle, mode, children }) {
  return (
    <main className="auth-page">
      <div className="auth-visual">
        <div className="auth-brand">FlowBoard</div>
        <div className="auth-visual-copy">
          <span className="eyebrow">TEAM PRODUCTIVITY</span>
          <h2>The simplest way to manage your workforce.</h2>
          <p>Projects, people and performance — connected in one clean workspace.</p>
          <div className="mini-dashboard">
            <div className="mini-row"><span>Productive time</span><b>12.4 hr</b></div>
            <div className="mini-row"><span>Team utilization</span><b>84%</b></div>
            <div className="mini-line"><i/><i/><i/><i/><i/></div>
          </div>
        </div>
      </div>
      <div className="auth-box">
        <div className="auth-heading"><span className="eyebrow">{mode === 'signup' ? 'CREATE ACCOUNT' : 'SIGN IN'}</span><h1>{title}</h1><p>{subtitle}</p></div>
        {children}
      </div>
    </main>
  );
}