import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return function close() {
      el.remove();
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
