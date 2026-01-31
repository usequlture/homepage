"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function AOSAnimate({
	children,
	animation = "fade-up",
	duration = "0.6s",
	delay = "0s",
	easing = "ease-out",
	threshold = 0.2,
	className = "",
}) {
	const id = useId().replace(/:/g, "");
	const name = `aos-${animation}-${id}`;
	const ref = useRef(null);
	const [active, setActive] = useState(false);

	const { from, to } = animations[animation] || animations["fade-up"];

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setActive(false); // reset
					requestAnimationFrame(() => setActive(true)); // retrigger
				} else {
					setActive(false);
				}
			},
			{ threshold },
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return (
		<>
			<style>{`
        @keyframes ${name} {
          from { ${styleToCss(from)} }
          to { ${styleToCss(to)} }
        }
      `}</style>

			<div
				ref={ref}
				style={{
					animationName: active ? name : "none",
					animationDuration: duration,
					animationDelay: delay,
					animationTimingFunction: easing,
					animationFillMode: "both",
					willChange: "transform, opacity",
				}}
				className={twMerge(className)}
			>
				{children}
			</div>
		</>
	);
}

const animations = {
	fade: {
		from: { opacity: 0 },
		to: { opacity: 1 },
	},
	"fade-up": {
		from: { opacity: 0, transform: "translateY(24px)" },
		to: { opacity: 1, transform: "translateY(0)" },
	},
	"fade-down": {
		from: { opacity: 0, transform: "translateY(-24px)" },
		to: { opacity: 1, transform: "translateY(0)" },
	},
	"fade-left": {
		from: { opacity: 0, transform: "translateX(24px)" },
		to: { opacity: 1, transform: "translateX(0)" },
	},
	"fade-right": {
		from: { opacity: 0, transform: "translateX(-24px)" },
		to: { opacity: 1, transform: "translateX(0)" },
	},
	"fade-up-right": {
		from: { opacity: 0, transform: "translate(-24px, 24px)" },
		to: { opacity: 1, transform: "translate(0, 0)" },
	},
	"fade-up-left": {
		from: { opacity: 0, transform: "translate(24px, 24px)" },
		to: { opacity: 1, transform: "translate(0, 0)" },
	},
	"fade-down-right": {
		from: { opacity: 0, transform: "translate(-24px, -24px)" },
		to: { opacity: 1, transform: "translate(0, 0)" },
	},
	"fade-down-left": {
		from: { opacity: 0, transform: "translate(24px, -24px)" },
		to: { opacity: 1, transform: "translate(0, 0)" },
	},
	"zoom-in": {
		from: { opacity: 0, transform: "scale(0.8)" },
		to: { opacity: 1, transform: "scale(1)" },
	},
	"zoom-out": {
		from: { opacity: 0, transform: "scale(1.2)" },
		to: { opacity: 1, transform: "scale(1)" },
	},
	"zoom-in-up": {
		from: { opacity: 0, transform: "scale(0.8) translateY(24px)" },
		to: { opacity: 1, transform: "scale(1) translateY(0)" },
	},
	"zoom-in-down": {
		from: { opacity: 0, transform: "scale(0.8) translateY(-24px)" },
		to: { opacity: 1, transform: "scale(1) translateY(0)" },
	},
	"zoom-in-left": {
		from: { opacity: 0, transform: "scale(0.8) translateX(24px)" },
		to: { opacity: 1, transform: "scale(1) translateX(0)" },
	},
	"zoom-in-right": {
		from: { opacity: 0, transform: "scale(0.8) translateX(-24px)" },
		to: { opacity: 1, transform: "scale(1) translateX(0)" },
	},
	"flip-up": {
		from: { opacity: 0, transform: "rotateX(90deg)" },
		to: { opacity: 1, transform: "rotateX(0)" },
	},
	"flip-down": {
		from: { opacity: 0, transform: "rotateX(-90deg)" },
		to: { opacity: 1, transform: "rotateX(0)" },
	},
	"flip-left": {
		from: { opacity: 0, transform: "rotateY(90deg)" },
		to: { opacity: 1, transform: "rotateY(0)" },
	},
	"flip-right": {
		from: { opacity: 0, transform: "rotateY(-90deg)" },
		to: { opacity: 1, transform: "rotateY(0)" },
	},
};

function styleToCss(style) {
	return Object.entries(style)
		.map(([key, value]) => {
			return `${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}:${value};`;
		})
		.join("");
}
