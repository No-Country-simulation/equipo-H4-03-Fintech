import { Link } from "react-router-dom";

export default function SecondaryLink({ label, to }) {
  return (
    <Link
      className="w-full text-center text-primary border border-primary px-6 py-3 text-base font-medium rounded-3xl cursor-pointer"
      to={to}
    >
      {label}
    </Link>
  )
}
