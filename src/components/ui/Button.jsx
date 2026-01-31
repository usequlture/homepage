export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
  }) {
    const base =
      "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  
    const variants = {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      secondary:
        "bg-white/10 text-white border border-white/10 hover:bg-white/15",
    };
  
    return (
      <button className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }
  