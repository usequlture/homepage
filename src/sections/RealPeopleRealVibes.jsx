// RealPeopleRealVibes.jsx
import { Container } from "../components/layout/Container";
import tom from "../assets/images/tom.webp";

function TestimonialCard({ text, name }) {
	return (
		<div
			className="
        group
        text-[#0C0033]
        rounded-[clamp(0.975rem,_4vw,_1rem)]
        font-poppins
        bg-[#F2F2F7]
        p-6
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-black/10
      "
		>
			<p className="leading-6 transition-colors duration-300 group-hover:text-[#0C0033]">
				{text}
			</p>

			<div className="mt-5 flex items-center gap-3">
				<div
					className="
            h-8 w-8 rounded-full bg-slate-200
            overflow-hidden
            transition-transform duration-300
            group-hover:scale-110
          "
				>
					<img src={tom} alt="" className="h-full w-full object-cover" />
				</div>

				<div className="text-sm font-semibold text-slate-900">{name}</div>
			</div>
		</div>
	);
}

export function RealPeopleRealVibes() {
	const quote =
		"Qulture made it so easy to meet people at events without it feeling awkward. I left with new friends, not just memories.";

	return (
		<section className="bg-white text-slate-900">
			<Container className="py-16 lg:py-20">
				<h2 className="text-center text-[clamp(1.8rem,_4vw,_3rem)] font-[700]">
					Real people, real vibes
				</h2>

				<div className="mt-10 grid gap-6 lg:grid-cols-3">
					<TestimonialCard text={quote} name="Tom Holland" />
					<TestimonialCard text={quote} name="Tom Holland" />
					<TestimonialCard text={quote} name="Tom Holland" />
				</div>
			</Container>
		</section>
	);
}
