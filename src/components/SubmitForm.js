import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const SubmitForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-4 my-12 lg:border-4  lg:rounded-xl lg:p-6">
      <h1 className="text-center mb-12 font-bold text-blue-800">
        Get In Touch For Any Kind Of Help
      </h1>
      <div className="lg:flex lg:items-center ">
        <div className="hidden w-2/4 h-2/4 md:hidden lg:block">
          <div className="lg:block lg:z-50 lg:w-2/4 lg:h-2/4 lg:bg-blue-800"></div>
          <img src="images/formImage.jpg" alt="" />
        </div>
        <div>
          <div className="md:w-3/5 md:mx-auto lg:w-full ">
            <Form onClick={submitForm} className="flex flex-col">
              <Row className="mb-3 flex flex-col">
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:place-items-center">
                  <div className="md:w-11/12">
                    <Form.Group as={Col}>
                      <Form.Control type="name" placeholder="First Name" />
                    </Form.Group>
                  </div>
                  <div className="md:w-11/12">
                    <Form.Group as={Col}>
                      <Form.Control type="name" placeholder="Last Name" />
                    </Form.Group>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:place-items-center">
                  <div className="md:w-11/12">
                    <Form.Group as={Col}>
                      <Form.Control
                        className="mt-4"
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                  </div>
                  <div className="md:w-11/12">
                    <Form.Group as={Col}>
                      <Form.Control
                        className="mt-4"
                        type="tel"
                        placeholder="Your Phone Number"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:place-items-center">
                  <div className="md:w-11/12">
                    <Form.Group>
                      <Form.Control
                        className="mt-4"
                        placeholder="Your Website"
                      />
                    </Form.Group>
                  </div>
                  <div className="md:w-11/12 ">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Select
                        className="mt-4"
                        defaultValue="Select Service"
                      >
                        <option>Select Service</option>
                        <option>UI/UX Design</option>
                        <option>E-Commerce Site</option>
                        <option>Mobile Application</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="md:w-11/12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      className="mt-4"
                      as="textarea"
                      rows={3}
                      placeholder="Your Message"
                    />
                  </Form.Group>
                </div>
              </Row>

              <Button
                className="w-1/2 mx-auto hover:scale-105 hover:transition ease-in-out duration-200 delay-150 md:w-2/6"
                variant="primary"
                type="submit"
              >
                Consult Today
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
