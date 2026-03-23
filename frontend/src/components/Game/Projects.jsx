import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "TechnoCrops Website",
            tech: ["React", "Django", "PostgreSQL", "Stripe"],
            description: "A modern full-stack company website featuring responsive UI, smooth scroll animations, and a Django-powered contact system.",
            link: "https://technocorps.com/",
            difficulty: "Hard"
        },
        {
            id: 2,
            title: "KBC Quiz Game App",
            tech: ["JavaScript", "CSS", "HTML"],
            description: "An interactive quiz game inspired by Kaun Banega Crorepati featuring dynamic question flow, score tracking, and responsive game UI.",
            link: "https://priyanshi4325.github.io/kbc-game/",
            difficulty: "Medium"
        },
        {
            id: 3,
            title: "AI Resume Chatbot",
            tech: ["React", "Fast API", "Open AI Embeddings"],
            description: "An AI-powered chatbot that lets the user upload any resume (PDF) and ask questions about it in natural language.",
            link: "https://ai-resume-chat.vercel.app/",
            difficulty: "Medium"
        }
    ];

    return (
        <section className="mt-20 max-w-6xl mx-auto px-4 scroll-mt-24" id='projects'>
            <h2 className="text-2xl font-mono font-bold text-purple-500 mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-purple-500/30"></span>
                SELECT_PROJECTS
                <span className="h-px flex-1 bg-purple-500/30"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -10 }}
                        className="group relative bg-slate-900/80 border-2 border-slate-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all shadow-xl"
                    >
                        {/* Top Bar Decoration */}
                        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-500 tracking-tighter">ID: 00{project.id}</span>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-[10px] text-purple-500 font-mono uppercase tracking-widest">
                                    Difficulty: {project.difficulty}
                                </span>
                            </div>

                            <p className="text-sm text-slate-400 mb-6 leading-relaxed h-20">
                                {project.description}
                            </p>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[9px] bg-purple-500/10 border border-purple-500/30 text-purple-400 px-2 py-0.5 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Action Button */}
                            <a
                                href={project.link}
                                className="block text-center py-3 bg-slate-800 border border-slate-600 rounded font-bold text-xs tracking-[0.2em] group-hover:bg-purple-600 group-hover:border-purple-400 transition-all uppercase"
                            >
                                Launch_Mission
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;