import { useState, useEffect } from "react";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/login";
import SocialButtons from "../../components/auth/SocialButtons";
import Separator from "../../components/ui/Separator";


export default function Home() {

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

  const handleTransition = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    setComponent({ ...clearComponentState, login: true });
  }

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
        //#region HOME
        component?.home && (
          <img src="/logo.svg" alt="logo IUPI" className="w-screen h-dvh" />
        )
        //#endregion
      }
      {
        (component?.login || component?.register) && (
          <main className="flex flex-col items-center">
            <header className="text-title mb-4">Bienvenido</header>
            <SocialButtons />
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
