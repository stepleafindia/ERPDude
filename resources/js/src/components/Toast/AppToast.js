import React,{useState}  from 'react';
import { Toast } from 'react-bootstrap';
import './app-toast.css';

export default function AppToast(props) {

    const [show, setShow] = useState(true);
    props.show?useState(true):useState(false);   
    let header="";  
    let style=props.style?props.style:{}; 
    if(props.data.type==0){
        style.backgroundColor='#ff5b4f';
        style.color='#fff';
        header=(
        <>
        <span className="text-danger mx-1"><i className="fas fa-exclamation-circle"></i></span>
        <strong className="mr-auto text-danger">{props.data.header}</strong>
        </>
        )
    }else if(props.data.type==1){
        style.backgroundColor='#4CAF50';
        style.color='#fff';
        header=(
        <>
        <span className="text-success mx-1"><i className="fas fa-check-circle"></i></span>
        <strong className="mr-auto text-success">{props.data.header}</strong>
        </>
        )
    }
     
    return (
    <Toast className="app-toast" style={style} onClose={() => { props.onClose() } } show={props.show} delay={props.duration?props.duration:3000} autohide>
        <Toast.Header>{header}</Toast.Header>
        <Toast.Body>{props.data.message}</Toast.Body>
    </Toast>
    );
}