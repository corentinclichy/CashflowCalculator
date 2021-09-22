import axios from "axios";

export const registerUser = () => {
  axios
    .post("http://localhost:1337/auth/local/register", {
      username: "",
      email: "johndoe@test.com",
      password: "Password",
      firstname: "John",
      lastname: "Doe",
    })
    .then((response) => {
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    })
    .catch((error) => {
      console.log("An error occurred:", error.response);
    });
};
