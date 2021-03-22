import React from 'react'

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
  
  function Resume() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>Here is my resume:</div>
        <div style={styles.content}>
        ●Web Development languages/skills include  HTML, CSS, Javascript, Node.JS, MySQL, Web API’s, Ruby on Rails, and Python
        ●Skilled in Salesforce, ZoomInfo and Microsoft platforms. Master particularly in Excel and Word
        ●  Skilled in project management platforms such as JIRA and Agile Smartsheet
        ●  Very detailed in work, format emails with excellent verbiage, exceptional listener and communicator who effectively conveys information verbally and if needed, in writing.	
        ●  Flexible team player who thrives in environments requiring ability to effectively prioritize and juggle multiple concurrent projects	
        ●  Goal-driven leader who maintains a productive climate and confidently motivates, mobilizes, and coaches employees to meet high performance standards.	
        ●  Respectful with confidential information. Productive worker with solid work ethic who exerts optimal effort in successfully completing tasks. 
 
        </div>
      </div>
    );
  }
  
export default Resume;
