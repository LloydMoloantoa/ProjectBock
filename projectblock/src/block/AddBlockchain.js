import emailjs from '@emailjs/browser'
import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Data from "./Data";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom'






function AddBlockchain() {

    const currentDate = new Date();
    let time = currentDate.toString();
    const [timestamp, setTimestamp] = useState('');
    const [data, setData] = useState('');
    const form = useRef();



    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let unigueId = ids.slice(0, 8);

        let a = timestamp,
            b = data;

        Data.push({ id: unigueId, timestamp: time, data: b });

        emailjs.sendForm('service_2oz1459', 'template_bvmf9ea', form.current, 'vG93VUOakG8RHD287')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log(form.current)


        history("/blockview");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <form ref={form} onSubmit={handleSubmit}>
                    <div class="d-none">
                        <input type="text" name="user_name" value={"BlockChain App"} />
                        <input type="email" name="user_email" value={"u22809695@tuks.co.za"} />
                        <input type="message" name="message" value={"A block has been added to the blockchain"} />
                    </div>
                </form>
                <Link className="d-grid gap-2" to={"/blockview"}>
                    <Button >Back</Button>
                </Link>
                <Form.Group className="nb-3" controlId="formData">
                    <Form.Control type="text" placeholder="Enter Data" required onChange={(e) => setData(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AddBlockchain;