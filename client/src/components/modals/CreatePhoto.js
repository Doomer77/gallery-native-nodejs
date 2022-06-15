import React, { useContext } from 'react'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

const CreatePhoto = ({ show, onHide }) => {
    const { photo } = useContext(Context)
    return (
        <Modal
            show={show}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Создать тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {photo.types.map((type) => (
                                <Dropdown.Item key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите вид</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {photo.kinds.map((kind) => (
                                <Dropdown.Item key={kind.id}>
                                    {kind.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        placeholder='Введите название фото'
                        className='mt-3'
                        type='text'
                    />
                    <Form.Control className='mt-3' type='file' />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant='outline-success' onClick={onHide}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreatePhoto
