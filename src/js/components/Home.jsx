import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const cards = [
	{
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		button: "Find Out More!"
	},
	{
		image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		button: "Find Out More!"
	},
	{
		image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		button: "Find Out More!"
	},
	{
		image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		button: "Find Out More!"
	}
];

	return (
		<div>
			<Navbar />

			<div className="container mt-4">
				<Jumbotron />

				<div className="row mt-4">
					{cards.map((item, index) => (
						<div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
							<Card
								image={item.image}
								title={item.title}
								text={item.text}
								button={item.button}
							/>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;