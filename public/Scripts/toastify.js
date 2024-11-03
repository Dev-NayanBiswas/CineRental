import { toast } from "react-toastify";

const notify = (type,msg) => toast[`${type}`](msg,{
    position: "top-center",
    autoClose:1000,
  });

export {notify}