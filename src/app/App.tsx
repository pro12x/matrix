import { useState } from "react";
import { MatrixRain } from "./components/MatrixRain";
import { BootSequence } from "./components/BootSequence";
import { Navigation } from "./components/Navigation";
import { TypingText } from "./components/TypingText";
import {
	Github,
	Linkedin,
	Mail,
	Terminal,
	Code,
	Database,
	Globe,
	Cpu,
	Zap,
	Shield,
	Box,
} from "lucide-react";

export default function App() {
	const [bootComplete, setBootComplete] = useState(false);

	const projects = [
		{
			title: "Neural Network Framework",
			description:
				"Built a custom deep learning framework from scratch with automatic differentiation and GPU acceleration",
			tech: ["Python", "CUDA", "NumPy", "C++"],
			status: "ACTIVE",
			icon: Cpu,
		},
		{
			title: "Distributed System",
			description:
				"Scalable microservices architecture handling 1M+ requests/day with 99.9% uptime",
			tech: ["Go", "Kubernetes", "Redis", "gRPC"],
			status: "DEPLOYED",
			icon: Zap,
		},
		{
			title: "Real-time Analytics Dashboard",
			description:
				"Live data visualization platform with WebSocket streaming and sub-second latency",
			tech: ["React", "Node.js", "WebSocket", "TimescaleDB"],
			status: "LIVE",
			icon: Database,
		},
		{
			title: "Security Framework",
			description:
				"End-to-end encryption library with zero-knowledge architecture",
			tech: ["Rust", "WebAssembly", "Cryptography"],
			status: "BETA",
			icon: Shield,
		},
	];

	const skills = [
		{
			category: "Languages",
			items: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "C++"],
			proficiency: 95,
		},
		{
			category: "Frontend",
			items: ["React", "Next.js", "Vue", "Tailwind CSS", "WebGL"],
			proficiency: 90,
		},
		{
			category: "Backend",
			items: ["Node.js", "Django", "PostgreSQL", "MongoDB", "GraphQL"],
			proficiency: 92,
		},
		{
			category: "DevOps",
			items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
			proficiency: 88,
		},
		{
			category: "AI/ML",
			items: ["TensorFlow", "PyTorch", "Scikit-learn", "Neural Networks"],
			proficiency: 85,
		},
		{
			category: "Tools",
			items: ["Git", "Linux", "Vim", "Bash", "Redis"],
			proficiency: 93,
		},
	];

	const stats = [
		{ label: "YEARS EXPERIENCE", value: "4+", icon: Terminal },
		{ label: "PROJECTS COMPLETED", value: "10+", icon: Box },
		{ label: "LINES OF CODE", value: "100K+", icon: Code },
		{ label: "UPTIME", value: "99.9%", icon: Zap },
	];

	if (!bootComplete) {
		return <BootSequence onComplete={() => setBootComplete(true)} />;
	}

	return (
		<div className="min-h-screen bg-black text-matrix overflow-x-hidden crt">
			<MatrixRain />
			<div className="scanline" />
			<Navigation />

			<div className="relative z-10 pt-16">
				{/* Hero Section */}
				<section
					id="hero"
					className="min-h-screen flex flex-col items-center justify-center px-4"
				>
					<div className="text-center space-y-8 max-w-4xl">
						<div className="flex items-center justify-center gap-3 mb-6 float">
							<Terminal className="w-10 h-10 text-matrix-bright blink-slow" />
							<span className="text-2xl text-matrix-bright">[</span>
							<span className="text-matrix-bright blink">SYSTEM ONLINE</span>
							<span className="text-2xl text-matrix-bright">]</span>
						</div>

						<div className="space-y-4">
							<h1 className="text-5xl md:text-7xl text-matrix-bright">
								<TypingText text="Franchis Janel MOKOMBA" speed={100} />
							</h1>

							<div className="space-y-3 text-xl md:text-3xl">
								<p className="text-matrix">
									<span className="blink-fast">&gt;</span>{" "}
									<TypingText
										text="FULL STACK JAVA DEVELOPER"
										delay={1500}
										speed={70}
									/>
								</p>
								<p className="text-matrix opacity-90">
									<span className="blink-fast">&gt;</span>{" "}
									<TypingText text="JUNIOR QA ENGINEER" delay={3500} speed={70} />
								</p>
							</div>
						</div>

						<div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="bg-matrix-dark border border-matrix p-4 matrix-hover fadeIn"
								>
									<stat.icon className="w-6 h-6 text-matrix-bright mx-auto mb-2 blink-slow" />
									<div className="text-2xl md:text-3xl text-matrix-bright">
										{stat.value}
									</div>
									<div className="text-xs md:text-sm text-matrix-dim mt-1">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						<div className="pt-8">
							<p className="text-matrix text-xl">
								<span className="blink-fast">&gt;&gt;</span> READY TO BUILD THE
								FUTURE
								<span className="blink ml-2">█</span>
							</p>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section
					id="about"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-5xl w-full">
						<h2 className="text-4xl md:text-5xl text-matrix-bright mb-12 text-center">
							<span className="blink-fast">&gt;</span> ABOUT.EXE
							<span className="blink ml-3">█</span>
						</h2>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-matrix-darker border-2 border-matrix p-8 matrix-hover matrix-grid">
								<div className="space-y-4 text-matrix">
									<p className="text-lg">
										<span className="text-matrix-bright blink-fast">
											&gt;&gt;
										</span>{" "}
										Passionate developer specializing in building{" "}
										<span className="text-matrix-bright">
											robust, scalable applications
										</span>{" "}
										that push the boundaries of what's possible with code.
									</p>
									<p className="text-lg">
										<span className="text-matrix-bright blink-fast">
											&gt;&gt;
										</span>{" "}
										With expertise spanning from low-level systems programming
										to high-level web architectures, I thrive on solving
										<span className="text-matrix-bright">
											{" "}
											complex technical challenges
										</span>
										.
									</p>
									<p className="text-lg">
										<span className="text-matrix-bright blink-fast">
											&gt;&gt;
										</span>{" "}
										Currently focused on distributed systems, machine learning,
										and building tools that
										<span className="text-matrix-bright">
											{" "}
											empower other developers
										</span>
										.
									</p>
								</div>
							</div>

							<div className="space-y-6">
								<div className="bg-matrix-darker border-2 border-matrix p-6 matrix-hover">
									<h3 className="text-xl text-matrix-bright mb-4 flex items-center gap-2">
										<Code className="w-5 h-5 blink-slow" />
										<span className="blink-fast">&gt;</span> EDUCATION
									</h3>
									<div className="space-y-3 text-matrix">
										<div>
											<p className="text-matrix-bright">
												M.S. Computer Science
											</p>
											<p className="text-sm text-matrix-dim">
												Stanford University • 2018
											</p>
										</div>
										<div>
											<p className="text-matrix-bright">
												B.S. Software Engineering
											</p>
											<p className="text-sm text-matrix-dim">MIT • 2016</p>
										</div>
									</div>
								</div>

								<div className="bg-matrix-darker border-2 border-matrix p-6 matrix-hover">
									<h3 className="text-xl text-matrix-bright mb-4 flex items-center gap-2">
										<Zap className="w-5 h-5 blink-slow" />
										<span className="blink-fast">&gt;</span> CERTIFICATIONS
									</h3>
									<div className="space-y-2 text-matrix">
										<p>
											<span className="blink-fast">■</span> AWS Solutions
											Architect
										</p>
										<p>
											<span className="blink-fast">■</span> Kubernetes
											Administrator
										</p>
										<p>
											<span className="blink-fast">■</span> Google Cloud
											Professional
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-8 text-center">
							<p className="text-matrix-bright text-xl">
								<span className="blink">&gt; ACCESS GRANTED</span>
								<span className="text-matrix-bright blink-slow ml-3">●</span>
							</p>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section
					id="skills"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-6xl w-full">
						<h2 className="text-4xl md:text-5xl text-matrix-bright mb-12 text-center">
							<span className="blink-fast">&gt;</span> SKILLS.SYS
							<span className="blink ml-3">█</span>
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{skills.map((skill) => (
								<div
									key={skill.category}
									className="bg-matrix-darker border-2 border-matrix p-6 matrix-hover"
								>
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-xl text-matrix-bright flex items-center gap-2">
											<Code className="w-5 h-5 blink-slow" />
											<span className="blink-fast">&gt;</span> {skill.category}
										</h3>
										<span className="text-matrix-bright text-sm">
											{skill.proficiency}%
										</span>
									</div>

									{/* Progress bar */}
									<div className="mb-4 h-2 bg-black border border-matrix overflow-hidden">
										<div
											className="h-full bg-matrix-bright"
											style={{
												width: `${skill.proficiency}%`,
												boxShadow: "0 0 10px rgba(0, 255, 0, 0.8)",
											}}
										/>
									</div>

									<div className="space-y-2">
										{skill.items.map((item) => (
											<div
												key={item}
												className="text-matrix flex items-center gap-2"
											>
												<span className="blink-fast">■</span>
												<span>{item}</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>

						<div className="mt-12 text-center">
							<div className="inline-block bg-matrix-darker border-2 border-matrix-bright px-8 py-4">
								<p className="text-matrix-bright text-lg">
									<span className="blink-fast">&gt;&gt;</span> CONTINUOUSLY
									LEARNING & EVOLVING
									<span className="blink ml-2">█</span>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-6xl w-full">
						<h2 className="text-4xl md:text-5xl text-matrix-bright mb-12 text-center">
							<span className="blink-fast">&gt;</span> PROJECTS.DIR
							<span className="blink ml-3">█</span>
						</h2>

						<div className="grid md:grid-cols-2 gap-6">
							{projects.map((project) => (
								<div
									key={project.title}
									className="bg-matrix-darker border-2 border-matrix p-6 md:p-8 matrix-hover matrix-grid"
								>
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center gap-3">
											<project.icon className="w-8 h-8 text-matrix-bright blink-slow" />
											<h3 className="text-2xl text-matrix-bright">
												<span className="blink-fast">&gt;&gt;</span>{" "}
												{project.title}
											</h3>
										</div>
										<span className="px-3 py-1 border border-matrix-bright text-matrix-bright text-xs blink-slow">
											{project.status}
										</span>
									</div>

									<p className="text-matrix mb-6 text-lg">
										<span className="blink-fast">&gt;</span>{" "}
										{project.description}
									</p>

									<div className="space-y-3">
										<p className="text-matrix-bright text-sm">
											<span className="blink-fast">&gt;</span> TECH STACK:
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tech.map((tech) => (
												<span
													key={tech}
													className="border border-matrix px-3 py-1 text-sm text-matrix hover:bg-matrix-dark hover:border-matrix-bright transition-all"
												>
													<span className="blink-fast">[ </span>
													{tech}
													<span className="blink-fast"> ]</span>
												</span>
											))}
										</div>
									</div>

									<div className="mt-6 pt-4 border-t border-matrix">
										<button type="button" className="text-matrix-bright hover:text-white transition-colors flex items-center gap-2">
											<span className="blink-fast">&gt;&gt;</span>
											<span>VIEW PROJECT</span>
											<span className="blink">_</span>
										</button>
									</div>
								</div>
							))}
						</div>

						<div className="mt-12 text-center">
							<p className="text-matrix text-xl">
								<span className="blink-fast">&gt;&gt;</span> MORE PROJECTS ON
								GITHUB
								<span className="blink ml-2">█</span>
							</p>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section
					id="contact"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-4xl w-full">
						<h2 className="text-4xl md:text-5xl text-matrix-bright mb-12 text-center">
							<span className="blink-fast">&gt;</span> CONNECT.SH
							<span className="blink ml-3">█</span>
						</h2>

						<div className="bg-matrix-darker border-2 border-matrix-bright p-8 md:p-12 mb-8 matrix-grid">
							<div className="text-center space-y-6">
								<p className="text-matrix-bright text-2xl md:text-3xl">
									<span className="blink-fast">&gt;&gt;</span> READY TO
									COLLABORATE?
								</p>
								<p className="text-matrix text-lg">
									<span className="blink-fast">&gt;</span> Let's build something
									extraordinary together
									<span className="blink ml-2">█</span>
								</p>
							</div>

							<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
								<a
									href="https://github.com"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-matrix hover:text-matrix-bright border-2 border-matrix px-6 py-4 matrix-hover justify-center"
								>
									<Github className="w-6 h-6 blink-slow" />
									<span className="blink-fast">&gt;</span>
									<span>GITHUB</span>
								</a>

								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-matrix hover:text-matrix-bright border-2 border-matrix px-6 py-4 matrix-hover justify-center"
								>
									<Linkedin className="w-6 h-6 blink-slow" />
									<span className="blink-fast">&gt;</span>
									<span>LINKEDIN</span>
								</a>

								<a
									href="mailto:dev@example.com"
									className="flex items-center gap-3 text-matrix hover:text-matrix-bright border-2 border-matrix px-6 py-4 matrix-hover justify-center"
								>
									<Mail className="w-6 h-6 blink-slow" />
									<span className="blink-fast">&gt;</span>
									<span>EMAIL</span>
								</a>

								<a
									href="https://example.com"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-matrix hover:text-matrix-bright border-2 border-matrix px-6 py-4 matrix-hover justify-center"
								>
									<Globe className="w-6 h-6 blink-slow" />
									<span className="blink-fast">&gt;</span>
									<span>WEBSITE</span>
								</a>
							</div>

							<div className="mt-10 pt-8 border-t-2 border-matrix">
								<div className="bg-black border border-matrix p-4">
									<p className="text-matrix font-mono text-sm">
										<span className="text-matrix-bright blink-fast">&gt;</span>{" "}
										john.doe@developer.com
										<br />
										<span className="text-matrix-bright blink-fast">&gt;</span>{" "}
										San Francisco, CA
										<br />
										<span className="text-matrix-bright blink-fast">&gt;</span>{" "}
										Available for freelance & full-time
									</p>
								</div>
							</div>
						</div>

						<div className="text-center space-y-4">
							<div className="flex items-center justify-center gap-4">
								<div className="h-px w-20 bg-matrix"></div>
								<p className="text-matrix-bright text-xl">
									<span className="blink">&gt; STATUS: ONLINE</span>
									<span className="text-matrix-bright blink-slow ml-3">●</span>
								</p>
								<div className="h-px w-20 bg-matrix"></div>
							</div>
							<p className="text-matrix-dim">
								&copy; 2025 - SYSTEM ACTIVE • ALL RIGHTS RESERVED
							</p>
							<p className="text-matrix-dim text-sm">
								<span className="blink-fast">&gt;</span> POWERED BY MATRIX
								PROTOCOL v3.1.4
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
