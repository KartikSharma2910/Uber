import { Link } from "react-router-dom";

const FormLayout = ({
  link,
  footer,
  disabled,
  children,
  showConcent = false,
  handleSubmit,
  buttonLabel,
  handleClick,
}) => {
  const { label, to: footerTo, buttonColor } = footer || {};
  const { linkPrefix, label: linkLabel, to } = link || {};
  return (
    <div className="flex justify-between flex-col p-7 h-screen">
      <form onSubmit={handleSubmit}>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original/"
          alt="Uber Logo"
        />
        {children}
        <button
          type="submit"
          disabled={disabled}
          onClick={handleClick}
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
        >
          {buttonLabel}
        </button>
        <div className="flex items-center justify-center text-sm gap-0.5 mt-3">
          <p>{linkPrefix}</p>
          <Link to={to} className="text-blue-700 hover:underline">
            {linkLabel}
          </Link>
        </div>
      </form>
      {showConcent && (
        <p className="text-xs text-gray-500 mt-4">
          By proceeding, you agree to our{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Privacy Policy
          </a>
          . And you confirm that you are over 18 years old. You may receive
          email notifications from us and can opt out at any time.
        </p>
      )}
      <div>
        {footer && (
          <Link
            to={footerTo}
            style={{ backgroundColor: buttonColor }}
            className="flex items-center justify-center w-full text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          >
            {label}
          </Link>
        )}
      </div>
    </div>
  );
};

export default FormLayout;
