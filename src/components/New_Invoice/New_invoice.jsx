import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add, Delete } from "@material-ui/icons";
import { useGlobalContext } from "../../context";
import { DynamicInput } from "../../actions/invoiceAction";
import validationSchema from "../ValidationSchema";
import { initialValues } from "../ValidationSchema";
import GoBack from "../GoBack";

import { Formik, Form, Field, FieldArray } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { showInvoice } from "../../actions/headerAction";
import { Edit } from "../../actions/invoiceAction";

function New_invoice() {
  const { getWidth, isDraft, isEdit, setIsEdit } = useGlobalContext();
  const EditInvoiceDate = useSelector((state) => state.invoice.singleInvoice);

  let savedValue = null;
  if (isEdit) {
    savedValue = {
      ...EditInvoiceDate,
      createdAt: new Date(EditInvoiceDate.createdAt),
      paymentDue: new Date(EditInvoiceDate.paymentDue),
    };
  } else {
    savedValue = null;
  }

  const dispatch = useDispatch();

  const onSubmit = (values, submitProps) => {
    if (isEdit) {
      dispatch(Edit(values));
      setIsEdit(false);
      dispatch(showInvoice());
    } else {
      dispatch(DynamicInput(values, isDraft));
    }
    submitProps.resetForm({ values: "" });
  };

  return (
    <main className="invoice">
      {getWidth < 600 && (
        <div className="gobackcontainer">
          <GoBack showInvoice={showInvoice} />
        </div>
      )}
      <section className="invoice-container">
        {isEdit ? (
          <h1>
            Edit <span style={{ color: "#888EB0" }}>#</span>
            {savedValue.id}
          </h1>
        ) : (
          <h1>New Invoice</h1>
        )}

        {/* Formik doings */}
        <Formik
          onSubmit={onSubmit}
          initialValues={savedValue || initialValues}
          validationSchema={isDraft && validationSchema}
          enableReinitialize

          // this doesnt render validations when text is been typed as an input
          //validateOnChange={false}
          //the onblur validations runs when an input is beeing focused and then the tab index changes
          //validateOnBlur={false}
        >
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <Form id="new-Invoice" className="form-invoice">
              <section className="bill-container ">
                <article className=" billItems ">
                  <h4 className="formHeader">Bill From</h4>
                </article>
                <article className=" billItems ">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.senderAddress?.street &&
                          `${errors.senderAddress?.street && "label-red"}`
                        }
                        htmlFor="senderAddress.street"
                      >
                        Street Address
                      </label>
                      {errors.senderAddress?.street &&
                      touched.senderAddress?.street ? (
                        <p>{errors.senderAddress?.street}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.senderAddress?.street &&
                        `${
                          errors.senderAddress?.street ? "input-red" : "input"
                        }`
                      }
                      type="text"
                      id="senderAddress.street"
                      name="senderAddress.street"
                    />
                  </div>
                </article>

                <article className=" billDetails">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.senderAddress?.city &&
                          `${errors.senderAddress?.city && "label-red"}`
                        }
                        htmlFor="Sendercity"
                      >
                        City
                      </label>
                      {errors.senderAddress?.city &&
                      touched.senderAddress?.city ? (
                        <p>{errors.senderAddress?.city}</p>
                      ) : null}
                    </div>
                    <Field
                      autoComplete="off"
                      className={
                        touched.senderAddress?.city &&
                        `${errors.senderAddress?.city ? "input-red" : "input"}`
                      }
                      type="text"
                      name="senderAddress.city"
                      id="Sendercity"
                    />
                  </div>

                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.senderAddress?.postCode &&
                          `${errors.senderAddress?.postCode && "label-red"}`
                        }
                        htmlFor="sendcode"
                      >
                        Post Code
                      </label>
                      {errors.senderAddress?.postCode &&
                      touched.senderAddress?.postCode ? (
                        <p>{errors.senderAddress?.postCode}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.senderAddress?.postCode &&
                        `${
                          errors.senderAddress?.postCode ? "input-red" : "input"
                        }`
                      }
                      type="text"
                      name="senderAddress.postCode"
                      id="sendcode"
                    />
                  </div>

                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.senderAddress?.country &&
                          `${errors.senderAddress?.country && "label-red"}`
                        }
                        htmlFor="sendCon"
                      >
                        Country
                      </label>
                      {errors.senderAddress?.country &&
                      touched.senderAddress?.country ? (
                        <p>{errors.senderAddress?.country}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.senderAddress?.country &&
                        `${
                          errors.senderAddress?.country ? "input-red" : "input"
                        }`
                      }
                      name="senderAddress.country"
                      type="text"
                      id="sendCon"
                    />
                  </div>
                </article>
              </section>
              <section className="bill-container billTo">
                <article className=" billItems ">
                  <h4 className="formHeader">Bill To</h4>
                </article>

                {/* ClientName */}
                <article className=" billItems ">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientName &&
                          `${errors.clientName && "label-red"}`
                        }
                        htmlFor="clientName"
                      >
                        Client's Name
                      </label>
                      {errors.clientName && touched.clientName ? (
                        <p>{errors.clientName}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientName &&
                        `${errors.clientName ? "input-red" : "input"}`
                      }
                      type="text"
                      name="clientName"
                      id="clientName"
                    />
                  </div>
                </article>

                {/* ClientEmail */}
                <article className=" billItems ">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientEmail &&
                          `${errors.clientEmail && "label-red"}`
                        }
                        htmlFor="clientEmail"
                      >
                        Client's Email
                      </label>
                      {errors.clientEmail && touched.clientEmail ? (
                        <p>{errors.clientEmail}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientEmail &&
                        `${errors.clientEmail ? "input-red" : "input"}`
                      }
                      placeholder="e.g email@example.com"
                      type="text"
                      id="clientEmail"
                      name="clientEmail"
                    />
                  </div>
                </article>

                {/* ClientAddress */}
                <article className=" billItems ">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientAddress?.street &&
                          `${errors.clientAddress?.street && "label-red"}`
                        }
                        htmlFor="client-add"
                      >
                        Street Address
                      </label>
                      {errors.clientAddress?.street &&
                      touched.clientAddress?.street ? (
                        <p>{errors.clientAddress?.street}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientAddress?.street &&
                        `${
                          errors.clientAddress?.street ? "input-red" : "input"
                        }`
                      }
                      type="text"
                      name="clientAddress.street"
                      id="client-add"
                    />
                  </div>
                </article>
                {/* clientCity */}
                <article className=" billDetails">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientAddress?.city &&
                          `${errors.clientAddress?.city && "label-red"}`
                        }
                        htmlFor="clientAddress.city"
                      >
                        City
                      </label>
                      {errors.clientAddress?.city &&
                      touched.clientAddress?.city ? (
                        <p>{errors.clientAddress?.city}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientAddress?.city &&
                        `${errors.clientAddress?.city ? "input-red" : "input"}`
                      }
                      type="text"
                      name="clientAddress.city"
                      id="Clientcity"
                    />
                  </div>
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientAddress?.postCode &&
                          `${errors.clientAddress?.postCode && "label-red"}`
                        }
                        htmlFor="clientPost"
                      >
                        Post Code
                      </label>
                      {errors.clientAddress?.postCode &&
                      touched.clientAddress?.postCode ? (
                        <p>{errors.clientAddress?.postCode}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientAddress?.postCode &&
                        `${
                          errors.clientAddress?.postCode ? "input-red" : "input"
                        }`
                      }
                      type="text"
                      name="clientAddress.postCode"
                      id="clientPost"
                    />
                  </div>
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.clientAddress?.country &&
                          `${errors.clientAddress?.country && "label-red"}`
                        }
                        htmlFor="sendCon"
                      >
                        Country
                      </label>
                      {errors.clientAddress?.country &&
                      touched.clientAddress?.country ? (
                        <p>{errors.clientAddress?.country}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.clientAddress?.country &&
                        `${
                          errors.clientAddress?.country ? "input-red" : "input"
                        }`
                      }
                      type="text"
                      name="clientAddress.country"
                      id="Clientcountry"
                    />
                  </div>
                </article>
                {/* Date */}
                <article className="date">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.createdAt &&
                          `${errors.createdAt && "label-red"}`
                        }
                        htmlFor="createdAt"
                      >
                        Invoice Date
                      </label>
                      {errors.createdAt && touched.createdAt ? (
                        <p>{errors.createdAt}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.createdAt &&
                        `${errors.createdAt ? "input-red" : "input"}`
                      }
                      name="createdAt"
                    >
                      {({ form, field }) => {
                        //programticaly set values
                        const { setFieldValue } = form;
                        const { value } = field;
                        return (
                          <DatePicker
                            placeholderText="click to select a date"
                            className="picker"
                            id="createdAt"
                            selected={value}
                            onChange={(val) => setFieldValue("createdAt", val)}
                          />
                        );
                      }}
                    </Field>
                  </div>
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.paymentTerms &&
                          `${errors.paymentTerms && "label-red"}`
                        }
                        htmlFor="paymentTerms"
                      >
                        Payment Terms
                      </label>
                      {errors.paymentTerms && touched.paymentTerms ? (
                        <p>{errors.paymentTerms}</p>
                      ) : null}
                    </div>
                    <Field
                      className={
                        touched.paymentTerms &&
                        `${errors.paymentTerms ? "input-red" : "input"}`
                      }
                      as="select"
                      id="paymentTerms"
                      name="paymentTerms"
                    >
                      <option value="" label="Select a plan" />
                      <option value="1">Net 1 Day</option>
                      <option value="7">Net 7 Day</option>
                      <option value="14">Net 14 Day</option>
                      <option value="30">Net 30 Day</option>
                    </Field>
                  </div>
                </article>
                {/* Services */}
                <article className=" billItems ">
                  <div className="input-info">
                    <div className="label-info">
                      <label
                        className={
                          touched.description &&
                          `${errors.description && "label-red"}`
                        }
                        htmlFor="description"
                      >
                        Project Description
                      </label>
                      {errors.description && touched.description ? (
                        <p>{errors.description}</p>
                      ) : null}
                    </div>
                    <Field
                      type="text"
                      placeholder="e.g Graphic Design Service"
                      id="description"
                      name="description"
                      className={
                        touched.description &&
                        `${errors.description ? "input-red" : "input"}`
                      }
                    />
                  </div>
                </article>
              </section>
              <section className="bill-container billEvents">
                <p>Item List</p>
                {getWidth > 600 && (
                  <div className="itemsValueLabel">
                    <div className="labels">
                      <p>Item Name</p>
                    </div>
                    <div className="label2">
                      <div className="labels">
                        <p>Qty.</p>
                      </div>
                      <div className="labels">
                        <p>Price</p>
                      </div>
                      <div className="labels">
                        <p>Total</p>
                      </div>
                    </div>
                  </div>
                )}

                <FieldArray name="items">
                  {({ push, remove, form }) => (
                    <>
                      {form.values.items.map((item, index) => {
                        return (
                          <div key={index} className="itemsValueLabel">
                            <div className="label">
                              {getWidth <= 600 && <p>Item Name</p>}
                              <Field
                                type="text"
                                name={`items[${index}].name`}
                              />
                            </div>
                            <div className="label2">
                              <div className="label">
                                {getWidth <= 600 && <p>Qty.</p>}
                                <Field
                                  index={index}
                                  type="number"
                                  name={`items[${index}].quantity`}
                                  onChange={(e) => {
                                    handleChange(e);
                                    const total = values.items[index].price
                                      ? e.target.value *
                                        values.items[index].price
                                      : 0;
                                    setFieldValue(
                                      `items[${index}].total`,
                                      total
                                    );
                                  }}
                                />
                              </div>
                              <div className="label">
                                {getWidth <= 600 && <p>Price</p>}
                                <Field
                                  index={index}
                                  type="number"
                                  name={`items[${index}].price`}
                                  onChange={(e) => {
                                    handleChange(e);
                                    const total = values.items[index].quantity
                                      ? e.target.value *
                                        values.items[index].quantity
                                      : 0;
                                    setFieldValue(
                                      `items[${index}].total`,
                                      total
                                    );
                                  }}
                                />
                              </div>
                              <div className=" label ">
                                {getWidth <= 600 && <p>Total</p>}
                                <Field
                                  index={index}
                                  disabled
                                  style={{ color: "#888eb0" }}
                                  type="text"
                                  name={`items[${index}].total`}
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="dustbin "
                              >
                                <Delete className="dakFont" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      <button
                        onClick={() =>
                          push({
                            name: "",
                            quantity: "",
                            price: "",
                            total: "",
                          })
                        }
                        type="button"
                        className="btn btn-add"
                      >
                        <Add className="matAdd" />
                        Add New Item
                      </button>

                      {/* error fields */}
                      <section className="errors">
                        {touched.items && errors.items && (
                          <p>- An item must be added</p>
                        )}
                      </section>
                    </>
                  )}
                </FieldArray>
              </section>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
}

export default New_invoice;
