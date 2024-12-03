"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, User, Volleyball } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamUpLandingPage() {
	return (
		<div className="min-h-screen">
			{/* Background illustrations */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<svg
					className="absolute top-0 left-0 w-96 h-96 text-blue-200 opacity-50"
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M44.9,-76.2C59.7,-69.8,74,-59.4,83.1,-45.6C92.2,-31.8,96.1,-15.9,94.3,-0.9C92.4,14,84.8,28.1,75.4,40.6C66,53.1,54.8,64,41.4,70.9C28,77.8,14,80.7,-0.4,81.3C-14.8,82,-29.6,80.4,-43.9,74.7C-58.2,69,-72,59.2,-79.8,45.7C-87.6,32.2,-89.5,15.1,-87.1,-0.9C-84.7,-16.9,-78,-33.8,-68.2,-47.9C-58.4,-62,-45.5,-73.3,-31.1,-80.1C-16.7,-86.9,-0.8,-89.2,13.8,-86.5C28.5,-83.8,57,-82.6,44.9,-76.2Z"
						transform="translate(100 100)"
					/>
				</svg>
				<svg
					className="absolute bottom-0 right-0 w-96 h-96 text-green-200 opacity-50"
					viewBox="0 0 200 200"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="currentColor"
						d="M39.9,-67.1C52.8,-60.3,65,-51.3,72.7,-39.4C80.4,-27.5,83.5,-13.7,83.9,0.2C84.3,14.1,82,28.3,74.7,39.2C67.4,50.2,55.1,58.1,42.2,65.2C29.3,72.3,14.7,78.7,0.2,78.4C-14.3,78.1,-28.5,71.1,-41.6,63.3C-54.7,55.5,-66.5,46.8,-74.7,35.1C-82.9,23.3,-87.4,8.5,-86.5,-5.9C-85.6,-20.3,-79.3,-34.3,-69.8,-44.7C-60.3,-55.1,-47.6,-61.9,-35,-67.3C-22.4,-72.7,-11.2,-76.7,1.3,-78.9C13.8,-81.1,27.1,-73.9,39.9,-67.1Z"
						transform="translate(100 100)"
					/>
				</svg>
			</div>

			{/* Hero Section */}
			<section className="relative flex content-center items-center justify-center h-[100dvh] ">
				<div className="absolute bg-[url('/bg.jpeg')] bg-no-repeat bg-cover h-screen w-[100dvw]" />
				<div className="absolute bg-black/40 z-10 h-screen w-[100dvw]" />
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center">
						<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center z-20">
							<h1 className="text-7xl font-semibold text-gray-200 leading-tight mb-4">
								TeamUp <br />
								<span className="italic text-6xl">
									Hop On, Game On
								</span>
							</h1>
							<p className="mt-4 text-lg text-gray-100 text-balance">
								Your one stop solution for connecting sports
								enthusiasts, joining local games and building a
								community of active players.
							</p>

							<Button className="mt-8 z-20" size="lg" asChild>
								<Link href="#team">Jump In</Link>
							</Button>
							<Button
								className="mt-8 z-20 ml-4"
								size="lg"
								asChild
							>
								<Link href={"/teamup.apk"}>Download APK</Link>
							</Button>
							<Button
								className="mt-8 z-20 ml-4"
								size="lg"
								asChild
							>
								<Link
									href={
										"https://drive.google.com/file/d/1oThD4TMdRlu_ppMrSXZAHZV5TsonkHaW/view?usp=sharing"
									}
								>
									Source Code
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* About the Authors Section */}
			<section className="py-20 bg-white" id="team">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
						Meet the Team
					</h2>
					<div className="flex flex-wrap">
						{["Tom", "Mitchell", "John", "Mehar"].map(
							(name, index) => (
								<div
									key={index}
									className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
								>
									<div className="flex flex-col">
										<Image
											className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 h-[400px] w-auto object-cover"
											src={`/${
												index === 0
													? "tom.jpg"
													: index === 1
													? "mitchel.png"
													: index === 2
													? "john.jpeg"
													: "mehar.png"
											}`}
											width={200}
											height={200}
											alt={name}
										/>
										<div className="text-center mt-6">
											<h1 className="text-gray-900 text-xl font-bold mb-1">
												{name}
											</h1>
											<div className="text-gray-700 font-light mb-2">
												Co-Founder
											</div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			{/* Video Demo Section */}
			<section className="pb-20 pt-12 bg-gray-100">
				<div className="container mx-auto px-4 space-y-8">
					<h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
						See TeamUp in Action
					</h2>
					<div className="flex justify-center">
						<div className="w-full lg:w-8/12 xl:w-2/3">
							<div
								className="relative"
								style={{ paddingBottom: "56.25%" }}
							>
								<iframe
									className="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/9a9SPCUo6XA"
									title="Team Up Demo Video"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-full lg:w-8/12 xl:w-2/3">
							<div
								className="relative"
								style={{ paddingBottom: "56.25%" }}
							>
								<iframe
									className="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/au_uEesB0U8"
									title="Team Up Demo Video"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-full lg:w-8/12 xl:w-2/3">
							<div
								className="relative"
								style={{ paddingBottom: "56.25%" }}
							>
								<iframe
									className="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/BH59JQOno6c"
									title="Team Up Demo Video"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-full lg:w-8/12 xl:w-2/3">
							<div
								className="relative"
								style={{ paddingBottom: "56.25%" }}
							>
								<iframe
									className="absolute inset-0 w-full h-full"
									src="https://www.youtube.com/embed/8NSOQaSIBgw"
									title="Team Up Demo Video"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
						Key Features
					</h2>
					<div className="flex flex-wrap w-full justify-center items-center">
						{[
							{
								icon: Volleyball,
								title: "Discover Local Events",
								description:
									"Find and join sporting events near you",
							},
							{
								icon: PlusCircle,
								title: "Create Events",
								description:
									"Host your own games and invite others",
							},
							{
								icon: User,
								title: "Custom Profiles",
								description:
									"Showcase your sports interests and achievements",
							},
						].map((feature, index) => (
							<div
								key={index}
								className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
							>
								<Card>
									<CardContent className="flex flex-col items-center p-6">
										<feature.icon className="h-12 w-12 text-blue-500 mb-4" />
										<h3 className="text-lg font-semibold text-gray-800 mb-2">
											{feature.title}
										</h3>
										<p className="text-sm text-gray-600 text-center">
											{feature.description}
										</p>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Diagram Section */}
			<section className="pb-20 pt-12 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
						How TeamUp Works
					</h2>
					<div className="flex justify-center">
						<div className="w-full lg:w-8/12 xl:w-2/3 space-y-8">
							<Image
								className="rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
								src="/mvvm.png"
								width={800}
								height={600}
								alt="Team Up Diagram"
							/>
							<Image
								className="rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
								src="/db.png"
								width={800}
								height={600}
								alt="Team Up Diagram"
							/>
							<Image
								className="rounded-lg drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
								src="/thread.png"
								width={800}
								height={600}
								alt="Team Up Diagram"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
