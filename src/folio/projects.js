import React from 'react'
import { Link } from 'react-router-dom';


const styles = {
    card: {
      margin: 20,
      background: "#e8eaf6"
    },
    heading: {
      background: "#4e7288",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: "white",
      padding: "0 20px"
    },
    content: {
      padding: 20
    }
  };
  
  function Projects() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>Below are some of my projects:</div>
        <div style={styles.content}>
        <p>GitHub links</p>
                <ul>
                    <li><Link to="https://priteshpatel823.github.io/Project_1/">Find my PetFriend</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://maddycalvo1.github.io/weather_dashboard.github.io/react">Weather App</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://maddycalvo1.github.io/work_day_scheduler.github.io/">Day Planner</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://maddycalvo1.github.io/password_generator/">Password Generator</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://mvplibrary.herokuapp.com">MVP Library</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://maddycalvo1.github.io/timed_quiz.github.io/">Timed Quiz</Link></li>
                </ul>

 
        </div>
      </div>
    );
  }

  
export default Projects;
