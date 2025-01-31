import { Link } from "react-router-dom";

export default function CapitalShortcut({ to, label, icon }) {
  return (
    <Link to={to} className="flex flex-col items-center gap-2">
      <article className={`size-14 rounded-full flex items-center justify-center bg-primary `}>
        <img src={`/assets/${icon}.svg`} alt="money symbol" />
      </article>
      <span className="font-medium text-base text-center text-muted">{label}</span>
    </Link>
  )
}
