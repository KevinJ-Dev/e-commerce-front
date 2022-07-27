import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/Button";
import {FormGroup, FormText} from "react-bootstrap";


export default function FormValidate(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return(

    <FormGroup className="form-control-lg">
        <FormText className='p-3'>Veuillez saisir vos informations personnelles:</FormText>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
        <input className="p-3 m-3"  {...register("lastname",{ required: true })} placeholder="Nom"/>
            {/* include validation with required or other standard HTML validation rules */}
            {/* errors will return when field validation fails  */}
            {errors.lastname && <span>Ce champ doit ếtre rempli </span>}
        <input  className="p-3 m-3"{...register("name", { required: true })} placeholder="Prénom" />
            {/* errors will return when field validation fails  */}
            {errors.name && <span>Ce champ doit ếtre rempli </span>}
        <input className="p-3 m-3" {...register('email',{ required: true })} type="email" placeholder="Email" />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>Ce champ doit ếtre rempli </span>}

            <Button type="submit" variant='dark' onClick={() => alert('Succés')} >Envoyer</Button>
        </form>
    </FormGroup>
    );
}

