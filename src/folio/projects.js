import React from 'react'
import { Link } from 'react-router-dom';


const styles = {
    card: {
      margin: 20,
      background: "#e8eaf6"
    },
    heading: {
      background: "#3f51b5",
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
                    <li><Link to="/react">React</Link></li>
                </ul>
                <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>
                <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>
                <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>
                <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>
                <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>

 
        </div>
      </div>
    );
  }

  
export default Projects;
