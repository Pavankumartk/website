import type { NextPage } from "next";
import Image from "next/image";
import "./whitepapers.css";

const WhitePapers: NextPage = () => {
	return (
		<main className="whitePapers">
			<div className="frameDiv">
				<div className="resourcesWrapper">
					<div className="resources2">Resources</div>
				</div>
				<div className="arrowRightDoubleParent">
					<Image
						className="arrowDown01Icon"
						src="/assets/whitepapers-images/arrowright.svg"
						width={16}
						height={16}
						alt=""
					/>
					<b className="resources2">White Papers</b>
				</div>
			</div>

			<div className="frameParent2">
				<Image
					className="heroFrameSvg"
					src="/assets/whitepapers-images/whitepapers-hero-frame.svg"
					width={1304}
					height={666}
					alt=""
					aria-hidden="true"
					priority
				/>

				<div className="frameWrapper">
					<div className="frameParent3">
						<div className="frameParent4">
							<div className="frameParent5">
								<div className="frameIcon">White Papers</div>
								<h1 className="insightsShapingTheContainer">
									<span className="insightsShapingThe">Insights Shaping the </span>
									<span className="futureOfLearning">Future of Learning</span>
								</h1>
							</div>
							<div className="exploreTrendsShaping">
								Explore Trends Shaping Digital Learning.
							</div>
						</div>
						<a className="frameChild2" href="/book-a-demo">
							Book a Demo
						</a>
					</div>
				</div>

				<div className="heroPhotoMask">
					<Image
						className="heroPhoto"
						src="/assets/whitepapers-images/ellipse 415.png"
						width={614}
						height={614}
						sizes="(max-width: 768px) 90vw, 614px"
						alt="Woman reading books in a library"
						priority
					/>
				</div>
			</div>

			<div className="frameParent6">
				<Image className="frameChild4" width={481.5} height={50.4} sizes="100vw" alt="" />
				<b className="builtForEducators">
					Built for Educators! Leaders! and Decision Makers
				</b>
				<div className="valuableInsightsHelping">
					Valuable insights helping leaders improve learning and organizational performance.
				</div>
			</div>

			<div className="whitePapersChild" />

			<div className="frameParent7">
				<Image
	className="topicsBackground"
	src="/assets/whitepapers-images/whitepapers-topics-background.svg"
	width={1488}
	height={831}
	alt=""
	aria-hidden="true"
	priority
/>
				<div className="frameParent8">
					<div className="frameWrapper2">
						<div className="frameParent9">
							<div className="frameWrapper3">
								<div className="exploringKeyTopicsInModernParent">
									<b className="exploringKeyTopics">
										Exploring Key Topics In Modern Learning
									</b>
									<div className="neurolxpWhitePapers">
										NeuroLXP white papers focus on critical areas influencing the
										evolution of digital learning.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="frameParent10">
						<div className="topicCard topicCardPurple">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/chat-bot.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>AI-Powered<br />LMS</b>
							</div>
						</div>

						<div className="topicCard topicCardBlue">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/monitor.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>Digital Learning<br />Solutions</b>
							</div>
						</div>

						<div className="topicCard topicCardPink">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/chart-up.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>Workforce<br />Upskilling</b>
							</div>
						</div>

						<div className="topicCard topicCardTeal">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/trending-down.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>Learning<br />Analytics</b>
							</div>
						</div>

						<div className="topicCard topicCardGold">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/gamepad-01.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>Gamified<br />Learning</b>
							</div>
						</div>

						<div className="topicCard topicCardOrange">
							<div className="topicIconCircle">
								<Image
									className="topicIcon"
									src="/assets/whitepapers-images/user-02.svg"
									width={34}
									height={34}
									alt=""
								/>
							</div>
							<div className="topicCardInner">
								<b>Personalized<br />Learning</b>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="frameParent17">
				<div className="frameWrapper8">
					<div className="frameParent18">
						<div className="turnInsightsIntoActionWrapper">
							<b className="turnInsightsInto">Turn Insights into Action</b>
						</div>
						<div className="provenStrategiesFor">
							Proven strategies for better learning and engagement.
						</div>
					</div>
				</div>

				<div className="frameWrapper9">
					<div className="frameWrapper10">
						<div className="frameWrapper11">
							<div className="frameParent19">
								{[
									"Modernize Learning",
									"Boost Engagement",
									"Leverage AI & Analytics",
									"Scale Training",
									"Measure Outcomes",
								].map((item) => (
									<div className="frameParent20" key={item}>
										<Image className="frameChild15" width={70.1} height={70.1} sizes="100vw" alt="" />
										<div>{item}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="whitePapersInner">
				<div className="frameParent25">
					<div className="frameWrapper3">
						<div className="learnInnovateTransformParent">
							<b className="learnInnovateTransform">Learn! Innovate! Transform!</b>
							<div className="exploreNeurolxpWhite">
								Explore NeuroLXP White Papers and discover research-driven insights to build smarter, more impactful learning experiences.
							</div>
						</div>
					</div>
					<div className="frameChild6" />
				</div>
			</div>
		</main>
	);
};

export default WhitePapers;
