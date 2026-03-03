import React, { useState } from 'react'; // Added useState here
import { motion, AnimatePresence } from 'framer-motion';

const QuestLog = () => {
    const [expandedQuest, setExpandedQuest] = useState(null);

    const toggleQuest = (index) => {
        setExpandedQuest(expandedQuest === index ? null : index);
    };

    const quests = [
        {
            title: "Full Stack Developer",
            organization: "Affimintus Technologies",
            duration: "May 2025 - Present",
            status: "ACTIVE",
            rewards: ["React Mastery", "Django Backend Architecture", "API Engineering"],
            description: "Successfully transitioned into technical development, building responsive web applications and scalable backends.",
            objectives: [
                "Developing full-stack features using React and Django.",
                "Architecting RESTful APIs for seamless data flow.",
                "Optimizing frontend performance and state management."
            ]
        },
        {
            title: "Marketing Specialist",
            organization: "InfoBeans / IT Sector",
            duration: "Oct 2022 - Apr 2025",
            status: "COMPLETED",
            rewards: ["Professional Communication", "User Psychology", "Project Leadership"],
            description: "Established high-level professional expertise in the IT marketing ecosystem, providing a unique user-centric perspective to code.",
            objectives: [
                "Created keyword-optimized blog posts using Google Ads Keyword Planner.",
                "Managed multi-platform social media campaigns for 10+ brands.",
                "Collaborated with designers to produce brand-aligned digital assets.",
                "Coordinated with graphic design teams for print advertising and infographics."
            ]
        },
        {
            title: "Content Writer",
            organization: "Indiyaa Distribution Network / Saptarishi Herbals",
            duration: "Apr 2019 - Aug 2022",
            status: "COMPLETED",
            rewards: ["Content Strategy", "Search Engine Optimization", "Social Media Management"],
            description: "Created keyword-optimized blog posts using Google Ads Keyword Planner and managed multi-platform social media campaigns for 10+ brands.",
            objectives: [
                "Led website migration projects and managed backend publishing via WordPress VIP.",
                "Created technical documentation, podcast scripts, and content calendars.",
                "Reported bugs and coordinated with QA teams for timely issue resolution."
            ]
        }
    ];

    return (
        <section className="mt-20 max-w-4xl mx-auto px-4 pb-20">
            <h2 className="text-2xl font-mono font-bold text-yellow-500 mb-8 uppercase tracking-[0.2em]">Active_Quest_Log</h2>

            <div className="space-y-8">
                {quests.map((quest, index) => (
                    <div key={quest.title} className="relative border-l-2 border-slate-700 pl-8 ml-4 group">
                        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 ${quest.status === 'ACTIVE' ? 'bg-cyan-500 animate-pulse' : 'bg-slate-500'}`}></div>

                        <div
                            onClick={() => toggleQuest(index)}
                            className="bg-slate-800/30 p-6 rounded-r-xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer group/card"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-100 group-hover/card:text-cyan-400 transition-colors">
                                        {quest.title}
                                    </h3>
                                    <p className="text-cyan-400 text-sm font-mono">{quest.organization} | {quest.duration}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${quest.status === 'ACTIVE' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-slate-700 text-slate-400'}`}>
                                        {quest.status}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-mono hidden md:block">
                                        {expandedQuest === index ? '[ - ] COLLAPSE' : '[ + ] DETAILS'}
                                    </span>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{quest.description}</p>

                            <AnimatePresence>
                                {expandedQuest === index && quest.objectives && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-4 bg-slate-900/50 p-4 rounded border-l-2 border-yellow-500/50">
                                            <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-2">
                                                Mission_Objectives:
                                            </p>
                                            <ul className="space-y-2">
                                                {/* Added optional chaining ?. for safety */}
                                                {quest.objectives?.map((obj, i) => (
                                                    <li key={i} className="text-[11px] text-slate-400 flex gap-2 leading-relaxed">
                                                        <span className="text-yellow-500/60 font-bold">»</span>
                                                        {obj}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {quest.rewards.map(reward => (
                                    <span key={reward} className="text-[10px] bg-slate-900 border border-slate-700 px-2 py-1 rounded text-yellow-500/80">
                                        + {reward}
                                    </span>
                                ))}
                            </div>

                            <div className="md:hidden mt-4 text-center text-[9px] text-slate-600 tracking-widest font-bold">
                                {expandedQuest === index ? 'TAP TO HIDE DETAILS' : 'TAP TO VIEW OBJECTIVES'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuestLog;



// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const QuestLog = () => {
//     // Track which quest is expanded (by index or title)
//     const [expandedQuest, setExpandedQuest] = useState(null);

//     const toggleQuest = (index) => {
//         setExpandedQuest(expandedQuest === index ? null : index);
//     };

//     const quests = [
//         {
//             title: "Full Stack Developer",
//             organization: "Affimintus Technologies",
//             duration: "May 2025 - Present",
//             status: "ACTIVE",
//             rewards: ["React Mastery", "Django Backend Architecture", "API Engineering"],
//             description: "Successfully transitioned into technical development, building responsive web applications and scalable backends."
//         },
//         {
//             title: "Marketing Specialist",
//             organization: "InfoBeans / IT Sector",
//             duration: "Oct 2022 - Apr 2025",
//             status: "COMPLETED",
//             rewards: ["Professional Communication", "User Psychology", "Project Leadership"],
//             description: "Established high-level professional expertise in the IT marketing ecosystem, providing a unique user-centric perspective to code."
//         },

//         {
//             title: "Content Writer",
//             organization: "Indiyaa Distribution Network / Saptarishi Herbals",
//             duration: "Apr 2019 - Aug 2022",
//             status: "COMPLETED",
//             rewards: ["Content Strategy", "Search Engine Optimization", "Social Media Management"],
//             description: "Created keyword-optimized blog posts using Google Ads Keyword Planner and managed multi-platform social media campaigns for 10+ brands."
//         }
//     ];

//     return (
//         <section className="mt-20 max-w-4xl mx-auto px-4 pb-20">
//             <h2 className="text-2xl font-mono font-bold text-yellow-500 mb-8 uppercase tracking-[0.2em]">Active_Quest_Log</h2>

//             <div className="space-y-8">
//                 {quests.map((quest, index) => (
//                     <div key={quest.title} className="relative border-l-2 border-slate-700 pl-8 ml-4 group">
//                         <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 ${quest.status === 'ACTIVE' ? 'bg-cyan-500 animate-pulse' : 'bg-slate-500'}`}></div>

//                         <div
//                             onClick={() => toggleQuest(index)}
//                             className="bg-slate-800/30 p-6 rounded-r-xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer group/card"
//                         >
//                             <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
//                                 <div>
//                                     <h3 className="text-xl font-bold text-slate-100 group-hover/card:text-cyan-400 transition-colors">
//                                         {quest.title}
//                                     </h3>
//                                     <p className="text-cyan-400 text-sm font-mono">{quest.organization} | {quest.duration}</p>
//                                 </div>
//                                 <div className="flex flex-col items-end gap-2">
//                                     <span className={`text-[10px] font-bold px-2 py-1 rounded ${quest.status === 'ACTIVE' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-slate-700 text-slate-400'}`}>
//                                         {quest.status}
//                                     </span>
//                                     {/* Visual hint for mobile users */}
//                                     <span className="text-[10px] text-slate-500 font-mono hidden md:block">
//                                         {expandedQuest === index ? '[ - ] COLLAPSE' : '[ + ] DETAILS'}
//                                     </span>
//                                 </div>
//                             </div>

//                             <p className="text-slate-400 text-sm mb-4 leading-relaxed">{quest.description}</p>

//                             {/* Expansion Area */}
//                             <AnimatePresence>
//                                 {expandedQuest === index && quest.objectives && (
//                                     <motion.div
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         className="overflow-hidden"
//                                     >
//                                         <div className="mt-4 bg-slate-900/50 p-4 rounded border-l-2 border-yellow-500/50">
//                                             <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mb-2">
//                                                 Mission_Objectives:
//                                             </p>
//                                             <ul className="space-y-2">
//                                                 {quest.objectives.map((obj, i) => (
//                                                     <li key={i} className="text-[11px] text-slate-400 flex gap-2 leading-relaxed">
//                                                         <span className="text-yellow-500/60 font-bold">»</span>
//                                                         {obj}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>

//                             <div className="flex flex-wrap gap-2 mt-4">
//                                 {quest.rewards.map(reward => (
//                                     <span key={reward} className="text-[10px] bg-slate-900 border border-slate-700 px-2 py-1 rounded text-yellow-500/80">
//                                         + {reward}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Mobile-only hint */}
//                             <div className="md:hidden mt-4 text-center text-[9px] text-slate-600 tracking-widest font-bold">
//                                 {expandedQuest === index ? 'TAP TO HIDE DETAILS' : 'TAP TO VIEW OBJECTIVES'}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default QuestLog;