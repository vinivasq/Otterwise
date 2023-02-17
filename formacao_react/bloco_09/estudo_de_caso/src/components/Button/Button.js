import "./Button.css";

const Button = (props) => {
  const { children, variant, isLoading, disabled, ...rest } = props;

  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant}`}
      {...rest}
    >
      {isLoading ? "carregando..." : children}
    </button>
  );
};

export default Button;
