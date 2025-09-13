import Background from '../components/Background';
import Form from '../components/Form';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden h-screen">
        <Background />
        <Form />
      </main>
    </>
  );
}

export default Login