import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/Button";
import {FormGroup, FormText} from "react-bootstrap";
import AlertValidate from "./AlertValidate";

export default function FormValidate(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));


    return(

    <FormGroup className="form-control-lg">
        <FormText className='p-3'>Veuillez saisir vos informations personnelles:</FormText>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
        <input className="p-3 m-3"  {...register("example")} placeholder="Nom"/>
            {/* include validation with required or other standard HTML validation rules */}
        <input  className="p-3 m-3"{...register("name", { required: true })} placeholder="Prénom" />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>Ce champ doit ếtre rempli </span>}
        <input className="p-3 m-3" {...register('email')} type="email" placeholder="Email" />
            <Button type="submit" variant='dark' onClick={AlertValidate}/>
        </form>
    </FormGroup>
    );
}

