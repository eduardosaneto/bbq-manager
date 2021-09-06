import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UserSection from "../../../styledComponents/UserSection";
import Content from "../../../styledComponents/Content";
import Message from "../../../styledComponents/Message";
import Days from "../../../styledComponents/Days";
import PageHeader from "../PageHeader";
import FooterMenu from "../FooterMenu";
import WeekDays from "../Weekdays";
import DeleteHabit from "./DeleteHabit";
import Title from "../../components/Title";

export default function Habits() {
  const location = useLocation();
  const [habits, setHabits] = useState([]);
  const [isThereAHabit, setIsThereAHabit] = useState(false);    
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token;

  function loadHabits(config) {            
    const request = axios.get(process.env.REACT_APP_HABITS, config);
    request.then(response => {
      if (response.data.length > 0) setIsThereAHabit(true);
      setHabits(response.data);
    });
    request.catch(error => {
      alert("Não foi possível carregar seus hábitos do dia");
    });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    loadHabits(config);
  }, [token]);

  return (
    <UserSection>
      <Title />
      <PageHeader location={location} loadHabits={loadHabits}/>
      {isThereAHabit ? 
        (habits.map(habit => (
          <Content key={habit.id}>
            <h2>{habit.name}</h2>
            <Days>
              <WeekDays habitDays={habit.days}/>
            </Days>
            <DeleteHabit className="erase" id={habit.id} loadHabits={loadHabits}/>
          </Content>
        ))) :
        <Message>
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Message>
      }  
      <FooterMenu />
    </UserSection>
  );
}
