import axios from "axios";
import authFetch from "../axios/interceptors";
import { useEffect } from "react";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-products2");
      console.log("Response : " + resp);
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
