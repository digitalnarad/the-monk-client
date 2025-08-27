import React, { useState, useEffect } from "react";
import { cn } from "../../utils.js/helper";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";
import "../../assets/css/component/input.css";

// Your existing Input component - unchanged
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

// Fixed GalleryInput - resolves label overlap issue
const GalleryInput = React.forwardRef(
  ({ className, label, error, icon, value, type, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);

    // Check for value on every render and value prop change
    useEffect(() => {
      const checkValue = () => {
        // Check both prop value and actual input value
        const inputValue = ref?.current?.value || value || "";
        setHasValue(inputValue.length > 0);
      };

      checkValue();

      // Multiple checks for autofill detection
      const timeouts = [
        setTimeout(checkValue, 50),
        setTimeout(checkValue, 200),
        setTimeout(checkValue, 500),
        setTimeout(checkValue, 1000),
      ];

      return () => timeouts.forEach(clearTimeout);
    }, [value, ref]);

    // Additional check on input events
    const handleInputChange = (e) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const handleInputBlur = (e) => {
      setFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleInputFocus = (e) => {
      setFocused(true);
      // Double-check value on focus
      setHasValue(e.target.value.length > 0);
      props.onFocus?.(e);
    };

    // Force label to show if we have any value
    const shouldShowLabel = focused || hasValue || (value && value.length > 0);

    return (
      <div className={cn("space-y-1", className)}>
        <div className="relative">
          {/* Floating Label - Fixed positioning logic */}
          <div
            className={cn(
              "absolute left-0 text-xs font-medium tracking-wide transition-all duration-300 uppercase text-primary ",
              shouldShowLabel
                ? "opacity-100 translate-y-[-20px]"
                : "opacity-0 translate-y-[-10px]"
            )}
          >
            {label}
          </div>

          <div className="relative">
            {icon && (
              <div
                className={cn(
                  "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10 transition-colors duration-300",
                  focused ? "text-primary" : "text-muted-foreground"
                )}
              >
                {icon}
              </div>
            )}

            <input
              ref={ref}
              value={value}
              {...props}
              type={
                type === "password" && !visiblePassword ? "password" : "text"
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              className={cn(
                "w-full h-10 bg-transparent border-0 outline-0 text-base text-foreground placeholder-transparent border-b border-primary transition-all duration-300 autofill-transparent",
                icon ? "pl-10" : "pl-0",
                type === "password" ? "pr-10" : "pr-0",
                focused && "border-primary"
              )}
              placeholder={label}
            />

            {type === "password" && (
              <Button
                variant="ghost"
                type="button"
                size="icon"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300"
                onClick={() => setVisiblePassword(!visiblePassword)}
              >
                {visiblePassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            )}

            {/* Floating Placeholder - Only show when NO value */}
            {!shouldShowLabel && (
              <div
                className={cn(
                  "absolute top-1/2 transform -translate-y-1/2 text-base text-muted-foreground pointer-events-none transition-all duration-300",
                  icon ? "left-10" : "left-0"
                )}
              >
                {label}
              </div>
            )}

            {/* Underline Animation */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500",
                focused ? "w-full" : "w-0"
              )}
            />
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <li className="text-accent-foreground text-xs mt-0 text-left P-0 M-0">
            {error}
          </li>
        )}
      </div>
    );
  }
);

GalleryInput.displayName = "GalleryInput";

export { Input, GalleryInput };
