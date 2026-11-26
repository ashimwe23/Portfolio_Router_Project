function Login({ onLogin }) {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">
        Login Page
      </h1>

      <button
        onClick={onLogin}
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Login
      </button>
    </div>
  );
}

export default Login;