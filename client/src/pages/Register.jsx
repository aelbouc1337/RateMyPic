import React from "react";
import TextField from "@mui/material/TextField";
const Register = () => {
  return (
    <div className="w-full p-4 lg:p-48 flex items-center justify-center">
      <div className="p-4 lg:p-12 border rounded-2xl shadow-xl w-full h-full">
        <div className="flex w-full h-full flex-col gap-4 items-center">
          <h1 className="font-bold text-xl text-primary">Register</h1>
          <form className="flex flex-col gap-3" action="">
            <div className="flex items-center gap-2">
              <label htmlFor="email" className="font-semibold">
                Email :{" "}
              </label>
              <TextField id="email" label="Email" variant="outlined" />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="password" className="font-semibold">
                Email :{" "}
              </label>
              <TextField id="password" label="Email" variant="outlined" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
