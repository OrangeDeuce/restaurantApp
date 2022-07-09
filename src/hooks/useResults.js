import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("./search", {
        params: {
          limit: 46,
          term: searchTerm,
          location: "skokie",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      console.log(e);
      setErrorMessage("Man, something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("thai");
  }, []);

  return [searchApi, results, errorMessage];
};
