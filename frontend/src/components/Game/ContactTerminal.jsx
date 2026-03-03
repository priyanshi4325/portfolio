import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactTerminal = () => {
  const [terminalState, setTerminalState] = useState('COMMAND'); // COMMAND, FORM, SUCCESS
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('TYPE "CONTACT" FOR DATA OR "MESSAGE" TO START UPLINK...');
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === 'contact') {
      setMessage('LOCATION: INDORE, MP | PHONE: +91 7999942772 | STATUS: READY_FOR_HIRE');
    } else if (cmd === 'message' || cmd === 'email') {
      setTerminalState('FORM');
      setMessage('INITIALIZING SECURE UPLINK... PROVIDE MISSION DETAILS.');
    } else if (cmd === 'clear') {
      setMessage('TERMINAL RESET.');
    } else {
      setMessage(`COMMAND "${cmd}" NOT RECOGNIZED. TRY "CONTACT" OR "MESSAGE"`);
    }
    setInput('');
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setMessage('ENCRYPTING & SENDING TRANSMISSION...');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "Portfolio Message"
        }),
      });

      if (response.ok) {
        setTerminalState('SUCCESS');
      } else {
        const errorData = await response.json();
      console.log("Server Error Data:", errorData);
        setMessage('ERROR: DATA_CORRUPTION. CHECK BACKEND SERVER.');
      }
    } catch (err) {
      setMessage('CONNECTION_FAILED: IS THE DJANGO SERVER RUNNING?');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 mt-20 pb-32 font-mono">
      <div className="bg-slate-950 border-2 border-slate-700 rounded-lg p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <span className="text-[10px] text-slate-500 tracking-widest uppercase">Encrypted_Comms_v2.0</span>
        </div>

        <div className="space-y-4">
          {/* Terminal Output */}
          <div className="text-cyan-500 text-sm min-h-[40px] leading-relaxed">
            <span className="text-cyan-800">[{new Date().toLocaleTimeString()}]</span> {` > `} 
            <span className="text-slate-100">{message}</span>
          </div>

          <AnimatePresence mode="wait">
            {/* MODE 1: Command Line */}
            {terminalState === 'COMMAND' && (
              <motion.form 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleCommand} className="flex items-center gap-2"
              >
                <span className="text-green-500 shrink-0">priyanshi_dass@quest:~$</span>
                <input 
                  type="text" value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none text-cyan-400 w-full focus:ring-0"
                  autoFocus placeholder="_"
                />
              </motion.form>
            )}

            {/* MODE 2: Multi-field Form */}
            {terminalState === 'FORM' && (
              <motion.form 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                onSubmit={handleFinalSubmit} className="space-y-3 bg-slate-900/50 p-4 rounded border border-slate-800"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    placeholder="IDENT_NAME" required
                    className="bg-slate-950 border border-slate-700 p-2 text-xs text-cyan-400 outline-none focus:border-cyan-500"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    placeholder="COMMS_EMAIL" type="email" required
                    className="bg-slate-950 border border-slate-700 p-2 text-xs text-cyan-400 outline-none focus:border-cyan-500"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <textarea 
                  placeholder="TRANSMISSION_DETAILS..." required rows="3"
                  className="w-full bg-slate-950 border border-slate-700 p-2 text-xs text-cyan-400 outline-none focus:border-cyan-500 resize-none"
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
                <div className="flex gap-4">
                  <button type="submit" className="text-[10px] bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 font-bold uppercase tracking-widest transition-all">
                    Execute_Uplink
                  </button>
                  <button type="button" onClick={() => setTerminalState('COMMAND')} className="text-[10px] text-slate-500 hover:text-white uppercase tracking-widest">
                    Abort
                  </button>
                </div>
              </motion.form>
            )}

            {/* MODE 3: Success Screen */}
            {terminalState === 'SUCCESS' && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6 border-2 border-dashed border-green-500/30 rounded"
              >
                <div className="text-green-500 text-xl font-bold mb-2 animate-pulse">TRANSMISSION_COMPLETE</div>
                <p className="text-slate-400 text-xs mb-4">The record has been written to the Django Core.</p>
                <button 
                  onClick={() => {setTerminalState('COMMAND'); setMessage('READY FOR NEXT MISSION.');}}
                  className="text-[10px] text-cyan-500 border border-cyan-500 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-all"
                >
                  RETURN_TO_TERMINAL
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;