// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Add, Delete, FormatLineSpacing } from "@material-ui/icons";
// import { useGlobalContext } from "../../context";
// import { DynamicInput } from "../../actions/invoiceAction";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// //formik functions
// const onSubmit = (values) => console.log(values);

// //a validation schemal object
// const validationSchema = () =>
//   Yup.object({
//     clientName: Yup.string().required("can't be empty!"),
//     clientEmail: Yup.string()
//       .email("Invalid email address!")
//       .required("can't be empty"),
//     description: Yup.string().required("can't be empty!"),
//   });

// function New_invoice() {
//   const { getRandomAlphabet, getWidth } = useGlobalContext();
//   const inputField = useSelector((state) => state.invoice.FormsValue);
//   const dispatch = useDispatch();

//   //formik
//   const formik = useFormik({
//     //using es6 syntax for objects
//     initialValues: {
//       clientName: "",
//       clientEmail: "",
//       description: "",
//       id: getRandomAlphabet(),
//       senderAddress: {
//         street: "",
//         city: "",
//         postCode: "",
//         country: "",
//       },
//       clientAddress: {},
//     },

//     onSubmit,
//     validationSchema,
//   });

//   const a = { ...formik.getFieldProps("clientName") };
//   console.log(a, a.value);

//   return (
//     <main className="invoice">
//       <section className="invoice-container">
//         <h1>New Invoice</h1>
//         <form onSubmit={formik.handleSubmit} className="form-invoice">
//           <section className="bill-container ">
//             <article className=" billItems ">
//               <h4 className="formHeader">Bill From</h4>
//             </article>

//             <article className=" billItems ">
//               <div className="input-info">
//                 <div className="label-info">
//                   <label htmlFor="street">Street Address</label>
//                 </div>
//                 <input type="text" id="clientName" />
//               </div>
//             </article>

//             <article className=" billDetails">
//               <div className="input-info">
//                 <div className="label-info">
//                   <label htmlFor="Sendercity">City</label>
//                 </div>
//                 <input type="text" name="Sendercity" id="Sendercity" />
//               </div>
//               <div className="input-info">
//                 <label htmlFor="code">Post Code</label>
//                 <input type="text" id="code" />
//               </div>
//               <div className="input-info">
//                 <label htmlFor="country">Country</label>
//                 <input type="text" id="country" />
//               </div>
//             </article>
//           </section>

//           <section className="bill-container billTo">
//             <article className=" billItems ">
//               <h4 className="formHeader">Bill To</h4>
//             </article>

//             {/* ClientName */}
//             <article className=" billItems ">
//               <div className="input-info">
//                 <div className="label-info">
//                   <label
//                     className={
//                       formik.touched.clientName &&
//                       `${formik.errors.clientName && "label-red"}`
//                     }
//                     htmlFor="clientName"
//                   >
//                     Client's Name
//                   </label>
//                   {formik.touched.clientName && formik.errors.clientName && (
//                     <p>{formik.errors.clientName}</p>
//                   )}
//                 </div>
//                 <input
//                   className={
//                     formik.touched.clientName &&
//                     `${formik.errors.clientName ? "input-red" : "input"}`
//                   }
//                   type="text"
//                   name="clientName"
//                   id="clientName"
//                   {...formik.getFieldProps("clientName")}
//                 />
//               </div>
//             </article>

//             {/* ClientEmail */}
//             <article className=" billItems ">
//               <div className="input-info">
//                 <div className="label-info">
//                   <label
//                     className={
//                       formik.touched.clientEmail &&
//                       `${formik.errors.clientEmail && "label-red"}`
//                     }
//                     htmlFor="clientEmail"
//                   >
//                     Client's Email
//                   </label>
//                   {formik.touched.clientEmail && formik.errors.clientEmail && (
//                     <p>{formik.errors.clientEmail}</p>
//                   )}
//                 </div>
//                 <input
//                   className={
//                     formik.touched.clientEmail &&
//                     `${formik.errors.clientEmail ? "input-red" : "input"}`
//                   }
//                   placeholder="e.g email@example.com"
//                   type="text"
//                   id="clientEmail"
//                   name="clientEmail"
//                   {...formik.getFieldProps("clientEmail")}
//                 />
//               </div>
//             </article>

//             {/* ClientAddress */}
//             <article className=" billItems ">
//               <div className="input-info">
//                 <label htmlFor="client-add">Street Address</label>
//                 <input type="text" id="client-add" />
//               </div>
//             </article>

//             {/* clientCity */}
//             <article className=" billDetails">
//               <div className="input-info">
//                 <label htmlFor="Clientcity">City</label>
//                 <input type="text" id="Clientcity" />
//               </div>
//               <div className="input-info">
//                 <label htmlFor="clientPost">Post Code</label>
//                 <input type="text" id="clientPost" />
//               </div>
//               <div className="input-info">
//                 <label htmlFor="Clientcountry">Country</label>
//                 <input type="text" id="Clientcountry" />
//               </div>
//             </article>

//             {/* Date */}
//             <article className="date">
//               <div className="input-info">
//                 <label htmlFor="currentDate">Invoice Date</label>
//                 <div style={{ position: "relative", width: "100%" }}>
//                   <input
//                     style={{ width: "100%", height: "100%" }}
//                     type="date"
//                     id="currentDate"
//                   />
//                 </div>
//               </div>
//               <div className="input-info">
//                 <label htmlFor="clientPost">Payment Terms</label>
//                 <select>
//                   <option value="1">Net 1 Day</option>
//                   <option value="7">Net 7 Day</option>
//                   <option value="14">Net 14 Day</option>
//                   <option value="30">Net 30 Day</option>
//                 </select>
//               </div>
//             </article>

//             {/* Services */}
//             <article className=" billItems ">
//               <div className="input-info">
//                 <div className="label-info">
//                   <label
//                     className={
//                       formik.touched.description &&
//                       `${formik.errors.description && "label-red"}`
//                     }
//                     htmlFor="description"
//                   >
//                     Project Description
//                   </label>
//                   {formik.touched.description && formik.errors.description && (
//                     <p>{formik.errors.description}</p>
//                   )}
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="e.g Graphic Design Service"
//                   id="description"
//                   name="description"
//                   {...formik.getFieldProps("description")}
//                   className={
//                     formik.touched.description &&
//                     `${formik.errors.description ? "input-red" : "input"}`
//                   }
//                 />
//               </div>
//             </article>
//           </section>
//           <section className="bill-container billEvents">
//             <p>Item List</p>
//             {getWidth > 600 && (
//               <div className="itemsValueLabel">
//                 <div className="labels">
//                   <p>Item Name</p>
//                 </div>
//                 <div className="label2">
//                   <div className="labels">
//                     <p>Qty.</p>
//                   </div>
//                   <div className="labels">
//                     <p>Price</p>
//                   </div>
//                   <div className="labels">
//                     <p>Total</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* {fields.map((item, index) => {
//               return (
//                 <div key={fields.id} className="itemsValueLabel">
//                   <div className="label">
//                     {getWidth <= 600 && <p>Item Name</p>}
//                     <input type="text" name="ItemName" />
//                   </div>
//                   <div className="label2">
//                     <div className="label">
//                       {getWidth <= 600 && <p>Qty.</p>}
//                       <input type="text" name="Qty" />
//                     </div>
//                     <div className="label">
//                       {getWidth <= 600 && <p>Price</p>}
//                       <input type="text" name="Price" />
//                     </div>
//                     <div className=" label ">
//                       {getWidth <= 600 && <p>Total</p>}
//                       <h4 style={{ color: "#888eb0" }}>09</h4>
//                     </div>
//                     <button className="dustbin ">
//                       <Delete className="dakFont" />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })} */}

//             <button className="btn btn-add">
//               <Add className="matAdd" />
//               Add New Item
//             </button>
//             {/* <section className="errors">
//               <p>- All fields must be added</p>
//               <p>- An item must be added</p>
//             </section> */}
//           </section>
//         </form>
//       </section>
//     </main>
//   );
// }

// export default New_invoice;
