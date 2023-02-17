import "./Text.css";

const Text = (props) => {
  const { children, className, fontSize = "md", as = "p" } = props;
  const Component = as;

  return (
    <Component className={`font-${fontSize} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
