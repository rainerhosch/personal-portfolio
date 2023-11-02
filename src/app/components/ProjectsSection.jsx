"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "Website portfolio deployed on NextJS",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rzoktan/personal-portfolio",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "Sistem Keuangan",
    description: "Financial system, for tuition payments.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "MFA",
    description: "MyFeederAsisten is a client app for syns data academy to PDDIKTI",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 4,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 5,
    title: "DApp FlappyOwl Nft",
    description: "Official minting site for flappyowl nft.",
    image: "/images/projects/5.png",
    tag: ["All", "Web3 DApp"],
    gitUrl: "https://flappyowl.fun",
    previewUrl: "/images/projects/5.png",
  },
  {
    id: 6,
    title: "MyKasir",
    description: "This a mobile application, Useful for recording transactions and reports, in retail business",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/images/projects/4.png",
  },
  {
    id: 7,
    title: "NFT Drop",
    description: "Is a dapp for live mint NFT.",
    image: "/images/projects/7.png",
    tag: ["All", "Web3 DApp"],
    gitUrl: "https://nftdrop-dapp.vercel.app/nft-drop",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "DRRRTTT NFT",
    description: "Nft project at polygon blockchain, this nft deployed based on chain.",
    image: "/images/projects/8.png",
    tag: ["All", "Smartcontracts"],
    gitUrl: "https://drrrttt.vercel.app/",
    previewUrl: "/images/projects/8.png",
  },
  {
    id: 9,
    title: "FURU 3D (Testnet NFT)",
    description: "This project nft testnet is deployed on ethereum goerli network.",
    image: "/images/projects/9.png",
    tag: ["All", "Smartcontracts"],
    gitUrl: "https://goerli.etherscan.io/address/0x106cC9D1A3A94D193e46Dfd6480BE3928Cc5Fe57",
    previewUrl: "/images/projects/9.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3 DApp"
          isSelected={tag === "Web3 DApp"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Smartcontracts"
          isSelected={tag === "Smartcontracts"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
