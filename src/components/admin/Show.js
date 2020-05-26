import React from "react";
import { Button, Modal, Form, FormGroup, Col, Row } from "react-bootstrap";

const Show = (props) => {

    const hide = () => {
        props.handleClose();
        if (props.edit === true) props.handleCloseEdit();
    }

    const handleChange = e => {
        const { name, value } = e.target;
        props.setUserGetId({...props.data, [name]: value})
    }

    const changeData = (e) => {
        e.preventDefault();
        props.update(props.data);
        props.handleClose();
        if (props.edit === true) props.handleCloseEdit();
    }

    return (
        <Modal show={props.show} onHide={hide}>
            <Modal.Header className="header-crud">
                <Modal.Title>Thông tin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={changeData}>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="ID" />
                        </Col>
                        <Col sm="9">
                            <Form.Control plaintext readOnly defaultValue={props.data.id} />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Tên" />
                        </Col>
                        <Col sm="9">
                            <Form.Control 
                                name="name"
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.name} 
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Năm sinh" />
                        </Col>
                        <Col sm="9">
                            <Form.Control
                                name="age"
                                plaintext 
                                readOnly={props.edit ? false : true}
                                defaultValue={props.data.age}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Địa chỉ" />
                        </Col>
                        <Col sm="9">
                            <Form.Control
                                name="address"
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.address} 
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Công việc" />
                        </Col>
                        <Col sm="9">
                            <Form.Control
                                name="job"
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.job} 
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Quê quán" />
                        </Col>
                        <Col sm="9">
                            <Form.Control 
                                name="country"
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.country} 
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="SĐT" />
                        </Col>
                        <Col sm="9">
                            <Form.Control
                                name="phonenumber" 
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.phonenumber}
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Col sm="3">
                            <Form.Control plaintext readOnly defaultValue="Học lực" />
                        </Col>
                        <Col sm="9">
                            <Form.Control 
                                name="education"
                                plaintext 
                                readOnly={props.edit ? false : true} 
                                defaultValue={props.data.education} 
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {
                    props.edit ? (
                        <Button type="submit" variant="warning" onClick={changeData}>
                            Update
                        </Button>
                    ) : ""
                }
                <Button variant="dark" onClick={hide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

export default (Show);
