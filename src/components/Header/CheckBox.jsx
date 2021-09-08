import React from "react";
import { useGlobalContext } from "../../context";

function CheckBox() {
  const { onChange, check } = useGlobalContext();
  return (
    <>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            checked={check.draft}
            onChange={(e) => onChange(e)}
            type="checkbox"
            name="draft"
            value="draft"
          />
          <span className="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span className="radio__label">Draft</span>
      </label>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            checked={check.pend}
            onChange={(e) => onChange(e)}
            type="checkbox"
            name="pend"
            value="pending"
          />
          <span className="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span className="radio__label">Pending</span>
      </label>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            checked={check.paid}
            onChange={(e) => onChange(e)}
            type="checkbox"
            name="paid"
            value="paid"
          />
          <span className="checkbox__control">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="3"
                d="M1.73 12.91l6.37 6.37L22.79 4.59"
              />
            </svg>
          </span>
        </span>
        <span className="radio__label">Paid</span>
      </label>
    </>
  );
}

export default CheckBox;
