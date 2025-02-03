import Login from "./Login"
import Register from "./Register"

export default function FormsContainer({ component, handleChangeComponent }) {

  const handleChange = async (newComponent) => {
    handleChangeComponent(newComponent)
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full">
        <div>
          {component?.login && (
            <div>
              <Login set={handleChange} />
            </div>
          )}

          {component?.register && (
            <div>
              <Register set={handleChange} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}