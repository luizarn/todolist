import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import useToken from "../../hooks/useToken";
import useName from "../../hooks/useName";

export default function HomePage() {

    const [tasks, setTasks] = useState(null);
    const token = useToken();
    const name = useName();

    useEffect(() => {
        console.log(token)
        const fetchData = async () => {
            try {
                const headers = {
                    Authorization: `Bearer ${token}`,
                };
                
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/tasks/`, { headers });
                setTasks(response.data);
                console.log(response.data);
            } catch (error) {
                // console.log(user);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (tasks === null) {
        return (<div> Carregando....</div>);
    }


    return (
        <PageContainer>
            oi {name}

            <ListContainer>

                {tasks.map((m) => (
                    <StyledBox key={m.id}>
                        <h1>    {m.title}</h1>
                        <h2>{m.description}</h2>
                    </StyledBox>
                ))}


            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
    
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
    
`
const StyledBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:13px;
margin-right:10px;
margin-left:15px;
    h1{
        font-size: 18px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    h2{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`