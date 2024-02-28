import ReactDom from "react-dom";

const Loader = () => {
  return ReactDom.createPortal(
    <>
      <div className="loading-dots">
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  );
};

export default Loader;
