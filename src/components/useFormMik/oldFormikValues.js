import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//formik

const initialValues = {
  clientName: "",
  clientEmail: "",
  description: "",
};

const onSubmit = (values) => console.log(values);

const validate = (values) => {
  let errors = {};

  if (!values.clientName) {
    errors.clientName = "can't be empty";
  }

  if (!values.clientEmail) {
    errors.clientEmail = "cant't be empty";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.clientEmail)
  ) {
    errors.clientEmail = "Invalid email address";
  }

  if (!values.description) {
    errors.description = "can't be empty";
  }
  return errors;
};

function oldFormikValues() {
  return (
    <form onSubmit={formik.handleSubmit}>
      <article className=" billItems ">
        <div className="input-info">
          <div className="label-info">
            <label
              className={
                formik.touched.clientName &&
                `${formik.errors.clientName && "label-red"}`
              }
              htmlFor="clientName"
            >
              Client's Name
            </label>
            {formik.touched.clientName && formik.errors.clientName && (
              <p>{formik.errors.clientName}</p>
            )}
          </div>
          <input
            className={
              formik.touched.clientName &&
              `${formik.errors.clientName ? "input-red" : "input"}`
            }
            type="text"
            name="clientName"
            id="clientName"
            value={formik.values.clientName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </article>
      {/* ClientEmail */}
      <article className=" billItems ">
        <div className="input-info">
          <div className="label-info">
            <label
              className={
                formik.touched.clientEmail &&
                `${formik.errors.clientEmail && "label-red"}`
              }
              htmlFor="clientEmail"
            >
              Client's Email
            </label>
            {formik.touched.clientEmail && formik.errors.clientEmail && (
              <p>{formik.errors.clientEmail}</p>
            )}
          </div>
          <input
            className={
              formik.touched.clientEmail &&
              `${formik.errors.clientEmail ? "input-red" : "input"}`
            }
            placeholder="e.g email@example.com"
            type="text"
            id="clientEmail"
            name="clientEmail"
            value={formik.values.clientEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </article>
      {/* Services */}
      <article className=" billItems ">
        <div className="input-info">
          <div className="label-info">
            <label
              className={
                formik.touched.description &&
                `${formik.errors.description && "label-red"}`
              }
              htmlFor="description"
            >
              Project Description
            </label>
            {formik.touched.description && formik.errors.description && (
              <p>{formik.errors.description}</p>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g Graphic Design Service"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            className={
              formik.touched.clientEmail &&
              `${formik.errors.clientEmail ? "input-red" : "input"}`
            }
          />
        </div>
      </article>
    </form>
  );
}

export default oldFormikValues;
