function Button({
  children,
  to,
  large = false,
  small = false,
  type,
  className,
}) {
  let classes = "py-1 px-2 text-[14px]";
  if (type === "category") {
    classes =
      "py-1 px-2 text-[--white] bg-[var(--btn-secondary)] hover:bg-[#222c34] text-[14px] w-min cursor-pointer";
  } else if (type === "tag") {
    classes =
      "py-1 px-2 text-[var(--text-secondary)] bg-[var(--bg-white)] hover:bg-[#222c34] hover:text-[--white] text-[14px] w-min border border-[--border-secondary] cursor-pointer";
  } else if (type === "primary") {
    classes = "btn-primary";
  }

  return <a className={classes}>{children}</a>;
}

export default Button;
