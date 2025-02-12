import { useRouteError } from "react-router-dom";

const Error = () => {
  const errors = useRouteError();
  console.log(errors);
  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h2>{errors.status + " " + errors.statusText}</h2>
    </>
  );
};

export default Error;
