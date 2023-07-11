import { Index } from "./Pages/Index"
import { Results } from "./Pages/Results"
import {Route, BrowserRouter, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Index} path="/" />
          <Route Component={Results} path="/results" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
