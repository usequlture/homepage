// Trending.jsx
import Trending1 from "../assets/images/Trending1.png";
import Trending2 from "../assets/images/Trending2.png";
import Trending3 from "../assets/images/Trending3.png";
import Trending4 from "../assets/images/Trending4.png";
import Trending5 from "../assets/images/Trending5.png";
import Trending6 from "../assets/images/Trending6.png";
import AOSAnimate from "../components/ui/AOSAnimate";

export function Trending() {
	const items = [
		Trending1,
		Trending2,
		Trending3,
		Trending4,
		Trending5,
		Trending6,
	];

	// duplicate items for seamless loop
	const marqueeItems = [...items, ...items, ...items];

	return (
		<section className="bg-[#F2F2F7] py-[clamp(2.1rem,_4vw,_4.19rem)] overflow-hidden">
			<AOSAnimate animation="fade-down" duration="0.8s" delay="0.2s">
				<div className="text-center">
					<h3 className="text-xl font-semibold text-slate-900">
						See What’s Trending
					</h3>
					<p className="mt-2 text-base text-slate-600">
						Discover the hottest events and moments everyone’s talking about
						right now.
					</p>
				</div>
			</AOSAnimate>

			{/* Marquee */}

			<AOSAnimate animation="fade-up" duration="0.8s" delay="0.2s">
				<div className="mt-10 relative overflow-hidden">
					<div
						className="
            flex gap-5 px-6
            snap-x snap-mandatory
            animate-[marquee_25s_linear_infinite]
            hover:[animation-play-state:paused]
            will-change-transform
          "
					>
						{marqueeItems.map((src, i) => (
							<div
								key={i}
								className="
                snap-start shrink-0 overflow-hidden bg-white
                rounded-2xl ring-1 ring-black/5 shadow-sm
                h-[170px] w-[120px]
                sm:h-[210px] sm:w-[150px]
                lg:h-[230px] lg:w-[165px]
              "
							>
								<img
									src={src}
									alt={`Trending ${i + 1}`}
									className="h-full w-full object-cover select-none pointer-events-none"
									draggable="false"
								/>
							</div>
						))}
					</div>

					{/* Tailwind inline keyframes */}
					<style jsx>{`
						@keyframes marquee {
							from {
								transform: translateX(0);
							}
							to {
								transform: translateX(-33.333%);
							}
						}
					`}</style>
				</div>
			</AOSAnimate>
		</section>
	);
}
