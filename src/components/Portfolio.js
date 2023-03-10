import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
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
      <Container className="container text-center p-2 mt-5">
        <CardGroup className="gap-5">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>CHAT APP (web version)</Card.Title>
              <Card.Text>
                Basic chat app with firebase backend. Authentication
                (email and password verification). Styling with bootstrap and
                bootstrap-react.
              </Card.Text>
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/chat-app.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>QUIZ GAME</Card.Title>
              <Card.Text>
                Quiz game based on questions from Trivia API. Firebase backend.
                Firebase Authentication(create user, update user profile)
              </Card.Text>
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/quiz-app-hooks-api.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup className="gap-5 mt-3">
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>REACT AUTHENTICATION APP</Card.Title>
              <Card.Text>
                React app with firebase backend service like authentication
                (email and password verification). Styling with bootstrap and
                bootstrap-react.
              </Card.Text>
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/firebase-auth-app.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>GREAT QUOTES</Card.Title>
              <Card.Text>SPA wit quotes from API</Card.Text>
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/great-quotes-app.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
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
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/FOOD-ORDER-APP.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="p-3 bg-success p-2 text-white bg-opacity-75">
            <Card.Body>
              <Card.Title>WEBSITE PORTFOLIO</Card.Title>
              <Card.Text>Website that you are curently on :)</Card.Text>
              <Card.Link
                className="link-warning"
                href="https://github.com/Solarius24/website-portfolio.git"
              >
                view on GitHub
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
