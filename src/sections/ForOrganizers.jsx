// ForOrganizers.jsx
import { Container } from "../components/layout/Container";
import organizerDashboard from "../assets/images/concierge2.png";
import RealTime from "../assets/icons/real-time.svg?react";
import Vibe from "../assets/icons/vibe.svg?react";
import AOSAnimate from "../components/ui/AOSAnimate";

const Card = ({ title, description, icon }) => {
	return (
		<div className="px-[0.64rem] py-[1.03rem] flex items-center gap-3 font-[700] text-[clamp(0.65rem,_4vw,_0.76575rem)] rounded-[1.25rem] border border-[#8B5CF6] bg-[#8B5CF633] backdrop-blur-[16.34px]">
			{icon}
			<div>
				<h1>{title}</h1>
				<p className="text-[clamp(0.65rem,_4vw,_0.76575rem)] font-[400]">
					{description}
				</p>
			</div>
		</div>
	);
};
export function ForOrganizers() {
	return (
		<section id="organizers" className="relative bg-bg-dark overflow-hidden">
			<Container className="relative py-[clamp(2.5rem,_4vw,_9.2rem)]">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* LEFT */}
					<AOSAnimate animation="fade-up" duration="0.8s" delay="0.2s">
						<div className="max-w-xl grid gap-[2rem]">
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

							<div className="grid gap-[1.5rem]">
								<Card
									icon={<RealTime />}
									title="Real-time Analytics"
									description="Track attendance and heatmap density live."
								/>
								<Card
									icon={<Vibe />}
									title="Vibe Checker"
									description="AI analytics of crowd mood and energy level"
								/>
							</div>
						</div>
					</AOSAnimate>

					{/* RIGHT */}
					<div className="flex justify-center lg:justify-end">
						<img
							src={organizerDashboard}
							alt="Organizer analytics dashboard"
							className="w-full max-w-[640px] h-auto"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
