import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/SignIn"
import SignUpPage from "./pages/SignUp"
import { UserProvider } from "./contexts/UserContext"
import HomePage from "./pages/Home"


export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

// const NavContainer = styled.div`
// width: 100%;
// height: 70px;
// display: flex;
// align-items: center;
// justify-content: center;
// background-color: #C3CFD9;
// color: #E8833A;
// font-family: 'Roboto', sans-serif;
// font-size: 34px;
// position: fixed;
// top: 0;
// a {
//     text-decoration: none;
//     color: #E8833A;
// }
// `
