// JoinQulture.jsx
import { Container } from "../components/layout/Container";
import AOSAnimate from "../components/ui/AOSAnimate";

export function JoinQulture() {
	return (
		<section className="bg-bg-dark">
			<Container className="py-20">
				<div className="text-center">
					<AOSAnimate animation="flip-up" duration="0.8s" delay="0.2s">
						<div className="text-[clamp(2.5rem,_4vw,_4rem)] font-[700] font-open text-violet-500">
							JOIN QULTURE
						</div>
					</AOSAnimate>

					<div className="mt-8">
						<button className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white">
							Download App
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
}
