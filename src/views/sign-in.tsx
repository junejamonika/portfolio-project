import {
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ButtonDark from "../components/atoms/buttondark";
import ButtonOutline from "../components/atoms/buttonoutline";
import { guestGateway } from "../utils/gateway";
import URLS from "../configs/urls";
import { toast } from 'react-toastify';


export function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleChange = (event: any) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = async () => {
    var errors = { username: '', password: '' };
    var is_error = 0;
    if (user.username == '') {
      errors.username = "Please fill in the required field";
      is_error = 1;
    }
    if (user.password == '') {
      errors.password = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const response = await guestGateway("POST", URLS.AUTH.SIGNIN, JSON.stringify(user));
      if (response.accessToken) {
        localStorage.setItem("sm-magic", response.accessToken);
        navigate('/dashboard/messages')
      }
      if(response.message) {
        toast.error(response.message)
      }
    }
    setErrors(errors);
  }

  return (
    <>
      <Container>
        <Card className="sign-in">
          <Card.Body className="flex flex-col gap-4">
            <h4>CMS Portal</h4>
            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control className='text-field' type="text" placeholder="Your Username" name="username" onChange={(event) => handleChange(event)} />
              <Form.Control.Feedback type="invalid" className={errors.username ? 'd-block' : ''}>
                <AiOutlineExclamationCircle /> {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control className='text-field' type="text" placeholder="Your Password" name="password" onChange={(event) => handleChange(event)} />
              <Form.Control.Feedback type="invalid" className={errors.password ? 'd-block' : ''}>
                <AiOutlineExclamationCircle /> {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="mb-4">
              <Form.Check label="Remember Me" />
            </div>
            <ButtonOutline outline="outline-dark" text="Sign In" width="100%" handleClick={() => handleSubmit()} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SignIn;
