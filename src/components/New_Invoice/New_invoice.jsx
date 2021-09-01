import React from "react";

function New_invoice() {
  function getRandomAlphabet() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  const getRandomNUmber = () => Math.floor(Math.random() * 10000);

  console.log(getRandomAlphabet() + getRandomNUmber());

  return (
    <main className="invoice">
      <section className="invoice-container">
        <h1>New Invoice</h1>
        <form className="form-invoice">
          <section className="bill-container ">
            <article className=" billItems ">
              <h4 className="formHeader">Bill From</h4>
            </article>

            <article className=" billItems ">
              <div className="input-info">
                <label htmlFor="address">Street Address</label>
                <input type="text" id="address" />
              </div>
            </article>

            <article className=" billDetails">
              <div className="input-info">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>
              <div className="input-info">
                <label htmlFor="code">Post Code</label>
                <input type="text" id="code" />
              </div>
              <div className="input-info">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" />
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
                <label htmlFor="name">Client's Name</label>
                <input type="text" id="name" />
              </div>
            </article>

            {/* ClientEmail */}
            <article className=" billItems ">
              <div className="input-info">
                <label htmlFor="email">Client's Email</label>
                <input
                  placeholder="e.g email@example.com"
                  type="text"
                  id="email"
                />
              </div>
            </article>

            {/* ClientAddress */}
            <article className=" billItems ">
              <div className="input-info">
                <label htmlFor="client-add">Street Address</label>
                <input type="text" id="client-add" />
              </div>
            </article>

            {/* clientCity */}
            <article className=" billDetails">
              <div className="input-info">
                <label htmlFor="Clientcity">City</label>
                <input type="text" id="Clientcity" />
              </div>
              <div className="input-info">
                <label htmlFor="clientPost">Post Code</label>
                <input type="text" id="clientPost" />
              </div>
              <div className="input-info">
                <label htmlFor="Clientcountry">Country</label>
                <input type="text" id="Clientcountry" />
              </div>
            </article>

            {/* Date */}
            <article className=" date">
              <div className="input-info">
                <label htmlFor="Clientcity">Invoice Date</label>
                <input type="date" id="Clientcity" />
              </div>
              <div className="input-info">
                <label htmlFor="clientPost">Post Code</label>
                <select>
                  <option value="1">Net 1 Day</option>
                  <option value="7">Net 7 Day</option>
                  <option value="14">Net 14 Day</option>
                  <option value="30">Net 30 Day</option>
                </select>
              </div>
            </article>

            {/* Services */}
            <article className=" billItems ">
              <div className="input-info">
                <label htmlFor="Clientcity">Project Description</label>
                <input
                  type="text"
                  placeholder="e.g Graphic Design Service"
                  id="Clientcity"
                />
              </div>
            </article>
          </section>
          <section className="bill-container billEvents"></section>
        </form>
      </section>
    </main>
  );
}

export default New_invoice;
