import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Container,
} from "react-bootstrap";
import bgContact from "./images/bg-contact.jpg";
import { ModalEmail } from "./UI/ModalEmail";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  console.log(window.innerWidth);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p3nh6pg",
        "template_6e923og",
        form.current,
        "LBmog3QRU1jmiQcmo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    handleShow();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgContact})`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ModalEmail show={showModal} onConfirm={handleClose} />
      <Container
        className="container-lg"
        style={{
          border: "2px solid black",
          backgroundColor: "lightgrey",
          position: "relative",
          top: "5rem",
          maxWidth: "40rem",
        }}
      >
        <Form ref={form} onSubmit={sendEmail}>
          <FormGroup className="mb-3">
            <FormLabel>Your Name</FormLabel>
            <FormControl type="text" name="user_name" required />
          </FormGroup>
          <FormGroup className="mb-3 " controlId="exampleForm.ControlInput1">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" name="user_email" required />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FormLabel>Message</FormLabel>
            <FormControl as="textarea" rows={6} name="message" required />
          </FormGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="mb-2" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
