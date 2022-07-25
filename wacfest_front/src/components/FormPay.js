import React from "react";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/Button";
import {FormGroup} from "react-bootstrap";

export default function FormValidate(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));


    return(

    <FormGroup className="mb-3">
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input  defaultValue="lastname" {...register("example")} placeholder="Nom"/>

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("name", { required: true })} placeholder="Prénom" />
        {/* errors will return when field validation fails  */}
        {errors.name && <span>Ce champ doit ếtre rempli </span>}
        <input {...register('email')} type="email" placeholder="Email" />

        <Button type="submit"  variant='dark'/>
    </form>
    </FormGroup>
    );
}