import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiFillCloseCircle, AiOutlineExclamationCircle } from "react-icons/ai";
import { authGateway, guestGateway } from "../../utils/gateway";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URLS from "../../configs/urls";
import ButtonDark from "../../components/atoms/buttondark";
import { useSearchParams } from "react-router-dom";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import ButtonSimple from "../../components/atoms/buttonsimple";

const Work = () => {
  const navigate = useNavigate();
  const [work, setWork] = useState({
    name: "",
    type: "",
    title: "",
    accomplishments: [""],
    tags: [""],
    images: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    type: "",
    title: "",
    accomplishments: "",
    tags: "",
    images: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [previewImgs, setPreviewImgs] = useState<string[]>([]);
  const [dltImages, setDltImages] = useState<any[]>([]);

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      getWork(id);
    }
  }, [id]);

  const getWork = async (id: string) => {
    const response = await authGateway("GET", URLS.WORK.WORK + "/" + id);
    if (response.success) {
      setWork(response.data);
      setPreviewImgs(response.data.images);
    }
  };

  const handleChange = (event: any) => {
    setWork({ ...work, [event.target.name]: event.target.value });
  };

  const handleImages = (event: any) => {
    var files = event.target.files;
    var filesArr = [];
    var previewArr = [];
    for (var i = 0; i < files.length; i++) {
      const objectUrl = URL.createObjectURL(files[i]);
      previewArr.push(objectUrl);
      filesArr.push(files[i]);
    }
    setPreviewImgs(previewArr);
    setDltImages(work.images);
    setWork({ ...work, [event.target.name]: filesArr });
  };

  const tiggerImageField = () => {
    document.getElementById("image")?.click();
  };

  const handleArrayInput = (event: any, index: number) => {
    if (event.target.name == "accomplishments") {
      work.accomplishments[index] = event.target.value;
      setWork({ ...work, accomplishments: [...work.accomplishments] });
    } else if (event.target.name == "tags") {
      work.tags[index] = event.target.value;
      setWork({ ...work, tags: [...work.tags] });
    }
  };

  const addArrayInput = (name: string) => {
    if (name == "accomplishments") {
      work.accomplishments.push("");
      setWork({ ...work, accomplishments: [...work.accomplishments] });
    } else if (name == "tags") {
      work.tags.push("");
      setWork({ ...work, tags: [...work.tags] });
    }
  };

  const deleteArrayInput = (index: number, name: string) => {
    if (name == "accomplishments") {
      work.accomplishments.splice(index, 1);
      setWork({ ...work, accomplishments: work.accomplishments });
    } else if (name == "tags") {
      work.tags.splice(index, 1);
      setWork({ ...work, tags: work.tags });
    } else if ((name = "images")) {
      if(typeof work.images[index] == "string") {
        const img = work.images[index];
        setDltImages([...dltImages, img]);
      }
      previewImgs.splice(index, 1);
      setWork({ ...work, images: work.images });
      setPreviewImgs(previewImgs);
    }
  };

  const handleSubmit = async () => {
    var errors = {
      name: "",
      type: "",
      title: "",
      accomplishments: "",
      tags: "",
      images: "",
    };
    var is_error = 0;
    if (work.name == "") {
      errors.name = "Please fill in the required field";
      is_error = 1;
    }
    if (work.type == "") {
      errors.type = "Please fill in the required field";
      is_error = 1;
    }
    if (work.title == "") {
      errors.title = "Please fill in the required field";
      is_error = 1;
    }
    if (work.accomplishments.length == 0 || work.accomplishments.some(val => val == '')) {
      errors.accomplishments = "Please fill in the required field";
      is_error = 1;
    }
    if (work.tags.length == 0 || work.tags.some(val => val == "")) {
      errors.tags = "Please fill in the required field";
      is_error = 1;
    }
    if (work.images.length == 0) {
      errors.images = "Please select at least one image";
      is_error = 1;
    }
    if (!is_error) {
      const url = `${URLS.WORK.WORK}${id ? "/" + id : ""}`;
      const formData = new FormData();
      formData.append("name", work.name);
      formData.append("type", work.type);
      formData.append("title", work.title);
      formData.append("accomplishments", JSON.stringify(work.accomplishments));
      formData.append("tags", JSON.stringify(work.tags));
      formData.append("dltImages", JSON.stringify(dltImages));
      work.images.forEach((image:any) => {
        if (typeof image != "string") {
          formData.append("images", image);
        }
      });
      
      const method = id ? "PUT" : "POST";
      const response = await authGateway(method, url, formData, true);
      if (response.success) {
        navigate("/dashboard/work-list");
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">{id ? "Edit " : "Add "}Work</h5>
      </div>
      <Form>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Project Name*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="name"
            onChange={(event) => handleChange(event)}
            defaultValue={work.name}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.name ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Type*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="type"
            onChange={(event) => handleChange(event)}
            defaultValue={work.type}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.type ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.type}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Title*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="title"
            onChange={(event) => handleChange(event)}
            defaultValue={work.title}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.title ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
              <div className="d-flex justify-content-between mb-2">
                <Form.Label>Accomplishments</Form.Label>
                <GrAddCircle
                  className="align-self-center"
                  onClick={() => addArrayInput("accomplishments")}
                />
              </div>
              {work.accomplishments.map((accomplishment, index) => {
                return (
                  <div className="d-flex">
                    <Form.Control
                      className="text-field"
                      type="text"
                      name="accomplishments"
                      onBlur={(event) => handleArrayInput(event, index)}
                      defaultValue={accomplishment}
                    />
                    <GrSubtractCircle
                      className="align-self-center"
                      onClick={() => deleteArrayInput(index, "accomplishments")}
                    />
                  </div>
                );
              })}
              <Form.Control.Feedback
                type="invalid"
                className={errors.accomplishments ? "d-block" : ""}
              >
                <AiOutlineExclamationCircle /> {errors.accomplishments}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
              <div className="d-flex justify-content-between mb-2">
                <Form.Label>Tags</Form.Label>
                <GrAddCircle
                  className="align-self-center"
                  onClick={() => addArrayInput("tags")}
                />
              </div>
              {work.tags.map((tag, index) => {
                return (
                  <div className="d-flex">
                    <Form.Control
                      className="text-field"
                      type="text"
                      name="tags"
                      onBlur={(event) => handleArrayInput(event, index)}
                      defaultValue={tag}
                    />
                    <GrSubtractCircle
                      className="align-self-center"
                      onClick={() => deleteArrayInput(index, "tags")}
                    />
                  </div>
                );
              })}
              <Form.Control.Feedback
                type="invalid"
                className={errors.tags ? "d-block" : ""}
              >
                <AiOutlineExclamationCircle /> {errors.tags}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 d-none">
              <Form.Control
                type="file"
                name="images"
                multiple={true}
                onChange={(e) => handleImages(e)}
                id="image"
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="mt-4 mb-4">
          {previewImgs &&
            previewImgs.map((img, index) => {
              return (
                <div className="preview-images">
                  <img src={img} height="50" width="100" />
                  <AiFillCloseCircle
                    className="close"
                    onClick={() => {
                      deleteArrayInput(index, "images");
                    }}
                  />
                </div>
              );
            })}
          <ButtonSimple
            text={`${previewImgs.length ? "Change" : "Add"} Images`}
            handleClick={() => tiggerImageField()}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.images ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.images}
          </Form.Control.Feedback>
        </div>
        <ButtonDark width="150px" text="Submit" handleClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default Work;
