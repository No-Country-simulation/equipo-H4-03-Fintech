import { Link, useNavigate } from "react-router-dom";

export default function CloseToHome() {
  const navigate = useNavigate();

  return (
    <button
      className="size-8 absolute top-5 right-5 border border-black flex items-center justify-center rounded-md"
      onClick={() => navigate('/dashboard')}
    >
      <img src="/assets/close-icon.svg" alt="close icon" />
    </button>
  )
}
