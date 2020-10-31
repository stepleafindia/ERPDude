import React,{useState}  from 'react';
import { Alert } from 'react-bootstrap';

export let timer=null;

export default function FlashAlert(props) {
    const [show, setShow] = useState(true);
    props.show?useState(true):useState(false); 

    if(timer) { clearTimeout(timer); }    
    if(props.duration){ timer=setTimeout(()=>{ setShow(false); props.onClose(); },props.duration); }   
     
    return (
      <Alert show={show} onClose={() =>{ setShow(false);  props.onClose(); if(timer) { clearTimeout(timer); } }} variant={props.data.className} dismissible>
          {props.data.heading?
          <Alert.Heading>{props.data.heading}</Alert.Heading>
          :""}
          <p>{props.data.message}</p>   
      </Alert>
    );
}