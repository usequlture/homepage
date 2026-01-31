// Home.jsx
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { OwnTheNight } from "../sections/OwnTheNight";
import { Trending } from "../sections/Trending";
import { FeatureHighlights } from "../sections/FeatureHighlights";
import { Concierge } from "../sections/Concierge";
import { ForOrganizers } from "../sections/ForOrganizers";
import { LeadTheCulture } from "../sections/LeadTheCulture";
import { RealPeopleRealVibes } from "../sections/RealPeopleRealVibes";
import { JoinQulture } from "../sections/JoinQulture";
import { Footer } from "../sections/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-bg-dark text-text-primary">
			<Header />
			<Hero />
			<OwnTheNight />
			<Trending />
			<FeatureHighlights />
			<Concierge />
			<ForOrganizers />
			<LeadTheCulture />
			<RealPeopleRealVibes />
			<JoinQulture />
			<Footer />
		</div>
	);
}
