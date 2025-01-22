import { Link } from "react-router-dom";

export default function SecondaryLink({ label, to }) {
  return (
    <Link
      className="self-center text-primary hover:underline"
      to={to}
    >
      {label}
    </Link>
  )
}
