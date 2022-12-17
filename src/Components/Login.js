// This is the Login component
import { useAuth } from "../Context/authContext";



export function Login() {
  const { loginWithGoogle } = useAuth();


  return (
    <div>
      <button onClick={loginWithGoogle}>Login with Google</button>

    </div>
  );
}

// Path: islaback\src\Components\Login.Js


