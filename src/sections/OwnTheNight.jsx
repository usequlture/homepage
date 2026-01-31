// OwnTheNight.jsx
import { twMerge } from "tailwind-merge";
import { Container } from "../components/layout/Container";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import PinIcon from "../assets/icons/marker.svg?react";
import CameraIcon from "../assets/icons/img-stack.svg?react";
import AOSAnimate from "../components/ui/AOSAnimate";

function Step({
	icon,
	title,
	desc,
	active,
	leftGradientClassName,
	rightGradientClassName,
}) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="flex items-center w-full">
				<div
					className={twMerge("flex-1 h-[1.5px]", leftGradientClassName)}
				></div>
				<div
					className={[
						"h-[6.25rem] aspect-square border-[1px] border-[#8B5CF6] bg-[#FFFFFF1A] rounded-[1rem] flex items-center justify-center hover:rotate-12 transition-all duration-500",
						active ? "bg-[#8B5CF6]" : "",
					].join(" ")}
				>
					{icon}
				</div>
				<div
					className={twMerge("flex-1 h-[1.5px]", rightGradientClassName)}
				></div>
			</div>

			<div className="text-sm font-[700] text-[clamp(1.2rem,_4vw,_1.5rem)] text-white mt-[1.42rem]">
				{title}
			</div>
			<p className="max-w-[18.44rem] text-[clamp(0.875rem,_4vw,_1rem)] leading-5 text-white mt-[0.94rem] font-open">
				{desc}
			</p>
		</div>
	);
}

export function OwnTheNight() {
	return (
		<section className="bg-bg-dark">
			<Container className="py-16 lg:py-20">
				<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
					<div className="text-center">
						<h2 className="text-[clamp(01.2rem,_4vw,_1.5rem)] font-[700] text-white">
							Own The Night
						</h2>
						<p className="mt-2 text-[clamp(0.95rem,_4vw,_1.25rem)] text-white font-open">
							Your complete event companion, from pre-event to after event
						</p>
					</div>
				</AOSAnimate>

				<div className="mt-[4.77rem] grid w-full lg:grid-cols-3 lg:gap-0 gap-[5rem]">
					<Step
						title="Before"
						desc="Discover events and plan ahead. See who’s going before you even step out"
						icon={<CalendarIcon />}
						leftGradientClassName="opacity-30 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]"
						rightGradientClassName="opacity-70 bg-[#06B6D4]"
					/>
					<Step
						title="During"
						active
						desc="Live location sharing & “Who is here?” Find your squad in the crowd instantly"
						icon={<PinIcon fill="white" width="47" height="47" />}
						leftGradientClassName="opacity-70 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]"
						rightGradientClassName="opacity-70 bg-[#3D5FA5]"
					/>
					<Step
						title="After"
						desc="Photo dumps and missed connections. Relive the memories and reconnect"
						icon={<CameraIcon />}
						leftGradientClassName="opacity-70 bg-gradient-to-r from-[#3D5FA5] to-[#6444AF]"
						rightGradientClassName="opacity-30 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]"
					/>
				</div>
			</Container>
		</section>
	);
}
