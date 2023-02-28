import Style from "../assets/style/css/style.module.css";
const Module = () => {
  return (
    <div>
      <pre>{JSON.stringify(Style)}</pre>
      <button className={`${Style.btn} ${Style["btn-plain"]}`}>
        Style Module
      </button>
    </div>
  );
};
export default Module;
