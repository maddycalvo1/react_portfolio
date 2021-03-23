import React from 'react'

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
  
  function About() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>What I do:</div>
        <div style={styles.content}>
          I am a Full Stack Software Developer! I enjoy crafting and designing client-side development using web technologies. Some of the languages I use are: 
          HTML, CSS, Javascript. I am skilled in Node.Js, MySQL, and am currently learning about React!
                       Some of the tools I will master: MySQL, etc.
        </div>
      </div>
    );
  }
  
export default About;

