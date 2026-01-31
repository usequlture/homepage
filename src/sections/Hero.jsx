// src/sections/Hero.jsx
import heroImg from "../assets/images/hero.webp";
import avatarOne from "../assets/icons/avatar-one.svg";
import avatarTwo from "../assets/icons/avatar-two.svg";
import avatarThree from "../assets/icons/avatar-three.svg";
import avatarFour from "../assets/icons/avatar-four.svg";
import avatarFive from "../assets/icons/avatar-five.svg";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import ArrowNE from "../assets/icons/arrow-ne.svg?react";
import Pause from "../assets/icons/pause.svg?react";
import Marker from "../assets/icons/marker.svg?react";
import ketherine from "../assets/icons/ketherine.svg";
import regan from "../assets/icons/regan.svg";
import jake from "../assets/icons/jake.svg";
import { useAnimationControls, motion } from "framer-motion";
import { useEffect } from "react";
import AOSAnimate from "../components/ui/AOSAnimate";

export default function AvatarStack({ avatars = [], size = 40, max = 5 }) {
	const visibleAvatars = avatars.slice(0, max);

	return (
		<div className="flex items-center">
			{/* Avatar stack */}
			<div className="flex items-center">
				{visibleAvatars.map((src, index) => (
					<div
						key={index}
						className="relative rounded-full border-2 border-white overflow-hidden bg-gray-200"
						style={{
							width: size,
							height: size,
							marginLeft: index === 0 ? 0 : -size / 3,
							zIndex: visibleAvatars.length - index,
						}}
					>
						<img
							src={src}
							alt="avatar"
							className="h-full w-full object-cover"
						/>
					</div>
				))}
			</div>

			{/* Text */}
			<p className="ml-4 text-[clamp(0.875rem,_4vw,_1rem)]">Join the vibe</p>
		</div>
	);
}

const getRandomY = () => (Math.random() > 0.5 ? 20 : -20);
const getRandomDelay = () => Math.random() * 4;

const AnimatedAvatar = ({ children, className }) => {
	const controls = useAnimationControls();

	const runAnimation = async () => {
		const yOffset = getRandomY();
		const delay = getRandomDelay();

		await controls.start({
			opacity: [0, 1, 1, 1, 0],
			transform: [
				"translate(0px, 0px)",
				"translate(0px, 0px)",
				`translate(0px, ${yOffset}px)`,
				`translate(0px, ${yOffset}px)`,
				`translate(0px, ${yOffset}px)`,
			],
			transition: {
				delay,
				duration: 10, // total timeline
				ease: "easeInOut",
				times: [0, 0.15, 0.5, 0.75, 1], // 👈 hold before fade out
			},
		});

		// pause before next cycle
		await new Promise((res) => setTimeout(res, 5000));
		runAnimation();
	};

	useEffect(() => {
		runAnimation();
	}, []);

	return (
		<motion.div
			className={className}
			initial={{
				opacity: 0,
				transform: "translate(0px, 0px)",
			}}
			animate={controls}
		>
			{children}
		</motion.div>
	);
};

const Katherine = () => {
	return (
		<AnimatedAvatar className="absolute md:left-[-13%] left-[-20%] top-[45%] h-[3rem] w-fit">
			<div className="flex items-center bg-white rounded-[0.81519rem] px-[1rem] gap-[1.02rem] py-[0.25rem]">
				<img src={ketherine} alt="" />
				<div>
					<span className="text-black block text-[0.67931rem] font-medium ">
						Left wing
					</span>
					<span className="text-[#8B5CF6] block text-[0.81519rem] font-semibold ">
						Katherine
					</span>
				</div>
			</div>
		</AnimatedAvatar>
	);
};

const Regan = () => {
	return (
		<AnimatedAvatar className="absolute right-[-15%] top-[65%]">
			<div className="h-[3rem] relative rounded-[0.81519rem] bg-white flex items-center w-fit px-[1rem] gap-[1.02rem] py-[0.25rem]">
				<img
					src={regan}
					alt=""
					className="absolute bottom-0 left-0 translate-x-[-100%]"
				/>
				<div>
					<span className="text-[#11121A] block text-[0.7rem] font-[600]">
						~Jean Regan
					</span>
					<span className="text-[#11121A] block text-[0.7rem] font-semibold ">
						Front row, purple dress, say hi
					</span>
				</div>
			</div>
		</AnimatedAvatar>
	);
};

const Jake = () => {
	return (
		<AnimatedAvatar className="absolute right-[-10%] top-[15%]">
			<div className="h-[3rem] relative rounded-[0.81519rem] bg-white flex items-center w-fit px-[1rem] gap-[1.02rem] py-[0.25rem]">
				<img
					src={jake}
					alt=""
					className="absolute bottom-0 left-0 translate-x-[-100%]"
				/>
				<div>
					<span className="text-[#11121A] block text-[0.7rem] font-[600]">
						Jake Caleb
					</span>
					<span className="text-[#6D6E7A] block text-[0.75rem] font-semibold ">
						Hey there! Lets connect
					</span>
				</div>
			</div>
		</AnimatedAvatar>
	);
};

export function Hero() {
	return (
		<Container className="flex md:gap-3 mt-[clamp(2rem,_4vw,_4.38rem)] items-center md:flex-row flex-col gap-[5rem]">
			<div className="grid gap-[2rem] flex-1 md:max-w-[33.63rem]">
				<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
					<h1 className="text-white font-sans text-[clamp(1.8rem,4vw,4rem)] font-bold leading-[1.15] tracking-[0.045rem] [text-shadow:0_4px_12px_rgba(30,215,96,0.10)]">
						Because your vibe{" "}
						<span className="bg-[linear-gradient(90deg,#06B6D4_0%,#8B5CF6_100%)] bg-clip-text text-transparent">
							doesn’t end
						</span>{" "}
						when the music stops{" "}
						<span className="inline-flex items-center align-baseline ml-1">
							<Pause className="w-[0.9em] h-[0.9em] translate-y-[0.15em]" />
						</span>
					</h1>
				</AOSAnimate>
				<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
					<p className="text-[clamp(0.875rem,_4vw,_1rem)] max-w-[30rem]">
						Stay connected with your squad before, during, and after every
						event, sharing moments, conversations, and memories that go beyond
						the night
					</p>
				</AOSAnimate>

				<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
					<div>
						<AvatarStack
							avatars={[
								avatarOne,
								avatarTwo,
								avatarThree,
								avatarFour,
								avatarFive,
							]}
						/>
					</div>
				</AOSAnimate>

				<AOSAnimate animation="fade-up" duration="0.8s" delay="0.2s">
					<Button className="rounded-full px-7 h-[3.5rem] text-[15px] font-medium w-fit">
						<span className="flex items-center gap-3">
							Download App
							<span className="inline-flex h-[2.25rem] aspect-square items-center justify-center rounded-full bg-white">
								{/* <ArrowUpRightIcon className="h-5 w-5 text-[#8B5CF6]" /> */}
								<ArrowNE />
							</span>
						</span>
					</Button>
				</AOSAnimate>
			</div>
			<div className="flex-1 overflow-hidden">
				<div className="w-[70%] max-w-[30rem] mx-auto relative">
					<img src={heroImg} className="" alt="" />
					<div className="absolute top-[38%] left-0 translate-x-[-60px]">
						<Marker fill="#8B5CF6" />
					</div>
					<Katherine />
					<Regan />
					<Jake />
				</div>
			</div>
		</Container>
	);
}
