import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import IndexPage from "./pages/IndexPage"


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path={'/'} element={<IndexPage />}/> 

      </Routes>
    </BrowserRouter>
  )
}

export default Router
