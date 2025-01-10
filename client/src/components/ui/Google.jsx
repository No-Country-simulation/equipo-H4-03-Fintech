import { googleAuth, googleLogout } from "../../actions/auth";

export default function GoogleButton() {

  const handleLogin = () => {
    googleAuth()
  }

  const handleLogout = () => {
    googleLogout()
  }

  return (
    <button
      className="mx-2 py-0 text-white font-bold"
      onClick={handleLogin}
    >
      <span className="px-5 py-3 text-blue-400 border border-blue-400 rounded-lg">Google</span>
    </button>
  )
}
