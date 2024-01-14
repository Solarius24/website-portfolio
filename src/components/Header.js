import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ParticlesBackground from "./particles/ParticlesBackground";
import myPhoto from "./images/myPhoto.jpg";
import bgHome from "./images/bg-home.jpg";


export default function Header() {
  return (
    <div
      className=" sm-2 "
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <ParticlesBackground
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: 0,
        }}
      />
      <Card
        className="d-flex bg-dark bg-opacity-75 text-wrap "
        style={{ maxWidth: "30rem", zIndex: 1 }}
      >
        <Card.Body className="text-warning  mt-5 pt-5 pt-md-2">
          <Image
            fluid
            roundedCircle
            src={myPhoto}
            className="p-2"
          ></Image>
          <Card.Title>
            <Card.Text className="h2">Hi I'm Pawel</Card.Text>
          </Card.Title>
          <Card.Text className="h4 lh-sm" style={{fontFamily:"Gabarito"}}>
            Site Engineer/Engineering Surveyor who recently decided to convert a
            passion for web development into a new career. Currently looking for
            an intern or junior opportunity as a front end developer in the fast
            paced environment that will help me progress in the new field. See
            my website.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
