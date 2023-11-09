import PropTypes from "prop-types";
import "./login.css";

export const Login = ({ property1, className, divClassName, text = "LOGIN", onClick, username, password}) => 
{
  return (
    <div
      className={`LOGIN ${property1} ${className}`}
      onClick={() => {
        onClick && onClick();

        console.log('Username:', username);
        console.log('Password:', password);
    
      }}
    >
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

Login.propTypes = {
  property1: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};
