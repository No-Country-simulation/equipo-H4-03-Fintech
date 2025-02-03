import Home from "../pages/public/Home";

const homeRoutes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <h1 className="text-destructive text-3xl" >Error</h1>
    // TODO: Pagina de error
  },
  {
    path: '/home',
    element: <Home />
  },
]

export default homeRoutes