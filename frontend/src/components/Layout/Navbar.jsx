import React from 'react';

const Navbar = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-slate-900/80 backdrop-blur-md border-b-2 border-cyan-500/30">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                
                {/* Branding */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cyan-500 rounded-sm rotate-45 flex items-center justify-center">
                        <span className="text-slate-900 font-bold -rotate-45 text-xs md:text-base">P</span>
                    </div>
                    <span className="font-mono font-bold tracking-widest text-cyan-400 text-xs md:text-sm">
                        DEV_QUEST_v1.0
                    </span>
                </div>

                {/* Menu */}
                <ul className="hidden md:flex gap-8 font-mono text-sm">
                    {[
                        { label: 'Profile', id: 'profile' },
                        { label: 'Inventory', id: 'inventory' },
                        { label: 'Projects', id: 'projects' },
                        { label: 'Quests', id: 'quests' },
                        { label: 'Contact', id: 'contact' },
                    ].map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="cursor-pointer hover:text-cyan-400 transition-colors"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Mobile Status */}
                <div className="md:hidden flex items-center gap-2 text-[10px] font-mono text-green-500 animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    ONLINE
                </div>

            </div>
        </nav>
    );
};

export default Navbar;