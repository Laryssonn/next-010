import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <h1>SignUp</h1>
      <Link href="/auth/signin">Ir para Signin</Link>
      <br />
      <Link href="/">Ir para Home</Link>
    </>
  );
}
