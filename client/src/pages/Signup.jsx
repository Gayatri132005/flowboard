import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthForm from '../components/AuthForm';
import { AuthLayout } from './Login';

export default function Signup() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (form, done) => {
    setError('');
    try {
      const { data } = await axios.post('/api/auth/signup', {
        name: form.name,
        email: form.email,
        password: form.password
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create account.');
    } finally {
      done();
    }
  };

  return <AuthLayout title="Create your account" subtitle="Start your workspace in less than a minute." mode="signup">
    <AuthForm mode="signup" onSubmit={submit} serverError={error}/>
    <p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p>
  </AuthLayout>;
}