import React from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import bgPortfolio from "./images/bg-portfolio.jpg";

export default function Portfolio() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgPortfolio})`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container
        className="container text-center p-2"
        style={{ marginTop: "80px" }}
      >
        <CardGroup className="gap-5">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>
                MANAGEMENT SYSTEM FOR CONSTRUCTION TEAMS (React, Redux Toolkit,
                TypeScript, MERN stack)
              </Card.Title>
              <Card.Text>
                Web aplication to manage site paperwork on construction site
                (inspection forms, quality checksheets, task, etc..) State
                management with Redux Toolkit. API with Express. Data base -
                MongoDB Atlas.
              </Card.Text>
            </Card.Body>
            <div>
              <Button
                className="m-3"
                href="          https://field-view-b78b4.web.app"
              >
                DEPLOYED APP
              </Button>

              <Button
                className="m-3"
                href="https://github.com/Solarius24/Management-System-For-Construction-Teams.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>
                CODE BOOK (JavaScript Playground, Redux, TypeScript)
              </Card.Title>
              <Card.Text>
                JavaScript playground to write and run code. State management
                with Redux. Bundling with esbuild, backend and authentication -
                Firebase.
              </Card.Text>
            </Card.Body>
            <div>
              <Button className="m-3" href="https://code-book-7ca65.web.app/">
                DEPLOYED APP
              </Button>

              <Button
                className="m-3"
                href="https://github.com/Solarius24/code-book-firebase-version.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>QUIZ GAME</Card.Title>
              <Card.Text>
                Quiz game app (web and mobile version) based on questions from
                Trivia API. Firebase backend (users data and scores data).
                Firebase Authentication
              </Card.Text>
            </Card.Body>
            <div>
              <Button className="m-3" href="https://quiz-app-33a69.web.app/">
                DEPLOYED APP
              </Button>

              <Button
                className="m-3"
                href="https://github.com/Solarius24/quiz-app-hooks-api.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>
        </CardGroup>

        <CardGroup className="gap-5 mt-3">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>PROJECT MANAGEMENT SYSTEM</Card.Title>
              <Card.Text>
                Web and mobile version app to create and manage projects, assign
                task to register users and add comments. Firebase backend(email
                and password authentication, firebase database, storage)
              </Card.Text>
            </Card.Body>
            <div>
              <Button
                className="m-3"
                href="https://project-management-bff82.firebaseapp.com"
              >
                DEPLOYED APP
              </Button>

              <Button
                className="m-3"
                href="https://github.com/Solarius24/project-management-app.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>PHOTO ALBUM (REDUX + RTK) </Card.Title>
              <Card.Text>
                Photo album app with jason-server as a local backend and data
                from Faker. All state menagement build with Redux and Redux
                Toolkit. Styling with Tailwindcss.
              </Card.Text>
            </Card.Body>

            <div>
              <Button
                className="m-3"
                href="https://github.com/Solarius24/photo-album-redux.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>ONLINE SHOP WEBSITE (TypeScript)</Card.Title>
              <Card.Text>
                Online shop website in TypeScript. Styling with bootstrap and
                bootstrap-react.
              </Card.Text>
            </Card.Body>
            <div>
              <Button className="m-3" href="https://online-shop-7166f.web.app/">
                DEPLOYED APP
              </Button>

              <Button
                className="m-3"
                href="https://github.com/Solarius24/shopping-cart.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>
        </CardGroup>

        <CardGroup className="gap-5 mt-3">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>FOOD ORDER APP</Card.Title>
              <Card.Text>
                Restaurant Website with option to add food to the card and send
                order
              </Card.Text>
            </Card.Body>
            <div>
              <Button
                className="m-3"
                href="https://github.com/Solarius24/FOOD-ORDER-APP.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>CHAT APP</Card.Title>
              <Card.Text>
                Basic chat app (web version) with firebase backend.
                Authentication (email and password verification). Styling with
                bootstrap and bootstrap-react.
              </Card.Text>
            </Card.Body>

            <div>
              <Button
                className="m-3"
                href="https://online-chat-dbb37.firebaseapp.com/"
              >
                DEPLOYED APP
              </Button>
              <Button
                className="m-3"
                href="https://github.com/Solarius24/chat-app.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>
        </CardGroup>
        <CardGroup className="gap-5 mt-3">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>WEBSITE PORTFOLIO</Card.Title>
              <Card.Text>Website that you are curently on :)</Card.Text>
            </Card.Body>
            <div>
              <Button
                className="m-3"
                href="https://github.com/Solarius24/website-portfolio.git"
              >
                VIEW ON GITHUB
              </Button>
            </div>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
