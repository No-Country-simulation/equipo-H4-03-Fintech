import { useState, useEffect } from "react";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import SocialButtons from "../../components/auth/SocialButtons";
import Separator from "../../components/ui/Separator";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { userService } from "../../services/user.service";

export default function Home() {

  const location = useLocation()
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies()
  
  useEffect(()=> {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (cookies?.token) {
      console.log(cookies?.token);
      navigate('/dashboard')
    }
    
    if(token) {
      setCookies("token", token)
      // const {userId} = jwtDecode(token)
      // userService.getProfile(userId)
      navigate('/dashboard')
    }
  }, [])

  const clearComponentState = {
    home: false,
    login: false,
    register: false
  }
  const initial = {
    ...clearComponentState,
    home: true
  }
  const [component, setComponent] = useState(initial)
  //#region transition
  const handleTransition = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    setComponent({ ...clearComponentState, login: true });
  }
  //#endregion

  const handleChangeComponent = component => {
    setComponent({
      ...clearComponentState,
      [component]: true
    })
  }
  useEffect(() => {
    handleTransition()
    // const isEntered = localStorage.getItem("entered")
    // if (isEntered) {
    //   ret
    // } else {
    //   localStorage.setItem("entered", "login")
    // }
  }, [])

  return (
    <main className={`w-dvw h-dvh flex flex-col items-center justify-center p-0 m-0 ${component.home ? "bg-primary" : ""}`}>
      {
        //#region LOGO
        component?.home && (
          <img src="/logo.svg" alt="logo IUPI" className="w-screen h-dvh" />
        )
        //#endregion
      }
      {
        (component?.login || component?.register) && (
          <main className="flex flex-col items-center">
            <header className="text-title mb-4">
              {
                component.register ? 'Registro' : 'Bienvenido'
              }
            </header>
            <SocialButtons auth={component} />
            <Separator />
            {
              //#region LOGIN
              component?.login && <Login set={handleChangeComponent} />
              //#endregion
            }
            {
              //#region REGISTER
              component?.register && <Register set={handleChangeComponent} />
              //#endregion
            }
          </main>
        )
      }

    </main>
  )
}
