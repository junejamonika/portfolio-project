import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { authGateway, guestGateway } from "../../utils/gateway";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URLS from "../../configs/urls";
import ButtonDark from "../../components/atoms/buttondark";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const About = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    const response = await guestGateway("GET", URLS.ABOUT.ABOUT_ME);
    if (response.success) {
      setDescription(response.data.description);
    }
  };

  const handleSubmit = async () => {
    var is_error = false;
    if (description == "") {
     is_error = true
    }
    if (!is_error) {
      const url = URLS.ABOUT.ABOUT_ME;
      const response = await authGateway('PUT', url, JSON.stringify({description: description}));
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
    setError(is_error);
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">About Me</h5>
      </div>
      <Form>
        <Form.Group className="mb-5 mt-4" controlId="formBasicEmail">
          <Form.Label className="mb-3">Description*</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
          />
          <Form.Control.Feedback
            type="invalid"
            className={error ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> "This field is required"
          </Form.Control.Feedback>
        </Form.Group>
        <ButtonDark width="150px" text="Submit" handleClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default About;
