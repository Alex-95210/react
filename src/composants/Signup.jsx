import React, { useRef } from "react"
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const mdpRef = useRef()
    const mdpConfirmRef = useRef()
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Inscription</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Adresse mail</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="motDePasse">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={mdpRef} required/>
                        </Form.Group>
                        <Form.Group id="motDePasseConfirmation">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" ref={mdpConfirmRef} required/>
                        </Form.Group>
                        <Form.Group>
                            <Button className="w-100" type="submit">
                                Valider
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className = "w-120 text-center mt-4">
                cliquez ici si vous avez déjà un compte
            </div>
        </div>
    )
}