import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/public/Home"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 className="text-destructive text-3xl" >Error</h1>  
    // TODO: Pagina de error
  }
])

export default App
