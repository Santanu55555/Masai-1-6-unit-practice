import "./Button.css"


export const Button = ({ colorScheme, variant, size }) => {
  return <button className={`btn ${colorScheme ||"white"} ${variant || "ghost" } ${size || "md"}`}>Button</button>;
};
