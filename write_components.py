#!/usr/bin/env python3
"""Write all new warm-themed portfolio components."""

navbar = r"""import { useState, useEffect } from 'react';
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      for (const {href} of [...navLinks].reverse()) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(href.slice(1)); break; }
      }
    };
    window.addEventListener('scroll', fn, {passive:true});
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,transition:'all 0.3s',
      backgroundColor: scrolled?'rgba(234,230,220,0.93)':'transparent',
      backdropFilter: scrolled?'blur(16px)':'none',
      borderBottom: scrolled?'1px solid #E0DAD0':'1px solid transparent'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:68}}>
        <a href="#hero" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
          <div style={{width:36,height:36,background:'#0F1624',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:800,fontSize:13}}>GK</div>
          <span style={{fontWeight:700,fontSize:16,color:'#0F1624',letterSpacing:'-0.3px'}}>Gowtham K</span>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:4}} className="desk-nav">
          {navLinks.map(({label,href}) => {
            const isActive = active === href.slice(1);
            return (
              <a key={href} href={href} style={{padding:'6px 14px',borderRadius:8,fontSize:14,fontWeight:isActive?600:500,
                color:isActive?'#0F1624':'#5A6475',textDecoration:'none',transition:'all 0.2s',
                borderBottom:isActive?'2px solid #C9973E':'2px solid transparent'}}>{label}</a>
            );
          })}
        </div>
        <div style={{display:'flex',gap:10}} className="desk-nav">
          <a href="#contact" className="btn-outline" style={{padding:'8px 18px',fontSize:13}}>Say Hello</a>
          <a href="/resume.pdf" download className="btn-dark" style={{padding:'8px 18px',fontSize:13}}>Resume</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="mob-btn" style={{display:'none',background:'none',border:'none',cursor:'pointer',fontSize:24,color:'#0F1624'}}>
          {open?'X':'='}
        </button>
      </div>
      {open && (
        <div style={{background:'#fff',borderTop:'1px solid #E0DAD0',padding:'16px 24px 24px'}}>
          {navLinks.map(({label,href})=>(
            <a key={href} href={href} onClick={()=>setOpen(false)}
               style={{display:'block',padding:'12px 0',borderBottom:'1px solid #EDE9E0',fontSize:15,fontWeight:500,color:'#0F1624',textDecoration:'none'}}>
              {label}
            </a>
          ))}
          <div style={{marginTop:20,display:'flex',gap:12}}>
            <a href="#contact" className="btn-dark" style={{flex:1,justifyContent:'center'}}>Say Hello</a>
          </div>
        </div>
      )}
    </nav>
  );
}
"""

hero = r"""import { useEffect, useState } from 'react';
const stats = [
  {value:'3+',label:'Years of\nExperience'},
  {value:'15+',label:'Projects\nCompleted'},
  {value:'5+',label:'Happy\nClients'},
];
export default function Hero() {
  const [on,setOn]=useState(false);
  useEffect(()=>{setTimeout(()=>setOn(true),100);},[]);
  return (
    <section id="hero" style={{minHeight:'100vh',display:'flex',alignItems:'center',
      background:'linear-gradient(160deg,#EAE6DC 0%,#F0EBE0 50%,#E5E0D5 100%)',paddingTop:80}}>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}} className="hero-grid">
          <div style={{opacity:on?1:0,transform:on?'translateY(0)':'translateY(30px)',transition:'all 0.7s ease'}}>
            <div className="status-badge" style={{marginBottom:28,width:'fit-content'}}>
              <span className="status-dot" />
              Open to New Opportunities
            </div>
            <p style={{fontSize:18,color:'#C9973E',fontWeight:600,marginBottom:8}}>Hi, I'm</p>
            <h1 style={{fontSize:'clamp(3rem,6vw,5rem)',fontWeight:900,lineHeight:1.05,letterSpacing:'-0.04em',color:'#0F1624',marginBottom:12}}>
              Gowtham<br/>Kumar
            </h1>
            <p style={{fontSize:19,fontWeight:600,color:'#0F1624',marginBottom:6}}>Full-Stack Engineer</p>
            <p style={{fontSize:14,color:'#8A94A0',marginBottom:24}}>React · Python · FastAPI · PostgreSQL</p>
            <p style={{fontSize:15,color:'#5A6475',marginBottom:36,lineHeight:1.75,maxWidth:430}}>
              I build scalable web apps and APIs — from pixel-perfect UIs to robust backend systems. Focused on React ecosystems and Python microservices.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:44}}>
              <a href="#projects" className="btn-dark">See My Work →</a>
              <a href="#contact" className="btn-outline">Let's Talk</a>
            </div>
            <div style={{display:'flex',gap:36,paddingTop:28,borderTop:'1px solid #E0DAD0'}}>
              {stats.map(({value,label})=>(
                <div key={value}>
                  <div style={{fontSize:26,fontWeight:800,color:'#0F1624',letterSpacing:'-0.03em'}}>{value}</div>
                  <div style={{fontSize:11,color:'#8A94A0',fontWeight:500,lineHeight:1.4,whiteSpace:'pre-line'}}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{opacity:on?1:0,transform:on?'translateY(0)':'translateY(40px)',transition:'all 0.8s ease 0.2s',display:'flex',justifyContent:'center'}} className="hero-card-wrap">
            <div style={{position:'relative',width:'100%',maxWidth:360}}>
              <div style={{background:'#0F1624',borderRadius:28,padding:'44px 36px 48px',boxShadow:'0 40px 80px rgba(15,22,36,0.22)',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:110,height:110,borderRadius:'50%',background:'linear-gradient(135deg,#C9973E,#E8B96A)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:38,fontWeight:900,color:'white',letterSpacing:'-2px',marginBottom:20}}>GK</div>
                <div style={{color:'white',fontSize:20,fontWeight:700,marginBottom:4}}>Gowtham Kumar</div>
                <div style={{color:'#C9973E',fontSize:12,fontWeight:600,letterSpacing:'1.5px',textTransform:'uppercase',marginBottom:22}}>Full-Stack Engineer</div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'center'}}>
                  {['React','Python','FastAPI','PostgreSQL'].map(t=>(
                    <span key={t} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:100,padding:'4px 12px',fontSize:12,color:'rgba(255,255,255,0.7)',fontWeight:500}}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{position:'absolute',bottom:-16,right:-16,background:'white',borderRadius:14,padding:'12px 18px',boxShadow:'0 8px 24px rgba(15,22,36,0.12)',border:'1px solid #EDE9E0'}}>
                <div style={{fontSize:22,fontWeight:800,color:'#0F1624'}}>3+</div>
                <div style={{fontSize:11,color:'#8A94A0',fontWeight:500}}>Years of exp.</div>
              </div>
              <div style={{position:'absolute',top:20,right:-24,background:'white',borderRadius:100,padding:'6px 14px',boxShadow:'0 4px 12px rgba(15,22,36,0.1)',border:'1px solid #EDE9E0',fontSize:13,fontWeight:500,color:'#0F1624',display:'flex',alignItems:'center',gap:6}}>
                <span role="img" aria-label="location">📍</span> India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"""

techOrbit = r"""
const skillGroups = [
  {icon:'⬡',title:'Frontend',count:8,skills:['React.js','Next.js','TypeScript','JavaScript','HTML5','CSS3','Tailwind CSS','Framer Motion']},
  {icon:'⚙',title:'Backend',count:6,skills:['Python','FastAPI','Node.js','REST APIs','GraphQL','WebSockets']},
  {icon:'🗄',title:'Databases',count:5,skills:['PostgreSQL','MongoDB','Redis','MySQL','SQLite']},
  {icon:'☁',title:'Cloud & DevOps',count:5,skills:['AWS','Docker','GitHub Actions','CI/CD','Linux']},
  {icon:'🛠',title:'Tools',count:5,skills:['Git','GitHub','VS Code','Postman','Figma']},
];
export default function TechOrbit() {
  return (
    <section id="skills" className="section" style={{background:'#F5F2EC'}}>
      <div className="container">
        <div className="section-label">
          <span className="num">02</span><span className="line" /><span className="tag">Skills</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48,flexWrap:'wrap',gap:16}}>
          <h2 className="section-heading">My Tech Stack</h2>
          <p style={{color:'var(--text-secondary)',fontSize:15,maxWidth:340}}>Technologies I use to build fast, scalable, and delightful products.</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:20}}>
          {skillGroups.map(({icon,title,count,skills})=>(
            <div key={title} className="card" style={{padding:28}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div className="icon-box" style={{fontSize:18}}>{icon}</div>
                  <span style={{fontWeight:700,fontSize:17,color:'var(--text-primary)'}}>{title}</span>
                </div>
                <span style={{background:'var(--bg)',borderRadius:100,padding:'3px 10px',fontSize:12,fontWeight:600,color:'var(--text-muted)'}}>{count}</span>
              </div>
              <div style={{height:1,background:'var(--border)',marginBottom:20}} />
              <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                {skills.map(s=><span key={s} className="pill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

experience = r"""
const jobs = [
  {period:'2023 – Present',location:'Remote',company:'Freelance / Contract',role:'Full-Stack Engineer',type:'Remote / Contract',
   responsibilities:['Built and delivered 10+ full-stack web applications using React and Python FastAPI.','Designed RESTful and GraphQL APIs serving 50k+ monthly active users.','Set up CI/CD pipelines on GitHub Actions + Docker for seamless deployments.','Worked directly with startup founders to translate ideas into production-ready products.'],
   tech:['React','FastAPI','PostgreSQL','Docker','AWS']},
  {period:'2021 – 2023',location:'On-site',company:'Previous Company',role:'Frontend Developer',type:'Full-time',
   responsibilities:['Developed reusable React component libraries used across 3 products.','Improved page load performance by 40% through code-splitting and lazy loading.','Collaborated with design and backend teams in an Agile environment.','Mentored junior developers on React best practices and code review.'],
   tech:['React','Redux','TypeScript','Node.js']},
];
export default function Experience() {
  return (
    <section id="experience" className="section" style={{background:'var(--bg)'}}>
      <div className="container">
        <div className="section-label">
          <span className="num">03</span><span className="line" /><span className="tag">Career</span>
        </div>
        <h2 className="section-heading" style={{marginBottom:56}}>Professional Experience</h2>
        <div style={{display:'flex',flexDirection:'column',gap:0}}>
          {jobs.map((job,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'180px 1fr',gap:32,position:'relative',paddingBottom:i<jobs.length-1?40:0}}>
              <div style={{textAlign:'right',paddingTop:4}}>
                <div style={{fontWeight:600,color:'var(--text-primary)',fontSize:14,marginBottom:4}}>{job.period}</div>
                <div style={{fontSize:13,color:'var(--text-muted)'}}>{job.location}</div>
              </div>
              <div style={{position:'absolute',left:180,top:8,width:10,height:10,borderRadius:'50%',background:'var(--amber)',border:'2px solid var(--bg)',transform:'translateX(calc(-50% + 16px))'}} />
              {i<jobs.length-1&&<div style={{position:'absolute',left:180,top:20,bottom:0,width:1.5,background:'var(--border)',transform:'translateX(calc(-50% + 16px))'}} />}
              <div className="card" style={{padding:28,marginLeft:16}}>
                <div style={{display:'flex',alignItems:'flex-start',gap:14,marginBottom:20}}>
                  <div style={{width:44,height:44,borderRadius:10,background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:800,fontSize:14,flexShrink:0}}>{job.company.slice(0,2).toUpperCase()}</div>
                  <div>
                    <div style={{fontWeight:700,fontSize:18,color:'var(--text-primary)',marginBottom:2}}>{job.role}</div>
                    <div style={{fontSize:14,color:'var(--amber)',fontWeight:600}}>{job.company} · {job.type}</div>
                  </div>
                </div>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:'1.5px',color:'var(--text-muted)',textTransform:'uppercase',marginBottom:12}}>Key Responsibilities</div>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:10,marginBottom:20}}>
                  {job.responsibilities.map((r,j)=>(
                    <li key={j} style={{display:'flex',gap:12,fontSize:14,color:'var(--text-secondary)',lineHeight:1.6}}>
                      <span style={{color:'#22C55E',marginTop:3,flexShrink:0}}>✓</span>{r}
                    </li>
                  ))}
                </ul>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                  {job.tech.map(t=><span key={t} className="pill" style={{fontSize:12}}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

projects = r"""
const projects = [
  {title:'AI Analytics Platform',category:'Full-Stack · SaaS',
   description:'Real-time analytics dashboard with AI insights, custom charting, and multi-tenant architecture. Handles 100k+ events/day.',
   tech:['React','Python','FastAPI','PostgreSQL','Redis','Docker'],
   highlights:['Real-time WebSocket streams','Custom D3.js charts','Multi-tenant RBAC','99.9% uptime on AWS'],
   live:'#',github:'#'},
  {title:'E-Commerce Platform',category:'Full-Stack · Commerce',
   description:'Full-featured headless store with Stripe payments, inventory management, and a seller dashboard.',
   tech:['Next.js','Node.js','MongoDB','Stripe','Cloudinary'],
   highlights:['Headless architecture','Stripe + webhooks','Real-time inventory','Admin dashboard'],
   live:'#',github:'#'},
  {title:'Task Management SaaS',category:'Full-Stack · Productivity',
   description:'Collaborative project app with real-time updates, file attachments, time tracking, and team workspaces.',
   tech:['React','FastAPI','PostgreSQL','WebSockets','S3'],
   highlights:['Real-time collaboration','Team permissions','Built-in time tracking','AWS S3 uploads'],
   live:'#',github:'#'},
  {title:'REST API Framework',category:'Open Source · Backend',
   description:'Lightweight Python micro-framework for production-ready REST APIs with auto documentation and validation.',
   tech:['Python','FastAPI','Pydantic','SQLAlchemy'],
   highlights:['Auto OpenAPI docs','JWT auth middleware','Rate limiting','50+ GitHub stars'],
   live:'#',github:'#'},
];
export default function Projects() {
  return (
    <section id="projects" className="section" style={{background:'#F5F2EC'}}>
      <div className="container">
        <div className="section-label">
          <span className="num">04</span><span className="line" /><span className="tag">Projects</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:48,flexWrap:'wrap',gap:16}}>
          <h2 className="section-heading">Featured Work</h2>
          <a href="#contact" style={{fontSize:14,color:'var(--amber)',fontWeight:600,textDecoration:'none'}}>Let's build something →</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(500px,1fr))',gap:24}}>
          {projects.map((proj,i)=>(
            <div key={i} className="card" style={{padding:32,display:'flex',flexDirection:'column'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16}}>
                <div>
                  <div style={{fontSize:11,fontWeight:600,color:'var(--amber)',textTransform:'uppercase',letterSpacing:'1px',marginBottom:6}}>{proj.category}</div>
                  <h3 style={{fontSize:20,fontWeight:700,color:'var(--text-primary)',lineHeight:1.3}}>{proj.title}</h3>
                </div>
                <div style={{display:'flex',gap:8}}>
                  <a href={proj.github} style={{width:34,height:34,borderRadius:8,border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',color:'var(--text-primary)',fontSize:15}} title="GitHub">↗</a>
                  <a href={proj.live} style={{width:34,height:34,borderRadius:8,background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',color:'white',fontSize:15}} title="Live">⊞</a>
                </div>
              </div>
              <p style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.7,marginBottom:20}}>{proj.description}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:20}}>
                {proj.tech.map(t=><span key={t} className="pill" style={{fontSize:12}}>{t}</span>)}
              </div>
              <div style={{marginTop:'auto',paddingTop:20,borderTop:'1px solid var(--border)'}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:'1.5px',color:'var(--text-muted)',textTransform:'uppercase',marginBottom:12}}>Highlights</div>
                <ul style={{display:'flex',flexDirection:'column',gap:8}}>
                  {proj.highlights.map((h,j)=>(
                    <li key={j} style={{display:'flex',gap:10,fontSize:13,color:'var(--text-secondary)'}}>
                      <span style={{color:'#22C55E',fontWeight:700,flexShrink:0}}>✓</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"""

contact = r"""import { useState } from 'react';
export default function ContactSection() {
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [sent,setSent]=useState(false);
  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const onSubmit=e=>{e.preventDefault();setSent(true);};
  return (
    <section id="contact" className="section" style={{background:'var(--bg)'}}>
      <div className="container">
        <div className="section-label">
          <span className="num">05</span><span className="line" /><span className="tag">Contact</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start'}} className="contact-grid">
          <div>
            <h2 className="section-heading" style={{marginBottom:20}}>Let's Work Together</h2>
            <p style={{fontSize:15,color:'var(--text-secondary)',lineHeight:1.7,marginBottom:36}}>Got a project in mind or just want to say hi? I'm currently open to freelance and full-time opportunities.</p>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {[
                {icon:'✉',label:'Email',value:'gowthamkumar@email.com',href:'mailto:gowthamkumar@email.com'},
                {icon:'💼',label:'LinkedIn',value:'/in/gowthamkumar',href:'https://linkedin.com'},
                {icon:'⌨',label:'GitHub',value:'github.com/gowtham',href:'https://github.com'},
              ].map(({icon,label,value,href})=>(
                <a key={label} href={href} style={{display:'flex',alignItems:'center',gap:16,textDecoration:'none',padding:'16px 20px',borderRadius:14,border:'1px solid var(--border)',background:'var(--bg-card)',transition:'all 0.2s',boxShadow:'var(--shadow-sm)'}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='#C9973E';e.currentTarget.style.transform='translateY(-1px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='#E0DAD0';e.currentTarget.style.transform='none';}}>
                  <div style={{width:42,height:42,background:'var(--navy)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{icon}</div>
                  <div>
                    <div style={{fontSize:11,fontWeight:700,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'1px',marginBottom:2}}>{label}</div>
                    <div style={{fontSize:14,fontWeight:600,color:'var(--text-primary)'}}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="card" style={{padding:36}}>
            {sent?(
              <div style={{textAlign:'center',padding:'40px 0'}}>
                <div style={{fontSize:48,marginBottom:16}}>🎉</div>
                <h3 style={{fontWeight:700,fontSize:22,color:'var(--text-primary)',marginBottom:8}}>Message Sent!</h3>
                <p style={{color:'var(--text-secondary)',fontSize:14}}>Thanks! I'll get back to you within 24 hours.</p>
              </div>
            ):(
              <form onSubmit={onSubmit}>
                <h3 style={{fontWeight:700,fontSize:20,color:'var(--text-primary)',marginBottom:24}}>Send a Message</h3>
                {[{name:'name',label:'Your Name',type:'text',ph:'John Doe'},{name:'email',label:'Email',type:'email',ph:'john@example.com'}].map(({name,label,type,ph})=>(
                  <div key={name} style={{marginBottom:18}}>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--text-primary)',marginBottom:6}}>{label}</label>
                    <input type={type} name={name} value={form[name]} onChange={onChange} placeholder={ph} required
                      style={{width:'100%',padding:'12px 16px',border:'1.5px solid var(--border)',borderRadius:10,fontSize:14,color:'var(--text-primary)',background:'var(--bg-alt)',fontFamily:'inherit',outline:'none'}}
                      onFocus={e=>e.target.style.borderColor='#C9973E'} onBlur={e=>e.target.style.borderColor='#E0DAD0'} />
                  </div>
                ))}
                <div style={{marginBottom:24}}>
                  <label style={{display:'block',fontSize:13,fontWeight:600,color:'var(--text-primary)',marginBottom:6}}>Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." rows={5} required
                    style={{width:'100%',padding:'12px 16px',border:'1.5px solid var(--border)',borderRadius:10,fontSize:14,color:'var(--text-primary)',background:'var(--bg-alt)',fontFamily:'inherit',outline:'none',resize:'vertical'}}
                    onFocus={e=>e.target.style.borderColor='#C9973E'} onBlur={e=>e.target.style.borderColor='#E0DAD0'} />
                </div>
                <button type="submit" className="btn-dark" style={{width:'100%',justifyContent:'center',padding:14}}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
"""

app = r"""import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechOrbit from './components/TechOrbit';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" style={{background:'#EAE6DC',padding:'100px 0'}}>
          <div className="container">
            <div className="section-label">
              <span className="num">01</span><span className="line" /><span className="tag">About</span>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'start'}} className="about-grid">
              <div>
                <h2 className="section-heading">Professional<br/>Summary</h2>
              </div>
              <div>
                <p style={{fontSize:16,color:'#5A6475',lineHeight:1.8,marginBottom:20,borderLeft:'3px solid #C9973E',paddingLeft:20}}>
                  Full-Stack Engineer with 3+ years of experience building and shipping production web applications. I specialize in React frontends and Python backends, with a strong focus on performance, scalability, and clean code.
                </p>
                <p style={{fontSize:15,color:'#8A94A0',lineHeight:1.8,marginBottom:20}}>
                  I've worked with early-stage startups and growing companies to design systems that scale — from MVP to thousands of users. I care about developer experience, maintainable architecture, and delivering real value.
                </p>
                <p style={{fontSize:15,color:'#8A94A0',lineHeight:1.8}}>
                  When I'm not coding, I'm exploring system design, contributing to open source, or learning something new in the AI/ML space.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div style={{height:1,background:'#E0DAD0'}} />
        <TechOrbit />
        <div style={{height:1,background:'#E0DAD0'}} />
        <Experience />
        <div style={{height:1,background:'#E0DAD0'}} />
        <Projects />
        <div style={{height:1,background:'#E0DAD0'}} />
        <ContactSection />
      </main>
      <footer style={{background:'#0F1624',padding:'40px 0',textAlign:'center'}}>
        <div className="container">
          <p style={{color:'rgba(255,255,255,0.35)',fontSize:13}}>
            © 2024 Gowtham Kumar · Built with React + Vite · Designed with care
          </p>
        </div>
      </footer>
    </>
  );
}
"""

writes = {
    'src/components/Navbar.jsx': navbar,
    'src/components/Hero.jsx': hero,
    'src/components/TechOrbit.jsx': techOrbit,
    'src/components/Experience.jsx': experience,
    'src/components/Projects.jsx': projects,
    'src/components/ContactSection.jsx': contact,
    'src/App.jsx': app,
}

for path, content in writes.items():
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"OK: {path} ({len(content)} bytes)")

print("All components written successfully!")
