import React, { useState } from 'react';
import { login, signIn } from './services/api-server';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  //user state가 필요 없는 이유는 user가 있으면 바로 사라지는 컴포넌트라
  const [error, setError] = useState(null);
  //isLogin == false && 회원가입 페이지
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    console.log({ email, password });
    // Sign in
    if (!isLogin) {
      console.log('signin with ', { email, password, passwordCheck });
      if (password !== passwordCheck) {
        setError('패스워드가 일치하지 않습니다.');
        return;
      }
      const data = await signIn({ email, password });
      console.log('sign in result : ', data);
      if (data.error) {
        setError(data.error);
        return;
      }
      onLogin(data.result);
      setError(false);
      return;
    }
    // Log in
    console.log('login with ', { email, password });
    const data = await login({ email, password });
    console.log('login result : ', data);
    if (data.error) {
      setError(data.error);
      return;
    }
    onLogin(data.result);
    setError(false);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}
      >
        <Header isLogin={isLogin} />
        <label htmlFor="">email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {!isLogin && (
          <>
            <label htmlFor="">password check</label>
            <input type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
          </>
        )}
        <button style={{ border: '1px solid #ccc', background: 'transparent' }}>Submit</button>
      </form>
      <Footer isLogin={isLogin} onModeChange={(page) => setIsLogin(page === 'login')} />
      {error != null && <div style={{ paddingTop: '10px', color: 'red', textAlign: 'center' }}>{error}</div>}
    </div>
  );
}

const Header = (isLogin) =>
  isLogin ? <h4 style={{ fontWeight: 'normal' }}>로그인</h4> : <h4 style={{ fontWeight: 'normal' }}>회원가입</h4>;

const Footer = ({ isLogin, onModeChange }) => (
  <div style={{ textAlign: 'center', paddingTop: '10px', color: 'skyblue' }}>
    {isLogin ? (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onModeChange('signin');
        }}
        style={{ color: 'inherit' }}
      >
        회원가입
      </a>
    ) : (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          onModeChange('login');
        }}
        style={{ color: 'inherit' }}
      >
        로그인
      </a>
    )}
  </div>
);
export default LoginPage;
