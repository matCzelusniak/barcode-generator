"use client";
import style from "./form.module.css";
import Code128 from "./code128";

import { useState } from "react";
const Form = () => {
  const [codes, setCodes] = useState("");
  return (
    <div>
      <label htmlFor="codes">Codes per line</label>
      <textarea
        id="codes"
        className={style.area}
        value={codes}
        onChange={(e) => setCodes(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(codes);
        }}
      >
        Generate PDF with Code 128 list - hardcoded size 40x20mm
      </button>
      <Code128 data="test" />
    </div>
  );
};

export default Form;
