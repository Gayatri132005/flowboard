import { useState } from 'react';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

export default function AuthForm({ mode, onSubmit, serverError }) {
  const isSignup = mode === 'signup';
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (isSignup && form.name.trim().length < 2) e.name = 'Name must contain at least 2 characters.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters.';
    if (isSignup && form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await onSubmit(form, () => setLoading(false));
  };

  return (
    <form className="auth-form" onSubmit={submit} noValidate>
      {serverError && <div className="alert error">{serverError}</div>}

      {isSignup && (
        <label>
          Full name
          <input name="name" value={form.name} onChange={change} placeholder="Gayatri Kotwal" />
          {errors.name && <small>{errors.name}</small>}
        </label>
      )}

      <label>
        Email address
        <input name="email" value={form.email} onChange={change} placeholder="you@example.com" />
        {errors.email && <small>{errors.email}</small>}
      </label>

      <label>
        Password
        <div className="password-wrap">
          <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={change} placeholder="Minimum 6 characters" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password">
            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
          </button>
        </div>
        {errors.password && <small>{errors.password}</small>}
      </label>

      {isSignup && (
        <label>
          Confirm password
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={change} placeholder="Repeat password" />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
        </label>
      )}

      <button className="primary-btn full" disabled={loading}>
        {loading ? <><LoaderCircle className="spin" size={18}/> Processing...</> : isSignup ? 'Create Account' : 'Login'}
      </button>
    </form>
  );
}