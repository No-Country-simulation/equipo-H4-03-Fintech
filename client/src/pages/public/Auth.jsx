import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="w-screen h-screen">
      Diseño en /pages/auth + <Outlet />
    </div>
  )
}
