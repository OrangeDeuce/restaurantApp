//to first import axios
import axios from "axios";

//next to create an instance of axios with some preset options assigned
//this is a separate re-usable component to be used wherever component needs Yelp API request capability
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses", //This is the route URL that we want to make a request to. Yelp docs have more info about the many different routes we can make a request to.
  headers: {
    Authorization:
      "Bearer _j_Ww2lgPDHXZipcXKZ-OhGwnDV6huWEi_tTBF4crkc7aLVKgX2CEchxCNCDnNOm1X-8UxYsA8RAqW6IFMZ3YKfC4g0jn0L_0HtCa3DDacYrlXL1p8IRqZ1BUEXGYnYx",
  },
});
