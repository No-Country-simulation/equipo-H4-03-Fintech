import { Link, useNavigate } from "react-router-dom";

export default function BackArrow() {
  const navigate = useNavigate();

  return (
    <button
      className="size-8 absolute top-5 left-5 border border-black flex items-center justify-center rounded-md"
      onClick={() => navigate(-1)}
    >
      <img src="/assets/chevron-left.svg" alt="back arrow" />
    </button>
  )
}
