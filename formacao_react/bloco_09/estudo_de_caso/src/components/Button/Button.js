import "./Button.css";

const Button = (props) => {
  const { children, variant, colorScheme, isLoading, disabled, ...rest } = props;

  return (
    <button
      disabled={disabled || isLoading}
      className={`button button__${variant} button__${variant}-${colorScheme}`}
      {...rest}
    >
      {isLoading ? "carregando..." : children}
    </button>
  );
};

export default Button;
