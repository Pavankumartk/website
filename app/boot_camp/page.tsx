"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "./bootcamp.css";

type AccordionId = 1 | 2 | 3;

const highlights = [
  {
    number: "1",
    title: "Practical Coding",
    text: "Problem solving",
  },
  {
    number: "2",
    title: "Project Learning",
    text: "Hands-on Practice",
  },
  {
    number: "3",
    title: "Career Readiness",
    text: "Technology Careers",
  },
];

const practicalCards = [
  {
    title: "Writing and Testing code",
    icon: "/assets/brace.png",
    tone: "blue",
  },
  {
    title: "Web & App Development",
    icon: "/assets/globe.png",
    tone: "purple",
  },
  {
    title: "Debug & Optimize",
    icon: "/assets/icon.png",
    tone: "pink",
  },
  {
    title: "Programming Challenge",
    icon: "/assets/icon2.png",
    tone: "green",
  },
];

const accordionCards = [
  {
    id: 1 as AccordionId,
    number: "01",
    title: "Accelerated Learning",
    description: "From coding basics to real-world applications.",
    detailsTitle: "Bootcamp learning typically includes:",
    points: [
      "Coding Fundamentals",
      "Coding Challenges",
      "Hands-On Labs",
      "Real Projects",
      "Performance Feedback",
    ],
  },
  {
    id: 2 as AccordionId,
    number: "02",
    title: "Career Tech Training",
    description: "Build practical, career-ready technology skills.",
    detailsTitle: "Career-Focused Training Includes:",
    points: [
      "Software developer",
      "Web developer",
      "Application developer",
      "Technology analyst",
      "Programming specialist",
    ],
  },
  {
    id: 3 as AccordionId,
    number: "03",
    title: "Education & Enterprise Ready",
    description: "Deploy across diverse learning environments.",
    detailsTitle: "Used learning environments, including:",
    points: [
      "Universities & Colleges",
      "Technical Academies",
      "Corporate Programs",
      "Upskilling Programs",
    ],
  },
];

export default function CodingBootcampPage() {
  const [openCards, setOpenCards] = useState<AccordionId[]>([]);

  const toggleCard = (id: AccordionId) => {
    setOpenCards((current) =>
      current.includes(id)
        ? current.filter((cardId) => cardId !== id)
        : [...current, id]
    );
  };

  return (
    <>
      <Header />

      <main className="bootcamp-page">
        <div className="bootcamp-shell">
          <nav className="bootcamp-breadcrumb" aria-label="Breadcrumb">
            <span>Neuro Labs</span>
            <span className="bootcamp-breadcrumb-arrow" aria-hidden="true">
              ››
            </span>
            <strong>Coding Bootcamps</strong>
          </nav>

          <section className="bootcamp-hero">
            <div className="bootcamp-hero-inner">
              <div className="bootcamp-hero-copy">
                <span className="bootcamp-pill">Coding Bootcamps</span>

                <h1>
                  Master Software Development Through{" "}
                  <span>Intensive Learning</span>
                </h1>

                <p>
                  NeuroLabs Coding Bootcamps build job-ready programming skills
                  through intensive, hands-on learning, real-world coding,
                  interactive labs, and expert mentorship.
                </p>
              </div>

              <Image
                className="bootcamp-hero-student"
                src="/assets/student.png"
                width={366}
                height={578}
                alt="Coding bootcamp student"
                priority
              />
            </div>
          </section>

          <section className="bootcamp-highlights" aria-label="Bootcamp highlights">
            {highlights.map((item) => (
              <article className="bootcamp-highlight" key={item.number}>
                <div className="bootcamp-highlight-number-wrap">
                  <Image
                    src="/assets/design.png"
                    width={132}
                    height={94}
                    alt=""
                    aria-hidden="true"
                    className="bootcamp-highlight-design"
                  />
                  <span className="bootcamp-highlight-number">{item.number}</span>
                </div>

                <div className="bootcamp-highlight-copy">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </section>

          <section className="bootcamp-practical">
            <div className="bootcamp-section-heading">
              <span className="bootcamp-pill bootcamp-pill-small">
                Practical Learning
              </span>
              <h2>Learn by Building Real Projects</h2>
              <p>
                Build real projects and solve coding challenges that mirror
                real-world development.
              </p>
            </div>

            <div className="bootcamp-practical-grid">
              {practicalCards.map((card) => (
                <article
                  className={`bootcamp-practical-card bootcamp-practical-card--${card.tone}`}
                  key={card.title}
                >
                  <div className="bootcamp-practical-icon-wrap">
                    <div className="bootcamp-practical-icon">
                      <Image
                        src={card.icon}
                        width={40}
                        height={40}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{card.title}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="bootcamp-career-banner">
            <div className="bootcamp-career-banner-inner">
              <h2>
                Prepare for high-demand careers in software and data technology
              </h2>
            </div>
          </section>

          <section className="bootcamp-accordion-section">
            <div className="bootcamp-accordion-grid">
              {accordionCards.map((card) => {
                const isOpen = openCards.includes(card.id);

                return (
                  <article
                    className={`bootcamp-accordion-card ${
                      isOpen ? "is-open" : ""
                    }`}
                    key={card.id}
                  >
                    <div className="bootcamp-accordion-details">
                      <h3>{card.detailsTitle}</h3>
                      <ul>
                        {card.points.map((point, index) => (
                          <li key={point}>
                            <span
                              className={`bootcamp-dot ${
                                index % 2 === 0
                                  ? "bootcamp-dot--pink"
                                  : "bootcamp-dot--blue"
                              }`}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bootcamp-accordion-summary">
                      <div className="bootcamp-accordion-number">
                        <strong>{card.number}</strong>
                        <span />
                      </div>

                      <div className="bootcamp-accordion-divider" />

                      <div className="bootcamp-accordion-copy">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>

                      <button
                        type="button"
                        className={`bootcamp-accordion-toggle ${
                          isOpen ? "is-open" : ""
                        }`}
                        onClick={() => toggleCard(card.id)}
                        aria-expanded={isOpen}
                        aria-label={
                          isOpen
                            ? `Collapse ${card.title}`
                            : `Expand ${card.title}`
                        }
                      >
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 3.5L12 10.5L19 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 9.5L12 16.5L19 9.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="bootcamp-cta">
            <Image
              className="bootcamp-cta-bg"
              src="/assets/bootbg.png"
              width={1280}
              height={800}
              alt=""
              aria-hidden="true"
            />

            <div className="bootcamp-cta-content">
              <div>
                <h2>
                  NeuroLabs Coding Bootcamps Fast-Track Your Coding Journey
                </h2>
                <p>
                  Accelerate your coding journey with hands-on projects, expert
                  guidance, and industry-ready training.
                </p>
              </div>

              <button type="button" className="bootcamp-demo-button">
                Book a Demo
              </button>
            </div>
          </section>

          <section className="bootcamp-future">
            <div className="bootcamp-future-inner">
              <h2>Future-Ready Tech Careers</h2>
              <Image
                src="/assets/tech.png"
                width={1216}
                height={548}
                alt="Future-ready technology careers"
                className="bootcamp-future-image"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
