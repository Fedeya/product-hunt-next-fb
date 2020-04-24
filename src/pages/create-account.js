import Layout from '../components/layout/Layout';

export default function CreateAccount() {
  return (
    <Layout>
      <h1>Create Account</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder="********"
          />
        </div>

        <button type="submit">
          Create Account
        </button>
      </form>
    </Layout>
  );
}