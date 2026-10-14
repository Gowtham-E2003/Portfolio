import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Terminal,
  Copy,
  Check,
  Send,
  X,
  Minimize2,
  Sparkles,
  Mail,
  ExternalLink,
  MessageSquare,
  FileText
} from 'lucide-react';
import resumePdf from '../assets/GOWTHAM E_RESUME.pdf';

export default function ContactDock({ isOpen, onOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);
  
  // Fully reactive: honors external isOpen if provided, falls back to localOpen
  const isOpened = isOpen !== undefined ? isOpen : localOpen;

  const handleOpenTerminal = () => {
    setLocalOpen(true);
    if (onOpen) onOpen();
  };

  const handleCloseTerminal = () => {
    setLocalOpen(false);
    if (onClose) onClose();
  };

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Gowtham Shell v2.4 initialized. Click any command button below or type a command to explore.',
    },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const emailAddress = 'dr.gowtham253@gmail.com';
  const phoneNumber = '+91 6369998633';

  const quickActions = [
    { label: 'Resume', cmd: 'resume', icon: FileText },
    { label: 'Skills', cmd: 'skills', icon: Sparkles },
    { label: 'Projects', cmd: 'projects', icon: ExternalLink },
    { label: 'Contact', cmd: 'contact', icon: Mail },
    { label: 'Copy Email', cmd: 'email', icon: Copy },
    { label: 'Clear', cmd: 'clear', icon: X },
  ];

  useEffect(() => {
    if (isOpened && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpened]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    triggerSparkle();
    setTimeout(() => setCopied(false), 2400);
  };

  const triggerSparkle = () => {
    try {
      confetti({
        particleCount: 36,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#C9973E', '#E8B96A', '#0F1624', '#FFFFFF'],
      });
    } catch {
      // Ignore if confetti not loaded
    }
  };

  const runCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'user', text: `> ${cmdText}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:\n` +
            `  • resume      - Download official candidate resume PDF\n` +
            `  • skills      - Programming, Frontend, Backend & Cloud skills\n` +
            `  • experience  - Work history at Staunch Technologies\n` +
            `  • projects    - Highlights of Neurostore & Jubilant\n` +
            `  • education   - Academic details at Rohini College of Engg.\n` +
            `  • contact     - Direct email, phone, and location\n` +
            `  • email       - Copy direct email to clipboard\n` +
            `  • socials     - Links to GitHub & LinkedIn\n` +
            `  • clear       - Clear terminal viewport`,
        });
        break;

      case 'resume':
        newHistory.push({
          type: 'output',
          text: `[Candidate Resume]:\n` +
            `  Candidate: Gowtham E\n` +
            `  Role:      Associate Software Engineer\n` +
            `  Company:   Staunch Technologies\n` +
            `  File:      GOWTHAM E_RESUME.pdf (87.7 KB)\n` +
            `  Action:    Initiating official download for client...`,
        });
        const resumeLink = document.createElement('a');
        resumeLink.href = resumePdf;
        resumeLink.download = 'Gowtham_E_Resume.pdf';
        document.body.appendChild(resumeLink);
        resumeLink.click();
        document.body.removeChild(resumeLink);
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Technical Skills from Resume]:\n` +
            `  Languages: Python, JavaScript, SQL, HTML5, CSS3\n` +
            `  Frontend:  React.js, Component Architecture, Responsive Web Design, Modern CSS\n` +
            `  Backend:   Flask, Django, RESTful API Development, Microservices\n` +
            `  Cloud:     Microsoft Azure, Linux/Unix Environments, Git, GitHub, Postman`,
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `[Industry Experience]:\n` +
            `  Company:  Staunch Technologies Pvt. Ltd. — Chennai, India\n` +
            `  Role:     Associate Software Engineer\n` +
            `  Timeline: December 2025 – Present\n` +
            `  Focus:    Production React web apps, secure Python RESTful APIs, and Azure pipelines`,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `[Education]:\n` +
            `  Degree:   Bachelor of Engineering (B.E.) in CSE (2020 – 2024)\n` +
            `  College:  Rohini College of Engineering & Technology — Kanyakumari, India\n` +
            `  CGPA:     8.105 / 10.0`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[Technical Projects]:\n` +
            `  1. Neurostore – Full-Stack E-Commerce Platform\n` +
            `     Live:  https://neurostore.in/\n` +
            `     Stack: React.js, Python, Flask, REST APIs, Microsoft Azure\n` +
            `  2. Jubilant – Dynamic Web Store\n` +
            `     Live:  https://jubilantech.com/\n` +
            `     Stack: React.js, State Management, RESTful APIs, Responsive Design`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `[Direct Channels]:\n` +
            `  Name:     Gowtham E\n` +
            `  Role:     Associate Software Engineer\n` +
            `  Email:    ${emailAddress}\n` +
            `  Phone:    ${phoneNumber}\n` +
            `  Location: Chennai, India`,
        });
        break;

      case 'email':
        handleCopyEmail();
        newHistory.push({
          type: 'output',
          text: `✓ Copied "${emailAddress}" to clipboard!`,
        });
        break;

      case 'socials':
        newHistory.push({
          type: 'output',
          text: `[Online Profiles]:\n` +
            `  GitHub:   https://github.com/Gowtham-E2003\n` +
            `  LinkedIn: https://linkedin.com/in/gowtham-e-62733b333`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cleanCmd}". Click a quick button or type "help".`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  return (
    <>
      {/* Toast Notification when Copied */}
      {copied && (
        <div className="fixed bottom-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#0F1624] text-white border border-[#C9973E]/60 text-xs font-mono flex items-center gap-2 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#22C55E]" />
          <span>Copied <strong className="text-[#C9973E]">{emailAddress}</strong> to clipboard!</span>
        </div>
      )}

      {/* Floating Bottom-Right Dock */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        {!isOpened ? (
          <div className="glass-dock-warm rounded-2xl p-1.5 flex items-center gap-2 transition-all shadow-xl">
            <button
              onClick={handleOpenTerminal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1624] hover:bg-[#1E2A3A] text-white border border-[#C9973E]/40 hover:border-[#C9973E] transition-all text-xs font-mono group cursor-pointer shadow-md"
              title="Launch developer terminal"
              aria-label="Open Dev Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#C9973E] group-hover:rotate-6 transition-transform" />
              <span className="font-sans font-medium text-white">Dev Terminal</span>
              <span className="font-mono text-[10px] text-[#C9973E] bg-white/10 px-1 py-0.5 rounded border border-white/10">
                &gt;_
              </span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl hover:bg-[#E0DAD0]/60 text-[#0F1624] transition-colors cursor-pointer"
              title="Quick copy email"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Mail className="w-4 h-4" />}
            </button>

            <a
              href="#resume"
              className="p-2 rounded-xl hover:bg-[#E0DAD0]/60 text-[#0F1624] transition-colors cursor-pointer"
              title="Resume & Credentials"
              aria-label="Navigate to resume section"
            >
              <FileText className="w-4 h-4 text-[#C9973E]" />
            </a>

            <a
              href="#contact"
              className="p-2 rounded-xl hover:bg-[#E0DAD0]/60 text-[#0F1624] transition-colors cursor-pointer"
              title="Jump to contact section"
              aria-label="Navigate to contact section"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        ) : (
          /* Expandable Warm Micro-Terminal Panel */
          <div className="w-[94vw] sm:w-[480px] terminal-panel-warm rounded-2xl overflow-hidden flex flex-col h-[410px] animate-in fade-in zoom-in-95 duration-200">
            {/* Terminal Top Window Bar */}
            <div className="px-4 py-3 bg-[#090E17] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-full bg-[#EF4444] cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleCloseTerminal}
                    title="Close"
                  />
                  <div
                    className="w-3 h-3 rounded-full bg-[#F59E0B] cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={handleCloseTerminal}
                    title="Minimize"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <div className="ml-2 flex items-center gap-2 text-xs font-mono text-[#8A94A0]">
                  <Terminal className="w-3.5 h-3.5 text-[#C9973E]" />
                  <span>gowtham@dev:~$</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-slate-400">
                <button
                  onClick={handleCloseTerminal}
                  className="p-1 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Minimize"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleCloseTerminal}
                  className="p-1 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Close Terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Clickable Command Buttons */}
            <div className="px-3 py-2 bg-[#0C121D] border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
              <span className="text-[#8A94A0] shrink-0">Run:</span>
              {quickActions.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.cmd}
                    onClick={() => runCommand(item.cmd)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#141C2A] hover:bg-[#C9973E]/20 text-[#EDE9E0] hover:text-[#C9973E] border border-white/10 hover:border-[#C9973E]/50 transition-colors shrink-0 cursor-pointer active:scale-95"
                  >
                    <Icon className="w-3 h-3 text-[#C9973E]" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 text-left select-text bg-[#0F1624]">
              {history.map((entry, idx) => (
                <div key={idx} className="leading-relaxed">
                  {entry.type === 'system' && (
                    <div className="text-[#8A94A0] flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9973E] shrink-0 mt-0.5" />
                      <span>{entry.text}</span>
                    </div>
                  )}
                  {entry.type === 'user' && (
                    <div className="text-[#C9973E] font-semibold">{entry.text}</div>
                  )}
                  {entry.type === 'output' && (
                    <pre className="text-[#EAE6DC] whitespace-pre-wrap pl-3 border-l-2 border-[#C9973E]/40 font-mono text-xs leading-normal">
                      {entry.text}
                    </pre>
                  )}
                  {entry.type === 'error' && (
                    <div className="text-[#F87171] pl-3 border-l-2 border-red-500/50">
                      {entry.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Prompt Input Bar */}
            <form
              onSubmit={handleCommandSubmit}
              className="p-2.5 bg-[#090E17] border-t border-white/10 flex items-center gap-2"
            >
              <div className="flex items-center gap-1 text-[#C9973E] font-mono text-xs pl-1">
                <span>&gt;</span>
                <span className="inline-block w-1.5 h-3.5 bg-[#C9973E] animate-pulse" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command or click buttons above..."
                className="flex-1 bg-transparent border-none text-[#EAE6DC] font-mono text-xs focus:outline-none placeholder:text-[#8A94A0]/60"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-[#C9973E]/20 hover:bg-[#C9973E]/30 text-[#C9973E] border border-[#C9973E]/40 transition-colors cursor-pointer"
                title="Send Command"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
