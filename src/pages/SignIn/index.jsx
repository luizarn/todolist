import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext.jsx"
import  logo  from "../../assets/logo.gif"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate()
  


  function handleLogin(e) {
    e.preventDefault()

    const body = { email, password }

    const promise = axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, body)

    promise.then(res => {
      setUserData(res.data)
      console.log(res.data)
      navigate("/home")
    })
    promise.catch(err => {
      alert(err.response.data.message)
      setPassword("")
      setEmail("")
    })

  }


  return (
    <Container>
      <img src={logo}/>
      <p>Iniciar Sessão</p>
      <StyledForm onSubmit={handleLogin}>
        <StyledInput
          data-test="email"
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          data-test="password"
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledButton type="submit">
          Entrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/sign-up">
      Não possui uma conta ainda? <span> Cadastra-se</span>
      </StyledLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  margin: 30px auto;
  p{
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #000000;
  }
  img {
    margin-top: 65px;
    width: 300px; 
    height: 300px; 
  }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
const StyledInput = styled.input`
  width: 30%;
  height: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ACE4D3;
  border-radius: 5px;
  font-size: 18px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  &::placeholder{
    color:  #000000;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
  @media screen and (max-width: 800px) {
      width: 50%;
  }
  
`

const StyledButton = styled.button`
  width: 30%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  background: #1ec869;
  border: 1px solid #ACE4D3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  color: #FFFFFF;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Ubuntu Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  span{
    font-weight: 700;
  }
`