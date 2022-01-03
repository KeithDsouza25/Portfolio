import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#FFA333",
    grade3: "#FFAF4D",
    grade2: "#FFBA66",
    grade1: "#FFC680",
    grade0: "#ffffff",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        This is what <strong className="purple">Github Calendar</strong> looks like...
      </h1>
      <GitHubCalendar
        username="KeithDsouza25"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
