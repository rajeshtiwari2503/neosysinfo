 "use client";

import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function RequestServicePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const onValid = () => {
    document.getElementById("fs-form").submit();
  };

  return (
    <>
      <Head>
        <title>Request Service  </title>
        <meta
          name="description"
          content="Request professional service support from Saas Techify. Submit your product issue, preferred service date, and contact information."
        />
        <meta
          name="keywords"
          content="Request Service, Support, Saas Techify, Product Issue, Contact Form"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.saastechify.com/contact" />
      </Head>

      <div className="   ">
        <h1 className="text-xl font-bold mt-2 mb-3 text-primary">Request for Service</h1>

        {/* <form className="space-y-4"  action="https://formsubmit.co/services@neosysinfosystems.com"
  method="POST"  >
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            {...register("fullName", { required: "Full name is required" })}
          />

          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />

          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Phone number must be 10-15 digits",
              },
            })}
          />

          <TextField
            label="Service Type"
            variant="outlined"
            fullWidth
            error={!!errors.serviceType}
            helperText={errors.serviceType?.message}
            {...register("serviceType", { required: "Service type is required" })}
          />

          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            error={!!errors.description}
            helperText={errors.description?.message}
            {...register("description", {
              required: "Remarks is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-200"
            >
              Submit Request
            </button>
          </div>
        </form> */}
         <form
      // id="fs-form"
      className="space-y-4"
      action="https://formsubmit.co/services@neosysinfosystems.com"
      method="POST"
      // onSubmit={handleSubmit(onValid)}
    >
      {/* Optional hidden fields for FormSubmit */}
      {/* <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
        {...register("fullName", { required: "Full name is required" })}
        name="fullName"
      />

      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        type="email"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
        name="email"
      />

      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        type="tel"
        error={!!errors.phone}
        helperText={errors.phone?.message}
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10,15}$/,
            message: "Phone number must be 10-15 digits",
          },
        })}
        name="phone"
      />

      <TextField
        label="Service Type"
        variant="outlined"
        fullWidth
        error={!!errors.serviceType}
        helperText={errors.serviceType?.message}
        {...register("serviceType", {
          required: "Service type is required",
        })}
        name="serviceType"
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        error={!!errors.description}
        helperText={errors.description?.message}
        {...register("description", {
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Description must be at least 10 characters",
          },
        })}
        name="description"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-200"
        >
          Submit Request
        </button>
      </div>
    </form>
      </div>
    </>
  );
}
