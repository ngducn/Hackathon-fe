import React from "react";
import { useForm } from "react-hook-form";
import "./Donate.css";
import moment from "moment";

export default function Donate() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>What do you want to give away?</h3>
      <label>Clothes - Masks, PPE,etc</label>
      <input
        name="clothes"
        {...register("message", {
          required: "Required",
        })}
      />
      <label>Food - Instant Noodles, Rice, Vegetables, ect</label>
      <input
        name="food"
        {...register("message", {
          required: "Required",
        })}
      />
      <label>Others</label>
      <input
        name="essentials"
        {...register("message", {
          required: "Required",
        })}
      />
      <h3>Contact Information</h3>
      <label>Your Name</label>
      <input
        name="name"
        {...register("message", {
          required: "Required",
        })}
      />
      <label>Address</label>
      <input
        name="address"
        {...register("message", {
          required: "Required",
        })}
      />
      <label>Phone Number</label>
      <input
        name="number"
        {...register("message", {
          required: "Required",
        })}
      />
      <label>Date for drop-off</label>
      <input
        name="date"
        type="date"
        max={moment().format("YYYY-MM-DD")}
        {...register("message", {
          required: "Required",
        })}
      />
      <input type="submit" className="submitButton" />
    </form>
  );
}
