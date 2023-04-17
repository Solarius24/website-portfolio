import React from "react";
import { Container, Card, ListGroup, CardGroup } from "react-bootstrap";
import bgAboutMe from "./images/bg-aboutMe.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div 
      style={{
        backgroundImage: `url(${bgAboutMe})`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        overflow:"auto"
      }}
    >
      <Container>
        <Card className=" d-flex flex-row justify-content-evenly bg-transparent gx-5 p-4"
         style={{ marginTop:"80px"}}>
          <a href="https://github.com/Solarius24">
            <FontAwesomeIcon icon={faGithub} className="fa-3x" />
          </a>
          <a href="https://linkedin.com/in/pawelkarkocki">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-3x"
              color="white"
            />
          </a>
        </Card>

        <CardGroup className="gap-5">
          <Card className="bg-info rounded">
            <Card.Body>
              <Card.Text className="h5 text-left">
                I was born in Poland,moved to London UK in 2014 to countinou
                carrer as a Site Engineer/Engineering Surveyor accross UK
                construction industry. In 2022 I decided to change my carrer
                path and start education towards becoming a Front End
                Developemenr. I have a keen eye for detail and most of my
                working life has been dedicated to delivering high quality and
                cost efficient solutions to the clients. Throughout my career in
                construction, I have done some of my best work under pressure. I
                find that routine makes us complacent, and I am always looking
                for challenges that push me to give my best and to quickly come
                up with working solutions. I tend to embrace working under
                pressure because it forces me to become the best version of
                myself and act in a quick and decisive manner.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="bg-warning rounded">
            <Card.Header className="text-center fw-bold fs-4">
              I have completed courses listed below:
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-warning h5">
                CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass) The
                Net Ninja (Shaun Pelling)
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning h5">
                Modern JavaScript (Complete guide, from Novice to Ninja) The Net
                Ninja (Shaun Pelling){" "}
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning h5">
                Accelerated ES6 JavaScript Training The Net Ninja (Shaun
                Pelling){" "}
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning h5">
                JavaScript - The Complete Guide 2023 (Beginner + Advanced)
                Academind by Maximilian Schwarzmüller
              </ListGroup.Item>
              <ListGroup.Item className="bg-warning h5">
                React - The Complete Guide (incl Hooks, React Router, Redux)
                Academind by Maximilian Schwarzmüller.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
