import Icon from "@/app/ui/icon/icon";
import Styles from "./button.module.scss";
import classNames from "classnames";

interface Props {
  children?: React.ReactNode;
  shape?: "outlined" | "filled";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "accent";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  iconSrc?: string;
  iconPosition?: "left" | "right";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}
export default function Button({
  type = "button",
  onClick,
  borderRadius = "md",
  shape = "filled",
  variant = "primary",
  children,
  className,
  iconSrc,
  iconPosition = "right",
  disabled = false,
  loading = false,
  ...props
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        Styles.Button,
        {
          "rounded-md": borderRadius === "md",
          "rounded-sm": borderRadius === "sm",
          "rounded-lg": borderRadius === "lg",
          "rounded-xl": borderRadius === "xl",
          "rounded-2xl": borderRadius === "2xl",
          "rounded-full": borderRadius === "full",
          "rounded-none": borderRadius === "none",
        },
        {
          [Styles["Button--filledPrimary"]]:
            variant === "primary" && shape === "filled",
          [Styles["Button--filledSecondary"]]:
            variant === "secondary" && shape === "filled",
          [Styles["Button--outlinedPrimary"]]:
            variant === "primary" && shape === "outlined",
          [Styles["Button--outlinedSecondary"]]:
            variant === "secondary" && shape === "outlined",
          [Styles["Button--filledDesabled"]]: disabled && shape === "filled",
          [Styles["Button--outlinedDesabled"]]:
            disabled && shape === "outlined",
          //   "text-sm": props.size === "small",
          //   "text-base": props.size === "medium",
          //   "text-lg": props.size === "large",
        },
        className
      )}
    >
      <div>
        {iconSrc && iconPosition === "left" && (
          <Icon src={iconSrc} className={classNames({ "mr-2": !!children })} />
        )}
        {children}
        {iconSrc && iconPosition === "right" && (
          <Icon src={iconSrc} className={classNames({ "mr-2": !!children })} />
        )}
        {loading && (
          <span className="ml-2 animate-spin">🔄</span> // Replace with a spinner icon
        )}
      </div>
    </button>
  );
}
