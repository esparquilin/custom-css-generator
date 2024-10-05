import { useContext } from "react";
import CardStylesContext from "../../Context/card-styles-context";
import classes from "./Card.module.css";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { cardBackgroundColor } = useContext(CardStylesContext);

  return (
    <div
      style={{ backgroundColor: cardBackgroundColor }}
      className={`${classes.card} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
