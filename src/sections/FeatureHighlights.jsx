// FeatureHighlights.jsx
import { twMerge } from "tailwind-merge";
import highlight1 from "../assets/images/highlight1.webp";
import highlight2 from "../assets/images/highlight2.webp";
import highlight4 from "../assets/images/highlight4.webp";
import highlight3 from "../assets/images/highlight3.webp";
import { Container } from "../components/layout/Container";
import AOSAnimate from "../components/ui/AOSAnimate";

function Card({ children, className }) {
	return (
		<div
			className={twMerge(
				"rounded-[1.25rem] bg-[#F2F2F7] hover:scale-[105%] transition-all duration-500",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function FeatureHighlights() {
	return (
		<section className="bg-white">
			<Container className="py-14 lg:py-18">
				<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
					<h2 className="text-center text-[clamp(1.5rem,_4vw,_3rem)] font-[700] font-open text-slate-900">
						Feature Highlights
					</h2>
				</AOSAnimate>

				<div className="mt-[clamp(1.5rem,_4vw,_3rem)] text-[#0C0033] mx-auto font-poppins grid lg:grid-cols-12 lg:gap-[4rem] gap-[1rem] max-w-[71.38rem] w-full">
					<AOSAnimate
						animation="fade-right"
						duration="0.8s"
						delay="0.2s"
						className="lg:col-span-7"
					>
						<Card
							title="Live Friend Finder"
							desc="See and connect with people around you in real time during events."
						>
							<div className="flex items-center md:flex-row flex-col">
								<img
									src={highlight1}
									className="max-h-[30rem]"
									alt="Live Friend Finder"
								/>
								<div className="w-full grid gap-[1rem] pr-[1rem] md:p-0 md:pr-[1rem] p-[1.5rem] md:mt-0 mt-[0.5rem]">
									<h1 className="text-[clamp(1.1rem,_4vw,_1.5rem)] font-[600]">
										Live Friend Finder
									</h1>
									<p className="text-[clamp(0.875rem,_4vw,_1rem)]">
										See and connect with people around you in real time during
										events.
									</p>
								</div>
							</div>
						</Card>
					</AOSAnimate>
					<AOSAnimate
						animation="fade-left"
						duration="0.8s"
						delay="0.2s"
						className="lg:col-span-5 h-full"
					>
						<Card
							className="h-full"
							title="Qulture Circle"
							desc="Join private communities to keep the conversation going beyond events."
						>
							<img src={highlight2} alt="Qulture Circle" />
							<div className="grid gap-[1rem] px-[1.5rem] pb-[1rem] md:max-w-[19.9rem] mx-auto mt-[1rem]">
								<h1 className="text-[clamp(1.1rem,_4vw,_1.5rem)] font-[600]">
									Qulture Circle
								</h1>
								<p className="text-[clamp(0.875rem,_4vw,_1rem)]">
									Join or create communities to keep the conversation going
									beyond events.
								</p>
							</div>
						</Card>
					</AOSAnimate>

					<AOSAnimate
						animation="fade-right"
						duration="0.8s"
						delay="0.2s"
						className="lg:col-span-5"
					>
						<Card
							title="AI Vibe Graph"
							desc="Smart recommendations that match you with people and events you’ll love."
						>
							<img src={highlight3} alt="Qulture Circle" />
							<div className="grid gap-[1rem] px-[1.5rem] pb-[1rem] md:max-w-[19.9rem] mx-auto mt-[1rem]">
								<h1 className="text-[clamp(1.1rem,_4vw,_1.5rem)] font-[600]">
									AI Vibe Graph
								</h1>
								<p className="text-[clamp(0.875rem,_4vw,_1rem)]">
									Smart recommendations that match you with people and events
									you’ll love.
								</p>
							</div>
						</Card>
					</AOSAnimate>

					<AOSAnimate
						animation="fade-left"
						duration="0.8s"
						delay="0.2s"
						className="lg:col-span-7"
					>
						<Card
							title="Find Your People"
							desc="Connect with others who share your interests and vibe."
						>
							<div className="flex items-center md:flex-row flex-col">
								<img
									src={highlight4}
									className="max-h-[25rem]"
									alt="Live Friend Finder"
								/>
								<div className="w-full grid gap-[1rem] pr-[1rem] md:p-0 md:pr-[1rem] p-[1.5rem] md:mt-0 mt-[0.5rem]">
									<h1 className="text-[clamp(1.1rem,_4vw,_1.5rem)] font-[600]">
										Find Your People
									</h1>
									<p className="text-[clamp(0.875rem,_4vw,_1rem)]">
										Connect with others who share your interests and vibe.
									</p>
								</div>
							</div>
						</Card>
					</AOSAnimate>
				</div>
			</Container>
		</section>
	);
}
