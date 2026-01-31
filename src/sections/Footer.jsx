// Footer.jsx
import { Container } from "../components/layout/Container";
import logoLight from "../assets/images/logo-light.png";
import Instagram from "../assets/icons/instagram.svg?react";
import LinkedIn from "../assets/icons/linkedin.svg?react";
import Facebook from "../assets/icons/facebook.svg?react";
import Twitter from "../assets/icons/twitter.svg?react";

export function Footer() {
	return (
		<footer className="bg-bg-dark">
			<div className="max-w-[72.81rem] mx-auto border-t-[1px] border-[#322654] py-[clamp(2.78rem,_4vw,_4.75rem)]">
				<div className="flex justify-between flex-wrap sm:gap-[5rem] gap-[3rem] md:flex-row flex-col px-5 pb-[clamp(2.78rem,_4vw,_4.75rem)]">
					<div className="max-w-[16.25rem]">
						<img src={logoLight} alt="Qulture" className="h-5 w-auto" />
						<p className="mt-4 text-[clamp(0.875rem,_4vw,_1rem)] leading-5 text-white">
							Connecting vibes, people and events worldwide
						</p>
					</div>

					<div>
						<div className="text-[clamp(0.95rem,_4vw,_1.5rem)] font-[600] text-white">
							Product
						</div>
						<div className="mt-3 text-[clamp(0.75rem,_4vw,_0.8175rem)] grid gap-2 text-xs text-white">
							<a href="#features">Features</a>
							<a href="#organizers">For Organizers</a>
						</div>
					</div>

					<div>
						<div className="text-[clamp(0.95rem,_4vw,_1.5rem)] font-[600] text-white">
							Community
						</div>
						<div className="mt-3 text-[clamp(0.75rem,_4vw,_0.8175rem)] grid gap-2 text-xs text-white">
							<a href="#community">Socials</a>
							<div className="flex items-center gap-[0.25rem]">
								<Instagram />
								<LinkedIn />
								<Facebook />
								<Twitter />
							</div>
						</div>
					</div>

					<div>
						<div className="text-[clamp(0.95rem,_4vw,_1.5rem)] font-[600] text-white">
							Legal
						</div>
						<div className="mt-3 text-[clamp(0.75rem,_4vw,_0.8175rem)] grid gap-2 text-xs text-white">
							<a href="#privacy">Privacy policy</a>
							<a href="#terms">Terms & Conditions</a>
						</div>
					</div>
				</div>
				<div className="text-center text-[clamp(0.75rem,_4vw,_0.8175rem)] text-white">
					2025 © Qulture. All rights reserved
				</div>
			</div>
		</footer>
	);
}
