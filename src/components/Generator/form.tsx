import style from "./form.module.css";
const Form = () => {
  return (
    <form>
      <label htmlFor="codes">Codes per line</label>
      <textarea id="codes" className={style.area} />
    </form>
  );
};

export default Form;
