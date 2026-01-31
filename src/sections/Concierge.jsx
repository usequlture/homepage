// Concierge.jsx
import { Container } from "../components/layout/Container";
import conciergePhone from "../assets/images/concierge1.webp";
import Spot from "../assets/icons/spot.svg?react";
import AOSAnimate from "../components/ui/AOSAnimate";

function CheckIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<rect width="24" height="24" rx="12" fill="white" />
			<path
				d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
				fill="#28B64C"
			/>
		</svg>
	);
}

function Badge() {
	return (
		<div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/40 bg-white/5 px-4 py-2 text-xs text-white/80">
			<Spot />
			Powered by Qulture AI
		</div>
	);
}

function Bullet({ children }) {
	return (
		<li className="flex items-start gap-3">
			<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
				<CheckIcon className="h-4 w-4" />
			</span>
			<span className="text-[clamp(0.8125rem,_4vw,_0.95rem)] text-white">
				{children}
			</span>
		</li>
	);
}

export function Concierge() {
	return (
		<section className="relative bg-bg-dark overflow-hidden">
			<Container className="relative md:pt-24 pt-8">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					{/* LEFT: Phone */}
					<div className="flex justify-center lg:justify-start">
						<div className="relative">
							<img
								src={conciergePhone}
								className="scale-110"
								alt="AI Concierge"
							/>
						</div>
					</div>

					{/* RIGHT: Text */}

					<div className="max-w-xl ">
						<AOSAnimate
							animation="fade-up"
							duration="0.8s"
							delay="0.2s"
							className="lg:col-span-7 grid gap-[2rem]"
						>
							<Badge />

							<h2 className="text-[clamp(1.8rem,_4vw,_2.5rem)] font-[700] leading-[115%] text-white sm:text-5xl">
								Your Personal Event
								<br />
								Concierge
							</h2>

							<p className="text-[clamp(0.875rem,_4vw,_1rem)] leading-6 text-white">
								Never miss a beat. Our AI analyzes real-time crowd data and your
								preferences to send you personalized recommendation in
								real-time.
							</p>

							<ul className="grid gap-[1.56rem]">
								<Bullet>“Your friends are near stage B”</Bullet>
								<Bullet>“Sustyviber is trending right now”</Bullet>
								<Bullet>“After party happening at Club 88”</Bullet>
							</ul>
						</AOSAnimate>
					</div>
				</div>
			</Container>
		</section>
	);
}
