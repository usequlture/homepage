import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [svgr(), react()],
});
// // src/sections/Hero.jsx
// import heroImg from "../assets/images/hero.webp";
// import avatarOne from "../assets/icons/avatar-one.svg";
// import avatarTwo from "../assets/icons/avatar-two.svg";
// import avatarThree from "../assets/icons/avatar-three.svg";
// import avatarFour from "../assets/icons/avatar-four.svg";
// import avatarFive from "../assets/icons/avatar-five.svg";
// import { Container } from "../components/layout/Container";
// import { Button } from "../components/ui/Button";
// import ArrowNE from "../assets/icons/arrow-ne.svg?react";
// import Pause from "../assets/icons/pause.svg?react";
// import Marker from "../assets/icons/marker.svg?react";
// import ketherine from "../assets/icons/ketherine.svg";
// import regan from "../assets/icons/regan.svg";
// import jake from "../assets/icons/jake.svg";

// import { motion, AnimatePresence } from "framer-motion";

// // ---------------- Avatar Stack ----------------
// export default function AvatarStack({ avatars = [], size = 40, max = 5 }) {
// 	const visibleAvatars = avatars.slice(0, max);

// 	return (
// 		<div className="flex items-center">
// 			<div className="flex items-center">
// 				{visibleAvatars.map((src, index) => (
// 					<div
// 						key={index}
// 						className="relative rounded-full border-2 border-white overflow-hidden bg-gray-200"
// 						style={{
// 							width: size,
// 							height: size,
// 							marginLeft: index === 0 ? 0 : -size / 3,
// 							zIndex: visibleAvatars.length - index,
// 						}}
// 					>
// 						<img
// 							src={src}
// 							alt="avatar"
// 							className="h-full w-full object-cover"
// 						/>
// 					</div>
// 				))}
// 			</div>

// 			<p className="ml-4 text-[clamp(0.875rem,_4vw,_1rem)]">Join the vibe</p>
// 		</div>
// 	);
// }

// // ---------------- Animated Avatars ----------------
// const getRandomDirection = () => (Math.random() > 0.5 ? -50 : 50);
// const getRandomDelay = () => Math.random() * 2;

// const AnimatedAvatar = ({ children, top, left }) => {
// 	const yStart = getRandomDirection();
// 	const delay = getRandomDelay();

// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: yStart }}
// 			animate={{ opacity: 1, y: 0 }}
// 			exit={{ opacity: 0, y: -yStart }}
// 			transition={{
// 				delay,
// 				duration: 1.5,
// 				ease: "easeInOut",
// 				repeat: Infinity,
// 				repeatType: "mirror",
// 			}}
// 			className="absolute"
// 			style={{ top, left }}
// 		>
// 			{children}
// 		</motion.div>
// 	);
// };

// // ---------------- Individual Avatars ----------------
// const Katherine = () => (
// 	<AnimatedAvatar top="45%" left="-10%">
// 		<div className="h-[3rem] rounded-[0.81519rem] bg-white flex items-center w-fit px-[1rem] gap-[1.02rem] py-[0.25rem]">
// 			<img src={ketherine} alt="" />
// 			<div>
// 				<span className="text-black block text-[0.67931rem] font-medium">
// 					Left wing
// 				</span>
// 				<span className="text-[#8B5CF6] block text-[0.81519rem] font-semibold">
// 					Katherine
// 				</span>
// 			</div>
// 		</div>
// 	</AnimatedAvatar>
// );

// const Regan = () => (
// 	<AnimatedAvatar top="65%" left="80%">
// 		<div className="h-[3rem] relative rounded-[0.81519rem] bg-white flex items-center w-fit px-[1rem] gap-[1.02rem] py-[0.25rem]">
// 			<img
// 				src={regan}
// 				alt=""
// 				className="absolute bottom-0 left-0 translate-x-[-100%]"
// 			/>
// 			<div>
// 				<span className="text-[#11121A] block text-[0.7rem] font-[600]">
// 					~Jean Regan
// 				</span>
// 				<span className="text-[#11121A] block text-[0.7rem] font-semibold">
// 					Front row, purple dress, say hi
// 				</span>
// 			</div>
// 		</div>
// 	</AnimatedAvatar>
// );

// const Jake = () => (
// 	<AnimatedAvatar top="15%" left="85%">
// 		<div className="h-[3rem] w-[9.75rem] relative rounded-[0.81519rem] bg-white flex items-center w-fit px-[1rem] gap-[1.02rem] py-[0.25rem]">
// 			<img
// 				src={jake}
// 				alt=""
// 				className="absolute bottom-0 left-0 translate-x-[-100%]"
// 			/>
// 			<div>
// 				<span className="text-[#11121A] block text-[0.7rem] font-[600]">
// 					Jake Caleb
// 				</span>
// 				<span className="text-[#6D6E7A] block text-[0.75rem] font-semibold">
// 					Hey there! Lets connect
// 				</span>
// 			</div>
// 		</div>
// 	</AnimatedAvatar>
// );

// // ---------------- Hero Component ----------------
// export function Hero() {
// 	return (
// 		<Container className="flex gap-3 mt-[clamp(2rem,_4vw,_4.38rem)] items-center">
// 			{/* Left Content */}
// 			<div className="grid gap-[2rem] flex-1 max-w-[33.63rem]">
// 				<h1 className="text-white font-sans text-[clamp(1.8rem,_4vw,_4rem)] font-bold leading-[1.15] tracking-[0.045rem] [text-shadow:0_4px_12px_rgba(30,215,96,0.10)]">
// 					Because your vibe{" "}
// 					<span className="bg-[linear-gradient(90deg,#06B6D4_0%,#8B5CF6_100%)] bg-clip-text text-transparent">
// 						doesn’t end
// 					</span>{" "}
// 					when the music stops{" "}
// 					<div className="inline-block">
// 						<Pause />
// 					</div>
// 				</h1>
// 				<p className="text-[clamp(0.875rem,_4vw,_1rem)] max-w-[30rem]">
// 					Stay connected with your squad before, during, and after every event,
// 					sharing moments, conversations, and memories that go beyond the night
// 				</p>
// 				<div>
// 					<AvatarStack
// 						avatars={[
// 							avatarOne,
// 							avatarTwo,
// 							avatarThree,
// 							avatarFour,
// 							avatarFive,
// 						]}
// 					/>
// 				</div>
// 				<Button className="rounded-full px-7 h-[3.5rem] text-[15px] font-medium w-fit">
// 					<span className="flex items-center gap-3">
// 						Download App
// 						<span className="inline-flex h-[2.25rem] aspect-square items-center justify-center rounded-full bg-white">
// 							<ArrowNE />
// 						</span>
// 					</span>
// 				</Button>
// 			</div>

// 			{/* Right Image */}
// 			<div className="flex-1">
// 				<div className="w-[70%] ml-auto pr-[clamp(1.3rem,_4vw,_3.44rem)] relative">
// 					<img src={heroImg} className="" alt="" />
// 					<div className="absolute top-[38%] left-0 translate-x-[-60px]">
// 						<Marker />
// 					</div>
// 					<AnimatePresence>
// 						<Katherine />
// 						<Regan />
// 						<Jake />
// 					</AnimatePresence>
// 				</div>
// 			</div>
// 		</Container>
// 	);
// }
