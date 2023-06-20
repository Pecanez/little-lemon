import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./styles/Reservations.css";

const schema = yup.object({
    name: yup.string().required("Full name is a required field!"),
    email: yup.string().required("Email is a required field!").email("Email is not valid!"),
    phone: yup.string().required("Phone is a required field!"),
    guests: yup.number().min(1, "There must be at least 1 guest!").required("Please specify the number of guests per table!"),
    date: yup.string().required("Please select a date and time!"),
});

function Form() {
    const [_isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();

    const formSubmit = (data) => {
        // Perform any form submission logic here
        setIsSubmitSuccessful(true);
        setTimeout(() => {
            navigate('/reservations-success', { state: { formData: data } })
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Joe Blogg" name="name" id="name" {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="mail@mail.com" name="email" id="email" {...register("email")} />
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" placeholder="088 8888888" name="phone" id="phone" {...register("phone")} />
                    <span className="error-message">{errors.phone?.message}</span>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Guests</label>
                    <input type="number" placeholder="2" name="guests" id="guests" {...register("guests")} />
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" id="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <div className="field occasion">
                    <label htmlFor="occasion">Occasion <span style={{ color: "#9b9b9b" }}>(optional)</span></label>
                    <div className="options">
                        <select name="occasion" id="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <button className="reserve-btn" type="submit">Submit</button>
            </fieldset>
        </form>
    );
}

export default Form;
