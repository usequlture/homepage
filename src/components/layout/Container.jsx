export function Container({ children, className = "" }) {
	return (
		<div className={`mx-auto w-full max-w-[83.3rem] px-5 ${className}`}>
			{children}
		</div>
	);
}
