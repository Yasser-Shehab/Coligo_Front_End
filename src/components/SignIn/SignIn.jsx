import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = ({ click }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signFields, setSignFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState("");
  const { email, password } = signFields;
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignFields({ ...signFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    navigate("/dashboard");
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Sign in with your email.</h1>

          <form onSubmit={handleSubmit}>
            {formError && (
              <div className="register-error">
                <h3>{formError}</h3>
                <span onClick={closeErrorMenu}>✖</span>
              </div>
            )}
            <div className="text-field">
              <input type="email" name="email" onChange={handleChange} />
              <label className="shrink">Email</label>
            </div>
            <div className="text-field">
              <input
                type={showPass ? "text" : "password"}
                onChange={handleChange}
                name="password"
              />
              <label className="shrink">Password</label>
              <div onClick={togglePassword}>
                {showPass ? (
                  <AiFillEye className="password__icon" />
                ) : (
                  <AiFillEyeInvisible className="password__icon" />
                )}
              </div>
            </div>

            <button type="submit">Login</button>
            <div className="divider-text">
              <hr />
              <div className="divider-header">
                <p>Or continue with</p>
              </div>
            </div>
            <div className="sign-icons">
              <FcGoogle className="google__icon" />
            </div>
            <div className="sign-footer">
              <p>
                By Clicking the button above, you agree to our <span>terms of use</span> and
                <span> privacy policies</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
