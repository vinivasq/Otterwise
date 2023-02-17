import "./Text.css";

const Text = (props) => {
  const { children, className, align, fontSize = "md", as = "p" } = props;
  const Component = as;

  return (
    <Component className={`font-${fontSize} ${className} align-${align}`}>
      {children}
    </Component>
  );
};

export default Text;
