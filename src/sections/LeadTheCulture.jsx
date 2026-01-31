// LeadTheCulture.jsx
import { Container } from "../components/layout/Container";
import joinVibe1 from "../assets/images/join-the-vibe1.webp";
import joinVibe2 from "../assets/images/join-the-vibe2.webp";
import joinVibe3 from "../assets/images/join-the-vibe3.webp";
import joinVibe4 from "../assets/images/join-the-vibe4.webp";
import joinVibe5 from "../assets/images/join-the-vibe5.webp";

const people = [
	{ name: "Sharon", img: joinVibe1 },
	{ name: "James", img: joinVibe2 },
	{ name: "Trevor", img: joinVibe3 },
	{ name: "Genny", img: joinVibe4 },
	{ name: "Collin", img: joinVibe5 },
	{ name: "Anabel", img: joinVibe1 },
	{ name: "Genny", img: joinVibe2 },
	{ name: "Trevor", img: joinVibe3 },
];

export function LeadTheCulture() {
	return (
		<section
			id="community"
			className="bg-[#EEE9FF] text-slate-900 py-[clamp(2.89rem,_4vw,_5.47rem)]"
		>
			<Container className="grid gap-[2rem]">
				<div className="text-center">
					<h2 className="text-[clamp(1.3rem,_4vw,_3rem)] font-[700] font-open">
						Lead The Culture.{" "}
						<span className="text-violet-700">Be the Vibe.</span>
					</h2>
					<p className="text-sm text-[#11121A] font-open text-[clamp(0.85rem,_4vw,_1rem)]">
						Join our global community of creators, curators and connectors.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-6">
					{people.map((p, i) => (
						<div
							key={i}
							className="
        group
        flex flex-col items-center
        transition-transform duration-300 ease-out
        hover:-translate-y-1
      "
						>
							<img
								src={p.img}
								alt={p.name}
								className="
          h-16 w-16 rounded-full
          transition-all duration-300 ease-out
          group-hover:scale-110
          group-hover:shadow-lg
        "
							/>

							<div
								className="
          mt-2 text-xs text-slate-700
          transition-all duration-300
          group-hover:text-slate-900
          group-hover:font-medium
        "
							>
								{p.name}
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center">
					<button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white">
						Become an Ambassador
					</button>
				</div>
			</Container>
		</section>
	);
}
