import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import CaseStudyPage from "../components/case-study/CaseStudyPage";

import productImage from "../assets/case-study2/product.svg";
import exploringFlowImage from "../assets/case-study2/Frame_2147258296.svg";
import refiningExperienceImage from "../assets/case-study2/Frame_2147258297.svg";
import finalProductImage from "../assets/case-study2/Frame_2147258298.png";
import buildingFoundationImage from "../assets/case-study2/Frame_2147258300.svg";
import caseStudy0001Image from "../assets/case-study2/0001.png";

const caseStudy02 = {
  title: "PixelWhisk",

  description: "A clearer way to manage website development from request to delivery.",

  backAnchor: "/#case-study-pixelwhisk",

  heroVideoUrl: "https://www.youtube.com/embed/HqvARXk1TcU?autoplay=1&controls=1", 

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
        "Low-fi Wireframing",
        "Hi-fi Wireframing",
        "UI Design",
        "Design System",
      ],
    },

    collaborated: {
      label: "Collaborated with",
      value: "CEO & Developers",
    },
  },

  sections: [
    {
      id: "project-context",
      type: "text-section",
      title: "Project Context",
      subtitle: "Turning a website development service into a product experience",
      paragraphs: [
        "PixelWhisk was created around a simple idea: give clients a dedicated place to manage their website development requests from start to finish.",
        "The process involved multiple stages. Clients submit their Figma designs, the internal team reviews the request and provides an estimate, developers work on the project, and the completed website is delivered back to the client.",
        "The product needed to bring these stages together while supporting three groups of users: clients, the internal team, and developers.",
      ],
      sectionHeight: 242,
    },

    {
      id: "challenge",
      type: "text-section",
      title: "The challenge",
      subtitle: "Keeping clients informed without constant follow-ups",
      paragraphs: [
        "A key challenge was making the development process more transparent for clients.",
        "Without a dedicated platform, clients would need to contact the team to understand what was happening with their request. PixelWhisk was designed to give them visibility throughout the process—from submitting a request to receiving an estimate, following development progress, and accessing the final delivery.",
        "At the same time, the internal team and developers needed a structured way to manage requests, provide estimates, and update the progress of ongoing work.",
        "My goal was to create a clear and straightforward experience for all three groups, ensuring that the product felt cohesive and easy to navigate.",
      ],
      sectionHeight: 242,
    },

    {
      id: "mapping-product",
      type: "image-section",
      title: "Mapping the Product",
      subtitle: "Defining how different users interact with the platform",
      paragraphs: [
        "Based on the requirements and initial discussions, I created a use case diagram to map the key actions across the product.",
        "This helped me understand what clients, the internal team, and developers needed to do within the platform and how their actions connected around a development request.",
        "Creating this structure before designing screens gave me a clearer foundation for exploring the product experience.",
      ],
      image: productImage,
      imageHeight: 596,
      imageRadius: 6,
      imageBg: "#FFFFFF",
      imageBorder: "0.5px solid rgba(255, 255, 255, 0.7)",
      innerImageStyle: {
        position: "absolute",
        top: "23px",
        left: "20px",
        width: "744px",
        height: "550px",
        display: "block",
      },
      sectionHeight: 886,
    },

    {
      id: "exploring-flow",
      type: "image-section",
      title: "Exploring the Flow",
      subtitle: "Working through the experience before focusing on the interface",
      paragraphs: [
        "One of the early challenges was understanding how users would move through the product and how the different stages of a request should connect.",
        "To explore this, I created low-fidelity wireframes in FigJam. This allowed me to focus on the structure and flow of the experience without getting distracted by visual details.",
        "The low-fi exploration helped clarify the user journey and establish how the product should work before moving into more detailed screens.",
      ],
      image: exploringFlowImage,
      imageHeight: 1635,
      imageRadius: 6,
      imageBorder: "0.5px solid rgba(255, 255, 255, 0.7)",
      sectionHeight: 1925,
    },

    {
      id: "refining-experience",
      type: "image-section",
      title: "Refining the Experience",
      subtitle: "Giving structure to the product before finalizing the UI",
      paragraphs: [
        "Once the overall workflow became clearer, I translated the initial concepts into more detailed high-fidelity wireframes.",
        "At this stage, I focused on organizing information, defining screen structures, and making the different stages of a request easier to understand.",
        "This helped establish a stronger foundation for the final interface while ensuring that the different parts of the product remained connected.",
      ],
      image: refiningExperienceImage,
      imageHeight: 1896,
      imageRadius: 6,
      imageBorder: "0.5px solid rgba(255, 255, 255, 0.7)",
      imageBg: "#000000",
      sectionHeight: 2194,
    },

    {
      id: "final-product",
      type: "image-section",
      title: "The Final Product",
      subtitle: "Bringing the complete request journey into one experience",
      paragraphs: [
        "The final design brings together the key stages of the PixelWhisk workflow—from submitting a Figma design for development to estimation, development progress, and final delivery.",
        "I designed the complete product experience across the different user needs, ensuring that clients, the internal team, and developers could interact with the same workflow based on their role.",
        "The focus was on making each request easier to follow while keeping progress and updates visible throughout its lifecycle.",
      ],
      image: finalProductImage,
      imageHeight: 1896,
      imageRadius: 6,
      imageBorder: "0.5px solid rgba(255, 255, 255, 0.7)",
      imageBg: "#DCDCDC",
      sectionHeight: 2194,
    },

    {
      id: "building-foundation",
      type: "image-section",
      title: "Building a Consistent UI Foundation",
      subtitle: "Creating reusable components for a growing product",
      paragraphs: [
        "As the product expanded across multiple user roles and workflows, maintaining consistency across the interface became increasingly important.",
        "I created a component library with reusable UI patterns and elements that could be used across different parts of PixelWhisk. This helped maintain consistency while designing the product and made recurring interface patterns easier to reuse.",
      ],
      image: buildingFoundationImage,
      imageHeight: 527,
      imageRadius: 6,
      sectionHeight: 817,
    },

    {
      id: "ready-for-development",
      type: "text-section",
      title: "Ready for Development",
      subtitle: "From an early idea to a development-ready product",
      paragraphs: [
        "PixelWhisk is currently ready for development.",
        "I took the project from an initial verbal brief through requirements analysis, use case mapping, workflow exploration, low-fi wireframes, high-fi wireframes, and final UI design.",
      ],
      sectionHeight: 217,
    },
  ],


  credits: {
    title: "Credits",
    paragraph:
      "PixelWhisk is a product owned by Lil Big Things. This project was designed as part of my work at Lil Big Things, where I worked as the sole designer, taking the product from initial requirements to a complete, development-ready experience.",
     website: "https://www.pixelwhisk.com",
  },

  nextCaseStudy: {
    name: "Lil Big Things",
    path: "/case-study/lil-big-things",
    animationImage: caseStudy0001Image,
  },
};

export default function CaseStudy02() {
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
        <CaseStudyPage data={caseStudy02} />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
