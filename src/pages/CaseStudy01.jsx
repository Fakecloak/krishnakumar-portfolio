import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import CaseStudyPage from "../components/case-study/CaseStudyPage";

import heroImage from "../assets/case-study1/hero.png";
import requirementsImage from "../assets/case-study1/requirements.svg";
import userFlowImage from "../assets/case-study1/user-flow.svg";
import wireframesImage from "../assets/case-study1/wireframes.png";
import finalScreensImage from "../assets/case-study1/final-screens.svg";
import designSystemImage from "../assets/case-study1/design-system.svg";

import whiskImage0002Image from "../assets/case-study1/0002.png";

const caseStudy01 = {
  title: "Lil Big Things",

  description: "Making work progress clear for teams and customers.",

  backAnchor: "/#case-study-pixelwhisk",

  heroImage,

  sidebar: {
    role: {
      label: "My role",
      value: "Product Designer",
    },

    contribution: {
      label: "Contribution",
      tags: [
        "Requirements Analysis",
        "Use Case",
        "User Flows",
        "Wireframing",
        "UI Design",
        "Design System",
        "Developer Handoff",
        "Post Launch Support",
      ],
    },

    collaborated: {
      label: "Collaborated with",
      value: "CEO & Developers",
    },
  },

  sections: [
    {
      id: "requirements",
      type: "image-section",
      title: "Starting with the requirements",
      subtitle: "Turning a Notion document into a product plan",
      paragraphs: [
        "The project started with a Notion document containing the product requirements and expected functionality. Since there was no existing product or interface to build upon, my first task was to understand what the team wanted to create and how the different requirements...",
        "I went through the requirements, prepared my own notes, and presented my understanding back to the team to ensure I had a clear foundation before starting the design.",
      ],
      image: requirementsImage,
      imageHeight: 527,
      sectionHeight: 817,
    },

    {
      id: "product-flow",
      type: "image-section",
      title: "Defining how the product works",
      subtitle: "Mapping requirements into user actions",
      paragraphs: [
        "Once I had a clearer understanding of the product, I created a use case diagram based on the requirements.",
        "The goal was to translate the feature list into a clearer picture of how the internal team and clients would interact with the product. This helped me move from thinking about individual requirements to understanding the actions and workflows the product needed to support.",
      ],
      image: userFlowImage,
      imageHeight: 1187,
      sectionHeight: 1477,
    },

    {
      id: "challenge",
      type: "text-section",
      title: "The challenge",
      subtitle: "Designing a connected experience, not just individual screens",
      paragraphs: [
        "The product needed to bring requests, progress, blockers, and backlogs into one place for both the internal team and clients.",
        "One of my main challenges was turning a broad set of requirements into an experience where different parts of the product felt connected. Instead of approaching every feature as a separate screen, I needed to consider how users would move between different areas and...",
      ],
      sectionHeight: 242,
    },

    {
      id: "exploring",
      type: "image-section",
      title: "Exploring the experience",
      subtitle: "From ideas to structured workflows",
      paragraphs: [
        "I began exploring the product through early sketches and wireframes, focusing first on structure and workflow rather than visual details.",
        "This stage helped me test different layouts, organize information, and work through how the various parts of the product could connect. The wireframes went through multiple iterations as the requirements and product structure became clearer.",
      ],
      image: wireframesImage,
      imageHeight: 843,
      sectionHeight: 1133,
      imageRadius: 8,
      imageGap: 12,
    },

    {
      id: "final-design",
      type: "image-section",
      title: "Bringing the product together",
      subtitle: "Designing the complete product experience",
      paragraphs: [
        "After defining the structure through wireframes, I designed the final interface across the product.",
        "As the sole designer on the project, I worked across all major screens and workflows, taking the product from the initial requirements through to high-fidelity designs ready for development.",
        "My focus was on creating a clear visual hierarchy and consistent experience while ensuring that the different areas of the product worked together as one connected system.",
      ],
      image: finalScreensImage,
      imageHeight: 1397,
      sectionHeight: 1695,
      imageGap: 12,
    },

    {
      id: "design-system",
      type: "image-section",
      title: "Creating consistency as the product grew",
      subtitle: "Building reusable components and patterns",
      paragraphs: [
        "As more screens and features were added, maintaining consistency became increasingly important.",
        "I created reusable UI components and visual patterns that could be applied across the product, helping maintain a more consistent experience while designing new screens and features.",
        "This included recurring elements such as buttons, inputs, cards, status indicators, navigation patterns, and typography.",
      ],
      image: designSystemImage,
      imageHeight: 527,
      sectionHeight: 825,
    },

    {
      id: "supporting-development",
      type: "text-section",
      title: "Supporting development",
      subtitle: "Staying involved beyond the final designs",
      paragraphs: [
        "My contribution continued into the development stage. I worked directly with the development team to clarify design decisions and help resolve implementation issues related to spacing, alignment, and other UI details.",
        "This allowed me to see how the designs translated into the final product and supported the team when additional clarification was needed.",
      ],
      sectionHeight: 217,
    },
  ],

  outcome: {
    title: "Outcome",
    subtitle: "From requirements to a working product",
    paragraph:
      "What started as a Notion document containing a list of requirements was transformed into a live product now used by the Lil Big Things internal team and its clients. The product provides a central place to manage requests, track progress, identify blockers, and monitor backlogs.",
  },

  credits: {
    title: "Credits",
    paragraph:
      "This project was designed and developed as part of internal work at Lil Big Things. All product context, requirements, and collaboration were provided by the Lil Big Things team.",
    website: "https://www.lilbigthings.com",
  },

  nextCaseStudy: {
    name: "PixelWhisk",
    path: "/case-study/pixelwhisk",
    animationImage: whiskImage0002Image,
  },
};

export default function CaseStudy01() {
  return (
    <div className="relative" style={{ isolation: 'isolate' }}>
      {/* Static background — fixed to viewport, matches About section bg */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: "url('/site-bg.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <CaseStudyPage data={caseStudy01} />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}