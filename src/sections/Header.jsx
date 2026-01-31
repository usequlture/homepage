// Navbar.jsx
import logoLight from "../assets/images/logo-light.png";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export function Header() {
	return (
		<header>
			<Container className="flex h-[6.31rem] items-center justify-between">
				<img src={logoLight} alt="Qulture" className="h-5 w-auto" />

				<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
					<a href="#features" className="hover:text-white">
						Features
					</a>
					<a href="#organizers" className="hover:text-white">
						For Organizers
					</a>
					<a href="#community" className="hover:text-white">
						Community
					</a>
				</nav>

				<Button variant="primary">Download App</Button>
			</Container>
		</header>
	);
}
