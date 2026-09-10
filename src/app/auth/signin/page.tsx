import Link from 'next/link';

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <Link href="/auth/signup">Ir para Signup</Link>
      <br />
      <Link href="/">Ir para Home</Link>
    </>
  );
}
