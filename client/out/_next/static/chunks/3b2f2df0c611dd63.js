(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,24348,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(46932),s=e.i(10542),n=e.i(95420),r=e.i(91994);function o(){let e=(0,a.useRef)(null),[o,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)({x:0,y:0}),{scrollYProgress:m}=(0,s.useScroll)({target:e,offset:["start start","end start"]}),h=(0,r.useSpring)(m,{stiffness:100,damping:30}),u=(0,n.useTransform)(h,[0,1],["0%","40%"]),p=(0,n.useTransform)(h,[0,.6],[1,0]),x=(0,n.useTransform)(h,[0,.5],[1,.95]);return(0,a.useEffect)(()=>{l(!0);let e=e=>{let{innerWidth:t,innerHeight:a}=window;d({x:(e.clientX-t/2)/t,y:(e.clientY-a/2)/a})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),(0,t.jsx)("section",{ref:e,className:"relative h-[120vh] overflow-hidden bg-[#030303]",children:(0,t.jsxs)("div",{className:"sticky top-0 h-screen overflow-hidden",children:[(0,t.jsx)(i.motion.div,{className:"absolute inset-0",animate:{background:`
              radial-gradient(ellipse 60% 50% at ${50+10*c.x}% ${40+10*c.y}%, rgba(0, 133, 202, 0.08), transparent 50%),
              radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0, 133, 202, 0.04), transparent 40%),
              radial-gradient(ellipse 40% 30% at 80% 20%, rgba(0, 100, 180, 0.03), transparent 30%),
              linear-gradient(180deg, #030303 0%, #050508 50%, #030303 100%)
            `},transition:{duration:.3}}),o&&(0,t.jsxs)("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[(0,t.jsx)(i.motion.div,{className:"absolute top-1/4 -right-32 w-[500px] h-[500px] border border-white/[0.03] rounded-full",animate:{rotate:360},transition:{duration:60,repeat:1/0,ease:"linear"},style:{x:-30*c.x,y:-30*c.y}}),(0,t.jsx)(i.motion.div,{className:"absolute bottom-1/4 -left-20 w-[300px] h-[300px] border border-acm-blue/[0.05] rounded-full",animate:{rotate:-360},transition:{duration:45,repeat:1/0,ease:"linear"},style:{x:20*c.x,y:20*c.y}}),(0,t.jsx)(i.motion.div,{className:"absolute top-[20%] left-[15%] w-20 h-20 border border-white/[0.04] rotate-45",animate:{y:[0,-20,0],rotate:[45,50,45]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(i.motion.div,{className:"absolute bottom-[30%] right-[20%] w-12 h-12 border border-acm-blue/[0.06] rotate-12",animate:{y:[0,15,0],rotate:[12,18,12]},transition:{duration:6,repeat:1/0,ease:"easeInOut"}}),(0,t.jsx)(i.motion.div,{className:"absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-white/[0.03] to-transparent",style:{rotate:"15deg"}}),(0,t.jsx)(i.motion.div,{className:"absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-acm-blue/[0.04] to-transparent",style:{rotate:"-10deg"}})]}),(0,t.jsxs)(i.motion.div,{style:{y:u,opacity:p,scale:x},className:"relative z-10 flex h-full flex-col items-center justify-center px-6 will-change-transform",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"flex items-center gap-6 mb-10",children:[(0,t.jsx)(i.motion.div,{className:"w-16 md:w-24 h-px bg-linear-to-r from-transparent to-acm-blue/40",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1,delay:.5}}),(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] tracking-[0.5em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:"Stories & Insights"}),(0,t.jsx)(i.motion.div,{className:"w-16 md:w-24 h-px bg-linear-to-l from-transparent to-acm-blue/40",initial:{scaleX:0},animate:{scaleX:1},transition:{duration:1,delay:.5}})]}),(0,t.jsx)("div",{className:"overflow-hidden mb-2 md:mb-4",children:(0,t.jsx)(i.motion.div,{className:"flex",children:"THE".split("").map((e,a)=>(0,t.jsx)(i.motion.span,{initial:{y:150,opacity:0,rotateX:-45},animate:{y:0,opacity:1,rotateX:0},transition:{duration:1,delay:.4+.08*a,ease:[.22,1,.36,1]},className:"inline-block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white/90 tracking-tight leading-none",style:{fontFamily:"var(--font-heading)"},children:e},a))})}),(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsx)(i.motion.div,{className:"flex",children:"CHRONICLE".split("").map((e,a)=>(0,t.jsx)(i.motion.span,{initial:{y:200,opacity:0,rotateX:-45},animate:{y:0,opacity:1,rotateX:0},transition:{duration:1.2,delay:.6+.05*a,ease:[.22,1,.36,1]},className:"inline-block text-4xl sm:text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none",style:{fontFamily:"var(--font-heading)",background:"linear-gradient(135deg, #0085CA 0%, #00A3FF 50%, #0085CA 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e},a))})}),(0,t.jsx)(i.motion.p,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},className:"mt-8 md:mt-12 max-w-xl text-center text-base md:text-lg text-white/40 leading-relaxed",style:{fontFamily:"var(--font-body)"},children:"Where ideas take form and stories unfold. Explore narratives from the minds shaping tomorrow's technology."}),(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.4},className:"mt-8 md:mt-16 flex items-center gap-6 sm:gap-8 md:gap-16",children:[{value:"6",label:"Articles"},{value:"6",label:"Categories"},{value:"500+",label:"Readers"}].map((e,a)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.6+.1*a},className:"text-center",children:[(0,t.jsx)("span",{className:"block text-2xl md:text-3xl font-black text-white",style:{fontFamily:"var(--font-heading)"},children:e.value}),(0,t.jsx)("span",{className:"text-[10px] tracking-[0.2em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:e.label})]},e.label))}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:2},className:"absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4",children:[(0,t.jsx)("span",{className:"text-[9px] tracking-[0.4em] text-white/20 uppercase",style:{fontFamily:"var(--font-body)"},children:"Scroll to explore"}),(0,t.jsx)(i.motion.div,{className:"w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5",children:(0,t.jsx)(i.motion.div,{className:"w-1 h-2 bg-acm-blue/60 rounded-full",animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}})})]})]}),(0,t.jsx)("div",{className:"absolute top-8 left-8 w-16 h-16 border-l border-t border-white/[0.06]"}),(0,t.jsx)("div",{className:"absolute top-8 right-8 w-16 h-16 border-r border-t border-white/[0.06]"}),(0,t.jsx)("div",{className:"absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/[0.06]"}),(0,t.jsx)("div",{className:"absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/[0.06]"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 z-20 opacity-[0.02]",style:{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}})]})})}function l(){let e=(0,a.useRef)(null),{scrollYProgress:o}=(0,s.useScroll)({target:e,offset:["start end","end start"]}),l=(0,r.useSpring)(o,{stiffness:100,damping:30}),c=(0,n.useTransform)(l,[0,.3,.7,1],[0,1,1,0]),d=(0,n.useTransform)(l,[0,.3,.7,1],[80,0,0,-80]),m=(0,n.useTransform)(l,[0,.3,.7,1],[.95,1,1,.95]);return(0,t.jsxs)("section",{ref:e,className:"relative min-h-[80vh] overflow-hidden bg-[#030303] py-32 md:py-40",children:[(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)(i.motion.div,{style:{opacity:c},className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-acm-blue/[0.04] rounded-full blur-[200px]"}),(0,t.jsx)("div",{className:"absolute left-1/2 top-0 -translate-x-1/2 w-px h-full",children:(0,t.jsx)(i.motion.div,{className:"h-full w-full bg-linear-to-b from-transparent via-acm-blue/20 to-transparent",style:{scaleY:l,transformOrigin:"top"}})}),(0,t.jsx)("div",{className:"absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.03] to-transparent"}),(0,t.jsx)("div",{className:"absolute bottom-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.03] to-transparent"})]}),(0,t.jsxs)(i.motion.div,{style:{opacity:c,y:d,scale:m},className:"relative z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center",children:[(0,t.jsx)(i.motion.div,{initial:{scale:0,rotate:-45},whileInView:{scale:1,rotate:0},viewport:{once:!0},transition:{duration:1,ease:[.22,1,.36,1]},className:"mb-12",children:(0,t.jsxs)("div",{className:"relative w-20 h-20",children:[(0,t.jsx)(i.motion.div,{className:"absolute inset-0 border border-white/10 rounded-full",animate:{rotate:360},transition:{duration:30,repeat:1/0,ease:"linear"}}),(0,t.jsx)(i.motion.div,{className:"absolute inset-2 border border-acm-blue/20 rounded-full",animate:{rotate:-360},transition:{duration:20,repeat:1/0,ease:"linear"}}),(0,t.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,t.jsx)("div",{className:"w-3 h-3 bg-acm-blue/40 rounded-full"})}),(0,t.jsx)(i.motion.div,{className:"absolute w-2 h-2 bg-acm-blue rounded-full",style:{top:"50%",left:"50%",marginTop:"-4px",marginLeft:"-4px"},animate:{x:[0,40,0,-40,0],y:[-40,0,40,0,-40]},transition:{duration:8,repeat:1/0,ease:"linear"}})]})}),(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"mb-8",children:(0,t.jsx)("span",{className:"text-8xl md:text-9xl font-black text-acm-blue/10 leading-none select-none",style:{fontFamily:"var(--font-heading)"},children:"“"})}),(0,t.jsx)(i.motion.blockquote,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3},children:(0,t.jsxs)("span",{className:"block text-2xl md:text-4xl lg:text-5xl font-black text-white/80 leading-[1.2] tracking-normal",style:{fontFamily:"var(--font-heading)"},children:["EVERY STORY WE TELL IS A"," ",(0,t.jsxs)("span",{className:"relative inline-block",style:{background:"linear-gradient(135deg, #0085CA 0%, #00A3FF 50%, #0085CA 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["WINDOW",(0,t.jsx)(i.motion.span,{className:"absolute -bottom-1 left-0 right-0 h-px bg-acm-blue/40 block",initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0},transition:{duration:.8,delay:.8}})]})," ","INTO THE MINDS THAT SHAPE OUR FUTURE"]})}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.6},className:"mt-12 flex items-center gap-6",children:[(0,t.jsx)("div",{className:"w-12 md:w-20 h-px bg-linear-to-r from-transparent to-white/20"}),(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] tracking-[0.5em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:"ACM Editorial Team"}),(0,t.jsx)("div",{className:"w-12 md:w-20 h-px bg-linear-to-l from-transparent to-white/20"})]}),(0,t.jsx)(i.motion.div,{initial:{scaleY:0},whileInView:{scaleY:1},viewport:{once:!0},transition:{duration:.8,delay:.8},className:"mt-16 w-px h-24 bg-linear-to-b from-acm-blue/40 to-transparent origin-top"})]})]})}var c=e.i(87652),d=e.i(15057),m=e.i(3116);function h({posts:e,onPostClick:s}){let n=(0,a.useRef)(null),r=(0,a.useRef)(null),o=(0,c.useInView)(r,{once:!0,margin:"-100px"}),l=e.filter(e=>e.featured).slice(0,3),h=l[0],p=l.slice(1,3);return(0,t.jsxs)("section",{ref:n,className:"relative bg-[#030303] py-32 md:py-40 overflow-hidden",children:[(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute top-0 left-1/4 w-[600px] h-[600px] bg-acm-blue/[0.03] rounded-full blur-[200px]"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/[0.02] rounded-full blur-[180px]"}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.015]",style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,backgroundSize:"80px 80px"}})]}),(0,t.jsxs)("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20",children:[(0,t.jsxs)(i.motion.div,{ref:r,initial:{opacity:0,y:40},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,ease:[.22,1,.36,1]},className:"mb-16 md:mb-24",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] font-medium tracking-[0.3em] text-acm-blue uppercase",style:{fontFamily:"var(--font-body)"},children:"01"}),(0,t.jsx)("div",{className:"w-12 md:w-20 h-px bg-acm-blue/40"}),(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] font-light tracking-[0.4em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:"Featured Stories"})]}),(0,t.jsxs)("h2",{className:"text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-normal leading-[0.95]",style:{fontFamily:"var(--font-heading)"},children:["TALES THAT ",(0,t.jsx)("span",{className:"text-acm-blue",children:"INSPIRE"})]})]}),(0,t.jsxs)("div",{className:"grid lg:grid-cols-12 gap-6 md:gap-8",children:[h&&(0,t.jsx)(i.motion.article,{initial:{opacity:0,y:60},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:[.22,1,.36,1]},onClick:()=>s?.(h),className:"lg:col-span-7 group cursor-pointer",children:(0,t.jsxs)("div",{className:"relative h-full bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-acm-blue/20",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, rgba(0,133,202,0.15) 0%, rgba(10,10,20,1) 60%, rgba(0,0,0,1) 100%)"}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"}),(0,t.jsx)("div",{className:"absolute top-6 left-6 z-10",children:(0,t.jsx)("span",{className:"px-4 py-2 bg-acm-blue/20 backdrop-blur-md border border-acm-blue/30 text-[10px] tracking-[0.2em] text-acm-blue uppercase",style:{fontFamily:"var(--font-body)"},children:h.category})}),(0,t.jsx)("div",{className:"absolute top-6 right-6 z-10",children:(0,t.jsx)("span",{className:"px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-[9px] tracking-[0.15em] text-white/60 uppercase",style:{fontFamily:"var(--font-body)"},children:"Featured"})}),(0,t.jsx)(i.motion.div,{className:"absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none",style:{background:"linear-gradient(180deg, transparent 0%, rgba(0, 133, 202, 0.03) 50%, transparent 100%)",backgroundSize:"100% 200%"},animate:{backgroundPosition:["0% 0%","0% 100%"]},transition:{duration:2,repeat:1/0,ease:"linear"}})]}),(0,t.jsxs)("div",{className:"p-6 md:p-8",children:[(0,t.jsx)("h3",{className:"text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 group-hover:text-acm-blue transition-colors duration-300 tracking-normal",style:{fontFamily:"var(--font-heading)"},children:h.title}),(0,t.jsx)("p",{className:"text-white/50 text-base md:text-lg mb-4",style:{fontFamily:"var(--font-body)"},children:h.subtitle}),(0,t.jsx)("p",{className:"text-white/30 text-sm md:text-base leading-relaxed mb-6 line-clamp-2",style:{fontFamily:"var(--font-body)"},children:h.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between pt-6 border-t border-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-full bg-linear-to-br from-acm-blue/40 to-acm-blue/10 border border-white/10 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-[10px] font-bold text-acm-blue",children:h.author.name.split(" ").map(e=>e[0]).join("")})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"block text-sm text-white/70",style:{fontFamily:"var(--font-body)"},children:h.author.name}),(0,t.jsx)("span",{className:"text-[10px] text-acm-blue/70 uppercase tracking-wider",style:{fontFamily:"var(--font-body)"},children:h.author.team})]})]}),(0,t.jsx)("div",{className:"w-px h-8 bg-white/10"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-white/30",children:[(0,t.jsx)(m.Clock,{size:14}),(0,t.jsx)("span",{className:"text-xs",style:{fontFamily:"var(--font-body)"},children:h.readTime})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-white/40 group-hover:text-acm-blue transition-colors duration-300",children:[(0,t.jsx)("span",{className:"text-xs uppercase tracking-wider",style:{fontFamily:"var(--font-body)"},children:"Read Story"}),(0,t.jsx)(d.ArrowUpRight,{size:16,className:"group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"})]})]})]}),(0,t.jsx)("div",{className:"absolute -inset-px bg-linear-to-br from-acm-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"})]})}),(0,t.jsx)("div",{className:"lg:col-span-5 flex flex-col gap-6 md:gap-8",children:p.map((e,a)=>(0,t.jsx)(u,{post:e,index:a,onClick:()=>s?.(e)},e.id))})]})]})]})}function u({post:e,index:s,onClick:n}){let r=(0,a.useRef)(null),o=(0,c.useInView)(r,{once:!0,margin:"-50px"});return(0,t.jsx)(i.motion.article,{ref:r,initial:{opacity:0,y:40},animate:o?{opacity:1,y:0}:{},transition:{duration:.6,delay:.15*s,ease:[.22,1,.36,1]},onClick:n,className:"group cursor-pointer flex-1",children:(0,t.jsxs)("div",{className:"relative h-full bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-acm-blue/20",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row h-full",children:[(0,t.jsxs)("div",{className:"relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{background:`linear-gradient(135deg, rgba(0,133,202,${.1+.05*s}) 0%, rgba(10,10,20,1) 60%, rgba(0,0,0,1) 100%)`}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-linear-to-r from-transparent to-[#0a0a0a] opacity-60"}),(0,t.jsx)("div",{className:"absolute top-4 left-4 z-10",children:(0,t.jsx)("span",{className:"px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] tracking-[0.15em] text-white/60 uppercase",style:{fontFamily:"var(--font-body)"},children:e.category})})]}),(0,t.jsxs)("div",{className:"flex-1 p-5 md:p-6 flex flex-col justify-center",children:[(0,t.jsx)("h3",{className:"text-lg md:text-xl font-black text-white mb-2 group-hover:text-acm-blue transition-colors duration-300 tracking-normal line-clamp-2",style:{fontFamily:"var(--font-heading)"},children:e.title}),(0,t.jsx)("p",{className:"text-white/30 text-sm mb-4 line-clamp-2",style:{fontFamily:"var(--font-body)"},children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-auto pt-4 border-t border-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-5 h-5 rounded-full bg-linear-to-br from-acm-blue/30 to-acm-blue/10 border border-white/10 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-[8px] font-bold text-acm-blue",children:e.author.name.split(" ").map(e=>e[0]).join("")})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-xs text-white/50",style:{fontFamily:"var(--font-body)"},children:e.author.name}),(0,t.jsx)("span",{className:"text-[9px] text-acm-blue/60",style:{fontFamily:"var(--font-body)"},children:e.author.team})]}),(0,t.jsx)("span",{className:"text-white/20",children:"·"}),(0,t.jsx)("span",{className:"text-xs text-white/30",style:{fontFamily:"var(--font-body)"},children:e.readTime})]}),(0,t.jsx)(d.ArrowUpRight,{size:14,className:"text-white/30 group-hover:text-acm-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"})]})]})]}),(0,t.jsx)("div",{className:"absolute -inset-px bg-linear-to-br from-acm-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"})]})})}var p=e.i(88653);let x=[{id:"1",title:"Understanding Blockchain: Beyond Cryptocurrency",subtitle:"A Deep Dive into Distributed Ledger Technology",excerpt:"Blockchain technology extends far beyond Bitcoin. Learn how this revolutionary technology is transforming industries from supply chain to healthcare.",content:`Blockchain technology has emerged as one of the most transformative innovations of the 21st century. While most people associate blockchain with cryptocurrencies like Bitcoin and Ethereum, the underlying technology has far-reaching applications that extend well beyond digital currencies.

## What is Blockchain?

At its core, a blockchain is a distributed, decentralized ledger that records transactions across a network of computers. Each "block" contains a cryptographic hash of the previous block, a timestamp, and transaction data. This creates an immutable chain of records that is extremely difficult to alter retroactively.

The key characteristics that make blockchain revolutionary are:

1. **Decentralization**: No single entity controls the network
2. **Transparency**: All transactions are visible to network participants
3. **Immutability**: Once recorded, data cannot be easily modified
4. **Security**: Cryptographic techniques ensure data integrity

## How Blockchain Works

When a new transaction occurs, it is broadcast to a peer-to-peer network of computers, known as nodes. These nodes validate the transaction using known algorithms. Once verified, the transaction is combined with other transactions to create a new block of data for the ledger.

The new block is then added to the existing blockchain in a way that is permanent and unalterable. This process, known as consensus, ensures that all copies of the distributed ledger share the same state.

## Beyond Cryptocurrency: Real-World Applications

### Supply Chain Management

Companies like Walmart and Maersk are using blockchain to track products from origin to consumer. This provides unprecedented transparency and helps identify issues like contamination sources within seconds rather than days.

### Healthcare

Blockchain can securely store patient records, ensuring data integrity while allowing authorized healthcare providers instant access to medical histories. This could save lives in emergency situations.

### Voting Systems

Several countries are exploring blockchain-based voting systems to ensure election integrity. The immutable nature of blockchain makes it nearly impossible to tamper with votes.

### Smart Contracts

Perhaps the most exciting application is smart contracts—self-executing contracts with the terms directly written into code. These eliminate the need for intermediaries and automatically enforce agreements when conditions are met.

## The Future of Blockchain

As the technology matures, we're seeing the emergence of more efficient consensus mechanisms like Proof of Stake, which addresses the energy consumption concerns of traditional Proof of Work systems. Layer 2 solutions are also making blockchain transactions faster and cheaper.

The intersection of blockchain with other emerging technologies like AI and IoT promises even more innovative applications. We're still in the early stages of understanding what's possible with this technology.

## Conclusion

Blockchain is not just about cryptocurrency—it's about creating trust in a trustless environment. As developers and technologists, understanding blockchain fundamentals will be crucial as this technology continues to reshape how we think about data, trust, and digital interactions.`,author:{name:"Karan Malhotra",role:"Blockchain Enthusiast",team:"Technical Domain",avatar:"/team/karan.jpg"},category:"Blockchain",tags:["Blockchain","Web3","Cryptocurrency","Technology"],image:"/blogs/blockchain.jpg",readTime:"12 min read",publishedAt:"2025-11-28",featured:!0},{id:"2",title:"The Psychology of Great UI/UX Design",subtitle:"How Cognitive Science Shapes User Experience",excerpt:"Great design isn't just about aesthetics—it's about understanding how the human mind works and creating interfaces that feel intuitive and effortless.",content:`Design is not just about making things look pretty. It's about understanding human psychology and creating experiences that feel natural, intuitive, and delightful. The best interfaces are ones you don't even notice—they just work.

## The Psychology Behind Good Design

Every design decision should be grounded in an understanding of how humans perceive, process, and interact with information. Here are the key psychological principles every designer should know:

### Hick's Law

The time it takes to make a decision increases with the number and complexity of choices. This is why minimalist interfaces often outperform feature-heavy alternatives. When designing, always ask: "Can I reduce the number of options without sacrificing functionality?"

### Fitts's Law

The time to acquire a target is a function of the distance to and size of the target. This is why important buttons should be large and easily accessible. On mobile devices, this means placing primary actions within thumb reach.

### The Von Restorff Effect

When multiple similar objects are present, the one that differs from the rest is most likely to be remembered. This is why call-to-action buttons should stand out from the rest of the interface through color, size, or positioning.

## The Power of Visual Hierarchy

Visual hierarchy guides users through your interface in the order you intend. It's achieved through:

1. **Size**: Larger elements draw attention first
2. **Color**: Bright or contrasting colors stand out
3. **Spacing**: White space creates breathing room and focus
4. **Typography**: Font weight and size establish importance

## Cognitive Load Theory

Users have limited mental resources. Every element on your interface competes for attention. Cognitive load theory suggests we should:

- Chunk information into digestible pieces
- Use progressive disclosure to reveal complexity gradually
- Maintain consistency to reduce learning curves
- Provide clear feedback for user actions

## The Role of Emotion in Design

Emotional design operates on three levels:

### Visceral Level
The immediate, gut reaction to a design. This is about aesthetics—colors, shapes, and visual appeal that create an instant emotional response.

### Behavioral Level
How the product works and feels to use. A well-designed interface that responds smoothly creates satisfaction and trust.

### Reflective Level
The meaning and personal significance of the product. This is about brand identity and how using the product makes users feel about themselves.

## Mobile-First Thinking

With over 50% of web traffic coming from mobile devices, designing for mobile isn't optional—it's essential. Mobile-first design forces you to:

- Prioritize content ruthlessly
- Simplify navigation
- Optimize touch targets
- Consider context of use

## Accessibility is Good Design

Designing for accessibility isn't just about compliance—it's about creating better experiences for everyone. High contrast text, clear typography, and logical navigation benefit all users, not just those with disabilities.

## Conclusion

Great UI/UX design is invisible. When users accomplish their goals without friction, without confusion, without frustration—that's when you know the design is working. Remember: you're not designing for yourself; you're designing for humans with limited attention, patience, and cognitive resources.`,author:{name:"Nisha Kapoor",role:"Design Enthusiast",team:"Creative Domain",avatar:"/team/nisha.jpg"},category:"Design",tags:["UI/UX","Design Psychology","User Experience"],image:"/blogs/uiux.jpg",readTime:"10 min read",publishedAt:"2025-11-22",featured:!0},{id:"3",title:"Demystifying Machine Learning Algorithms",subtitle:"From Linear Regression to Neural Networks",excerpt:"Machine learning can seem like magic, but at its core, it's all about mathematics and pattern recognition. Let's break down the fundamentals.",content:`Machine learning has transformed from an academic curiosity into the driving force behind some of the most impactful technologies of our time. From recommendation systems to autonomous vehicles, ML is everywhere. But what's actually happening under the hood?

## What is Machine Learning?

At its essence, machine learning is about creating systems that can learn from data rather than being explicitly programmed. Instead of writing rules, we feed the algorithm examples and let it discover patterns.

There are three main types of machine learning:

1. **Supervised Learning**: Learning from labeled examples
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Linear Regression: The Foundation

Linear regression is often the first algorithm taught in ML courses, and for good reason—it's simple yet powerful. The goal is to find the best-fitting line through your data points.

The model learns two parameters:
- **Slope (m)**: How much Y changes for each unit change in X
- **Intercept (b)**: The value of Y when X is zero

The learning process involves minimizing the difference between predicted and actual values, typically using gradient descent to iteratively adjust parameters.

## Classification Algorithms

### Logistic Regression

Despite its name, logistic regression is used for classification. It predicts the probability that an instance belongs to a particular class using the sigmoid function to squash outputs between 0 and 1.

### Decision Trees

Decision trees split data based on feature values, creating a tree-like structure of decisions. They're intuitive and interpretable but prone to overfitting.

### Random Forests

An ensemble of decision trees that vote on predictions. By training many trees on random subsets of data, random forests reduce overfitting and improve accuracy.

## The Magic of Neural Networks

Neural networks are inspired by biological neurons. They consist of:

- **Input Layer**: Receives the raw data
- **Hidden Layers**: Process information through weighted connections
- **Output Layer**: Produces the final prediction

### Backpropagation

The learning algorithm that makes neural networks work. When the network makes a prediction, the error is calculated and propagated backward through the network, adjusting weights to reduce future errors.

### Deep Learning

Deep learning uses neural networks with many hidden layers. These deep networks can learn hierarchical representations—lower layers learn simple features, while higher layers combine them into complex concepts.

## Evaluation Metrics

How do we know if our model is good? Common metrics include:

- **Accuracy**: Percentage of correct predictions
- **Precision**: Of predicted positives, how many are actually positive?
- **Recall**: Of actual positives, how many did we predict?
- **F1 Score**: Harmonic mean of precision and recall

## The Bias-Variance Tradeoff

Every ML model faces a fundamental tradeoff:

- **High Bias**: Model is too simple, underfits the data
- **High Variance**: Model is too complex, overfits the training data

The goal is to find the sweet spot where the model generalizes well to new data.

## Practical Tips

1. **Start simple**: Begin with linear models before trying complex ones
2. **Feature engineering matters**: Good features often beat complex algorithms
3. **Cross-validation**: Always validate on data the model hasn't seen
4. **Regularization**: Add penalties to prevent overfitting

## Conclusion

Machine learning isn't magic—it's mathematics. Understanding the fundamentals helps you choose the right algorithm for your problem and debug issues when they arise. The field is constantly evolving, but these foundational concepts remain relevant.`,author:{name:"Rahul Krishnan",role:"ML Researcher",team:"Technical Domain",avatar:"/team/rahul.jpg"},category:"Machine Learning",tags:["AI","Machine Learning","Neural Networks","Algorithms"],image:"/blogs/ml.jpg",readTime:"14 min read",publishedAt:"2025-11-15",featured:!0},{id:"4",title:"Mastering Data Structures & Algorithms",subtitle:"The Building Blocks of Efficient Code",excerpt:"Data structures and algorithms are the foundation of computer science. Master these concepts to write code that scales and performs.",content:`Every program you write is essentially manipulating data. How you organize that data—your choice of data structure—and how you process it—your algorithms—determines whether your code is fast or slow, elegant or clunky.

## Why DSA Matters

In an age of abundant computing power, why should we care about efficiency? Consider this: the difference between O(n) and O(n\xb2) for a billion elements is the difference between 1 second and 31 years. Scale matters.

## Essential Data Structures

### Arrays

The most fundamental data structure. Arrays provide O(1) access by index but O(n) insertion and deletion. Use arrays when you need fast random access and know the size upfront.

### Linked Lists

Each element points to the next, allowing O(1) insertion and deletion at known positions. However, access is O(n). Choose linked lists when you frequently insert/delete but rarely access by index.

### Hash Tables

The workhorse of modern programming. Hash tables provide average O(1) access, insertion, and deletion. The magic is in the hash function, which converts keys to array indices.

Collision handling strategies:
- **Chaining**: Store collisions in linked lists
- **Open Addressing**: Find alternative slots using probing

### Trees

Hierarchical data structures with many variants:

**Binary Search Trees** maintain sorted order with O(log n) operations on average. However, unbalanced trees degrade to O(n).

**AVL and Red-Black Trees** self-balance to guarantee O(log n) operations.

**B-Trees** are optimized for disk access, used extensively in databases.

### Graphs

Networks of nodes and edges. Represented as:
- **Adjacency Matrix**: O(1) edge lookup, O(V\xb2) space
- **Adjacency List**: Space-efficient for sparse graphs

## Core Algorithms

### Sorting

**QuickSort**: Average O(n log n), in-place, but O(n\xb2) worst case
**MergeSort**: Guaranteed O(n log n), stable, but requires O(n) extra space
**HeapSort**: O(n log n), in-place, not stable

For practical purposes, most languages use hybrid algorithms like Timsort (Python) or IntroSort (C++).

### Searching

**Binary Search**: O(log n) on sorted arrays. The key insight is eliminating half the search space with each comparison.

### Graph Algorithms

**BFS (Breadth-First Search)**: Explores neighbors first, finds shortest paths in unweighted graphs.

**DFS (Depth-First Search)**: Explores as deep as possible first, useful for topological sorting and cycle detection.

**Dijkstra's Algorithm**: Finds shortest paths in weighted graphs with non-negative edges.

## Dynamic Programming

DP is about breaking problems into overlapping subproblems and storing solutions to avoid redundant computation.

The approach:
1. Identify the recursive structure
2. Define the state
3. Find the recurrence relation
4. Decide between top-down (memoization) or bottom-up (tabulation)

Classic problems: Fibonacci, Longest Common Subsequence, Knapsack, Edit Distance.

## Complexity Analysis

Big O notation describes how runtime grows with input size:

- **O(1)**: Constant time
- **O(log n)**: Logarithmic (binary search)
- **O(n)**: Linear (simple loop)
- **O(n log n)**: Linearithmic (efficient sorting)
- **O(n\xb2)**: Quadratic (nested loops)
- **O(2ⁿ)**: Exponential (brute force)

## Practical Advice

1. **Understand the problem** before coding
2. **Consider constraints**: Input size determines acceptable complexity
3. **Start with brute force**, then optimize
4. **Practice regularly**: LeetCode, HackerRank, Codeforces
5. **Learn to recognize patterns**: Many problems are variations of classics

## Conclusion

DSA mastery doesn't come overnight. It requires consistent practice and deep understanding. But the investment pays dividends throughout your career—in interviews, in building scalable systems, and in becoming a better problem solver.`,author:{name:"Ayesha Rahman",role:"Competitive Programmer",team:"Technical Domain",avatar:"/team/ayesha.jpg"},category:"Programming",tags:["Algorithms","Data Structures","Problem Solving","Coding"],image:"/blogs/dsa.jpg",readTime:"11 min read",publishedAt:"2025-11-08",featured:!1},{id:"5",title:"Web3: The Decentralized Internet",subtitle:"Understanding the Next Evolution of the Web",excerpt:"Web3 promises to reshape how we interact online—giving users ownership, privacy, and control. But what does this actually mean in practice?",content:`The internet has gone through remarkable transformations. Web1 was read-only—static pages delivering information. Web2 brought interactivity—social media, user-generated content, and platforms. Now, Web3 promises something revolutionary: a decentralized internet where users own their data and identity.

## The Evolution of the Web

### Web1 (1990-2004): The Read-Only Web
Static HTML pages, limited interaction. Content creators were few; most users were passive consumers.

### Web2 (2004-present): The Social Web
Dynamic platforms, user-generated content, social networks. But a few corporations control the infrastructure and profit from user data.

### Web3: The Ownership Web
Decentralized applications, user sovereignty, token-based economics. Users own their data, identity, and digital assets.

## Core Concepts of Web3

### Decentralization

Instead of data living on corporate servers, Web3 applications run on distributed networks. No single entity controls the system, making it resistant to censorship and single points of failure.

### Blockchain Infrastructure

Public blockchains like Ethereum provide the foundation for Web3. Smart contracts—self-executing code on the blockchain—enable trustless interactions without intermediaries.

### Wallets as Identity

In Web3, your wallet is your identity. Instead of creating accounts with each service, you connect your wallet. Your transaction history, assets, and credentials travel with you.

### Tokens and Ownership

Tokens represent ownership—of assets, governance rights, or access. This enables new economic models where users can own a piece of the platforms they use.

## Key Technologies

### Smart Contracts

Code that executes automatically when conditions are met. Solidity is the primary language for Ethereum smart contracts. They enable:

- Decentralized exchanges (DEXs)
- Lending protocols
- NFT marketplaces
- DAOs (Decentralized Autonomous Organizations)

### NFTs (Non-Fungible Tokens)

Unique digital assets on the blockchain. Beyond art and collectibles, NFTs can represent:

- Event tickets
- Domain names
- Real estate deeds
- Academic credentials

### DeFi (Decentralized Finance)

Financial services without traditional intermediaries. Lending, borrowing, trading—all executed by smart contracts. Total value locked in DeFi protocols has exceeded $100 billion.

### DAOs

Organizations governed by smart contracts and token holders. Members vote on proposals, with execution happening automatically on-chain. DAOs are experimenting with new forms of collective decision-making.

## Challenges and Criticisms

### Scalability

Current blockchains struggle with transaction throughput. Ethereum processes about 15 transactions per second compared to Visa's 65,000. Layer 2 solutions and alternative chains are addressing this.

### User Experience

Seed phrases, gas fees, transaction confirmations—the current UX is complex and intimidating for mainstream users. Significant work is needed to make Web3 accessible.

### Environmental Concerns

Proof of Work consensus consumes significant energy. The shift to Proof of Stake (as Ethereum completed in 2022) dramatically reduces environmental impact.

### Speculation and Scams

The space has attracted bad actors. Rug pulls, phishing attacks, and unsustainable tokenomics have harmed users. Education and security best practices are essential.

## Building on Web3

Popular development tools include:

- **Hardhat/Foundry**: Development environments
- **ethers.js/web3.js**: JavaScript libraries for blockchain interaction
- **IPFS**: Decentralized file storage
- **The Graph**: Indexing and querying blockchain data

## The Road Ahead

Web3 is still nascent. Many applications are experiments, and the technology is evolving rapidly. But the core vision—an internet where users have ownership and control—represents a meaningful alternative to the current centralized model.

Whether Web3 achieves mainstream adoption depends on solving real problems for real users, not just creating speculative assets. The builders who focus on utility over hype will shape what Web3 becomes.`,author:{name:"Vikrant Thakur",role:"Web3 Developer",team:"Technical Domain",avatar:"/team/vikrant.jpg"},category:"Web3",tags:["Web3","Blockchain","DeFi","Cryptocurrency"],image:"/blogs/web3.jpg",readTime:"13 min read",publishedAt:"2025-10-30",featured:!1},{id:"6",title:"The Art of Clean Code",subtitle:"Writing Software That Humans Can Understand",excerpt:"Code is read far more often than it's written. Learn the principles that separate professional, maintainable code from spaghetti chaos.",content:`We spend far more time reading code than writing it. Yet most developers focus on getting code to work rather than making it readable. Clean code is not a luxury—it's a necessity for sustainable software development.

## Why Clean Code Matters

Technical debt compounds. Every shortcut, every "I'll fix it later," every cryptic variable name makes the codebase harder to understand and modify. Eventually, development slows to a crawl as developers spend more time deciphering existing code than writing new features.

## Naming Things

Naming is one of the hardest problems in computer science—and one of the most important.

### Variables

Bad: \`d\`, \`temp\`, \`data\`
Good: \`elapsedTimeInDays\`, \`userProfile\`, \`validatedTransactions\`

Names should reveal intent. A reader should understand what a variable holds without tracing through the code.

### Functions

Functions should do one thing and be named accordingly:

Bad: \`processData()\`
Good: \`calculateMonthlyRevenue()\`, \`validateUserCredentials()\`

If you struggle to name a function, it might be doing too much.

### Classes

Classes represent concepts. Name them as nouns that describe what they encapsulate:

- \`UserAuthentication\`
- \`PaymentProcessor\`
- \`EmailNotificationService\`

## Functions: The Building Blocks

### Keep Them Small

Functions should be short—ideally under 20 lines. If a function is too long, it's doing too much. Extract smaller functions with descriptive names.

### Single Responsibility

A function should do one thing and do it well. If you describe a function with "and," it needs to be split.

### Arguments

Fewer arguments are better. Zero is ideal, three is the maximum for readability. If you need more, consider creating an object to hold the parameters.

### No Side Effects

Pure functions—those that don't modify external state—are easier to test and reason about. When side effects are necessary, make them obvious.

## Comments: Use Sparingly

Good code is self-documenting. Comments should explain *why*, not *what*. If you need a comment to explain what code does, the code probably needs refactoring.

### Good Comments

- Legal requirements (licenses, copyright)
- Intent explanation for non-obvious decisions
- Warning of consequences
- TODO notes (temporarily)

### Bad Comments

- Restating what the code does
- Commented-out code
- Changelog comments
- Redundant documentation

## Error Handling

### Use Exceptions, Not Return Codes

Exceptions separate error handling from the main logic, making both clearer.

### Provide Context

Error messages should include enough information to diagnose the problem. What operation failed? What were the inputs?

### Don't Return Null

Returning null forces callers to add null checks everywhere. Consider returning empty collections or using Optional/Maybe types.

## Testing

Clean code is testable code. If code is hard to test, it's usually a sign of poor design.

### The AAA Pattern

- **Arrange**: Set up test conditions
- **Act**: Execute the code under test
- **Assert**: Verify the results

### Test One Thing

Each test should verify one behavior. When a test fails, you should immediately know what broke.

## Code Smells

Learn to recognize these warning signs:

- **Long Methods**: Break them down
- **Large Classes**: Split by responsibility
- **Duplicate Code**: Extract common functionality
- **Dead Code**: Delete it
- **Magic Numbers**: Use named constants
- **Deep Nesting**: Flatten with early returns

## The Boy Scout Rule

Leave the codebase cleaner than you found it. Small, continuous improvements prevent decay.

## Conclusion

Clean code isn't about perfection—it's about communication. We write code for other humans (including our future selves) to read and modify. Every line should be clear, every function purposeful, every class well-defined.

The best programmers aren't those who write clever code. They're those who write code that everyone can understand.`,author:{name:"Meera Joshi",role:"Software Engineer",team:"Technical Domain",avatar:"/team/meera.jpg"},category:"Programming",tags:["Clean Code","Best Practices","Software Engineering"],image:"/blogs/cleancode.jpg",readTime:"9 min read",publishedAt:"2025-10-22",featured:!1}],b=["All","Blockchain","Design","Machine Learning","Programming","Web3"];var g=e.i(75254);let f=(0,g.default)("funnel",[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]]);function y({posts:e,onPostClick:s}){let[n,r]=(0,a.useState)("All"),[o,l]=(0,a.useState)(null),d=(0,a.useRef)(null),m=(0,c.useInView)(d,{once:!0,margin:"-100px"}),h="All"===n?e:e.filter(e=>e.category===n);return(0,t.jsxs)("section",{className:"relative bg-[#030303] py-20 sm:py-32 md:py-40 overflow-hidden",children:[(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute top-1/4 right-0 w-[500px] h-[500px] bg-acm-blue/[0.02] rounded-full blur-[200px]"}),(0,t.jsx)("div",{className:"absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-900/[0.015] rounded-full blur-[150px]"}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.02]",style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,backgroundSize:"60px 60px"}})]}),(0,t.jsxs)("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20",children:[(0,t.jsxs)(i.motion.div,{ref:d,initial:{opacity:0,y:40},animate:m?{opacity:1,y:0}:{},transition:{duration:.8,ease:[.22,1,.36,1]},className:"mb-12 md:mb-16",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] font-medium tracking-[0.3em] text-acm-blue uppercase",style:{fontFamily:"var(--font-body)"},children:"02"}),(0,t.jsx)("div",{className:"w-12 md:w-20 h-px bg-acm-blue/40"}),(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] font-light tracking-[0.4em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:"All Stories"})]}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-8",children:[(0,t.jsxs)("h2",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-normal",style:{fontFamily:"var(--font-heading)"},children:["EXPLORE THE ",(0,t.jsx)("span",{className:"text-acm-blue",children:"ARCHIVE"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-8 h-px bg-white/20"}),(0,t.jsxs)("span",{className:"text-sm text-white/40",style:{fontFamily:"var(--font-body)"},children:[h.length," ",1===h.length?"Story":"Stories"]})]})]})]}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mb-12 md:mb-16",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,t.jsx)(f,{size:14,className:"text-white/30"}),(0,t.jsx)("span",{className:"text-[10px] tracking-[0.3em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:"Filter by Category"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 md:gap-3",children:b.map(e=>(0,t.jsxs)("button",{onClick:()=>r(e),className:`relative px-4 md:px-5 py-2 md:py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${n===e?"bg-acm-blue/20 border-acm-blue/40 text-acm-blue":"bg-white/[0.02] border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"}`,style:{fontFamily:"var(--font-body)"},children:[n===e&&(0,t.jsx)(i.motion.div,{layoutId:"activeCategory",className:"absolute inset-0 bg-acm-blue/10 border border-acm-blue/30",transition:{type:"spring",stiffness:400,damping:30}}),(0,t.jsx)("span",{className:"relative z-10",children:e})]},e))})]}),(0,t.jsx)(i.motion.div,{layout:!0,className:"grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3",children:(0,t.jsx)(p.AnimatePresence,{mode:"popLayout",children:h.map((e,a)=>(0,t.jsx)(v,{post:e,index:a,isHovered:o===e.id,onHover:()=>l(e.id),onLeave:()=>l(null),onClick:()=>s?.(e)},e.id))})}),0===h.length&&(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},className:"py-24 text-center",children:[(0,t.jsx)("div",{className:"w-16 h-16 mx-auto mb-6 border border-white/10 flex items-center justify-center",children:(0,t.jsx)(f,{size:24,className:"text-white/20"})}),(0,t.jsx)("p",{className:"text-sm text-white/30 uppercase tracking-wider",style:{fontFamily:"var(--font-body)"},children:"No stories found in this category"})]})]})]})}function v({post:e,index:s,isHovered:n,onHover:r,onLeave:o,onClick:l}){let h=(0,a.useRef)(null),u=(0,c.useInView)(h,{once:!0,margin:"-50px"});return(0,t.jsx)(i.motion.article,{ref:h,layout:!0,initial:{opacity:0,y:40,scale:.95},animate:u?{opacity:1,y:0,scale:1}:{},exit:{opacity:0,scale:.95,y:-20},transition:{duration:.5,delay:.08*s,layout:{duration:.4},ease:[.22,1,.36,1]},onMouseEnter:r,onMouseLeave:o,onClick:l,className:"group cursor-pointer",children:(0,t.jsxs)("div",{className:"relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-acm-blue/20",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white/10 group-hover:border-acm-blue/40 transition-colors duration-500 z-10"}),(0,t.jsxs)("div",{className:"relative aspect-[16/10] overflow-hidden",children:[(0,t.jsx)(i.motion.div,{className:"absolute inset-0",style:{background:`linear-gradient(135deg, rgba(0,133,202,${.08+parseInt(e.id)%5*.03}) 0%, rgba(10,10,20,1) 60%, rgba(0,0,0,1) 100%)`},animate:{scale:n?1.1:1},transition:{duration:.6,ease:"easeOut"}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-80"}),(0,t.jsx)("div",{className:"absolute top-4 left-4 z-10",children:(0,t.jsx)("span",{className:"px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] tracking-[0.15em] text-white/60 uppercase",style:{fontFamily:"var(--font-body)"},children:e.category})}),(0,t.jsxs)("div",{className:"absolute top-4 right-4 z-10 flex items-center gap-1.5 text-white/40",children:[(0,t.jsx)(m.Clock,{size:12}),(0,t.jsx)("span",{className:"text-[9px] tracking-wider uppercase",style:{fontFamily:"var(--font-body)"},children:e.readTime})]}),(0,t.jsx)(i.motion.div,{className:"absolute inset-0 pointer-events-none",style:{background:"linear-gradient(180deg, transparent 0%, rgba(0, 133, 202, 0.03) 50%, transparent 100%)",backgroundSize:"100% 200%"},animate:n?{backgroundPosition:["0% 0%","0% 100%"]}:{},transition:{duration:2,repeat:1/0,ease:"linear"}})]}),(0,t.jsxs)("div",{className:"p-5 md:p-6",children:[(0,t.jsx)("h3",{className:"text-lg md:text-xl font-black text-white mb-2 group-hover:text-acm-blue transition-colors duration-300 tracking-normal line-clamp-2",style:{fontFamily:"var(--font-heading)"},children:e.title}),(0,t.jsx)("p",{className:"text-white/40 text-sm mb-3",style:{fontFamily:"var(--font-body)"},children:e.subtitle}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5 mb-4",children:e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"px-2 py-0.5 text-[9px] tracking-[0.1em] text-white/25 border border-white/5 bg-white/[0.02] uppercase",style:{fontFamily:"var(--font-body)"},children:e},e))}),(0,t.jsxs)("div",{className:"flex items-center justify-between pt-4 border-t border-white/5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-6 h-6 rounded-full bg-linear-to-br from-acm-blue/30 to-acm-blue/10 border border-white/10 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-[8px] font-bold text-acm-blue",children:e.author.name.split(" ").map(e=>e[0]).join("")})}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-xs text-white/50",style:{fontFamily:"var(--font-body)"},children:e.author.name}),(0,t.jsx)("span",{className:"text-[9px] text-acm-blue/60",style:{fontFamily:"var(--font-body)"},children:e.author.team})]})]}),(0,t.jsx)("span",{className:"text-[10px] text-white/30 uppercase tracking-wider",style:{fontFamily:"var(--font-body)"},children:new Date(e.publishedAt).toLocaleDateString("en-US",{month:"short",day:"numeric"})})]}),(0,t.jsxs)(i.motion.div,{className:"absolute bottom-5 right-5 flex items-center gap-2 text-acm-blue",initial:{opacity:0,x:-10},animate:{opacity:+!!n,x:n?0:-10},transition:{duration:.3},children:[(0,t.jsx)("span",{className:"text-[10px] uppercase tracking-wider",style:{fontFamily:"var(--font-body)"},children:"Read"}),(0,t.jsx)(d.ArrowUpRight,{size:14})]})]}),(0,t.jsx)(i.motion.div,{className:"absolute -inset-px pointer-events-none",animate:{boxShadow:n?"0 0 40px rgba(0,133,202,0.1), inset 0 0 30px rgba(0,133,202,0.03)":"0 0 0px rgba(0,133,202,0), inset 0 0 0px rgba(0,133,202,0)"},transition:{duration:.4}})]})})}var w=e.i(72520),j=e.i(63488),N=e.i(41966);let k=(0,g.default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);var T=e.i(61911),C=e.i(94351);function S(){let e=(0,a.useRef)(null),s=(0,c.useInView)(e,{once:!0,margin:"-100px"});return(0,t.jsxs)("section",{ref:e,className:"relative min-h-[80vh] overflow-hidden bg-[#030303] py-32 md:py-40",children:[(0,t.jsxs)("div",{className:"absolute inset-0 pointer-events-none",children:[(0,t.jsx)("div",{className:"absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-acm-blue/[0.05] rounded-full blur-[200px]"}),(0,t.jsx)("div",{className:"absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-900/[0.03] rounded-full blur-[180px]"}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-[0.015]",style:{backgroundImage:`linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,backgroundSize:"80px 80px"}}),(0,t.jsx)("div",{className:"absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/[0.02] to-transparent",style:{transform:"rotate(15deg)"}}),(0,t.jsx)("div",{className:"absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-acm-blue/[0.03] to-transparent",style:{transform:"rotate(-10deg)"}})]}),(0,t.jsx)("div",{className:"relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20",children:(0,t.jsxs)("div",{className:"flex flex-col items-center text-center max-w-4xl mx-auto",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6},className:"flex items-center gap-4 mb-8",children:[(0,t.jsx)("div",{className:"w-12 md:w-16 h-px bg-linear-to-r from-transparent to-acm-blue/40"}),(0,t.jsx)("span",{className:"text-[10px] md:text-[11px] tracking-[0.5em] text-acm-blue uppercase",style:{fontFamily:"var(--font-body)"},children:"Join the Narrative"}),(0,t.jsx)("div",{className:"w-12 md:w-16 h-px bg-linear-to-l from-transparent to-acm-blue/40"})]}),(0,t.jsxs)(i.motion.h2,{initial:{opacity:0,y:40},animate:s?{opacity:1,y:0}:{},transition:{duration:.8,delay:.1},className:"text-4xl md:text-6xl lg:text-7xl font-black tracking-normal leading-[0.95] mb-6",style:{fontFamily:"var(--font-heading)"},children:[(0,t.jsx)("span",{className:"text-white",children:"HAVE A STORY TO"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{background:"linear-gradient(135deg, #0085CA 0%, #00A3FF 50%, #0085CA 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"SHARE?"})]}),(0,t.jsx)(i.motion.div,{initial:{scaleX:0},animate:s?{scaleX:1}:{},transition:{duration:.8,delay:.3},className:"w-20 h-0.5 bg-linear-to-r from-transparent via-acm-blue to-transparent mb-8"}),(0,t.jsx)(i.motion.p,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6,delay:.4},className:"text-base md:text-lg text-white/40 max-w-2xl leading-relaxed mb-12",style:{fontFamily:"var(--font-body)"},children:"We're always looking for fresh perspectives and compelling voices. Whether it's a technical deep-dive, a project showcase, or insights from your journey—we want to hear from you."}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6,delay:.5},className:"flex flex-col sm:flex-row gap-4 md:gap-6 mb-16",children:[(0,t.jsxs)("a",{href:"mailto:usaracm@ipu.ac.in?subject=Blog Submission",className:"group relative px-8 py-4 bg-acm-blue/20 border border-acm-blue/40 hover:bg-acm-blue/30 hover:border-acm-blue/60 transition-all duration-300",children:[(0,t.jsxs)("span",{className:"relative z-10 flex items-center justify-center gap-3",children:[(0,t.jsx)(N.PenTool,{size:18,className:"text-acm-blue"}),(0,t.jsx)("span",{className:"text-sm font-medium text-white tracking-wide",style:{fontFamily:"var(--font-body)"},children:"Submit Your Story"}),(0,t.jsx)(w.ArrowRight,{size:16,className:"text-acm-blue group-hover:translate-x-1 transition-transform duration-300"})]}),(0,t.jsx)("div",{className:"absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-acm-blue/60"}),(0,t.jsx)("div",{className:"absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-acm-blue/60"})]}),(0,t.jsx)("a",{href:"/",className:"group relative px-8 py-4 bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300",children:(0,t.jsxs)("span",{className:"relative z-10 flex items-center justify-center gap-3",children:[(0,t.jsx)(C.Home,{size:18,className:"text-white/50"}),(0,t.jsx)("span",{className:"text-sm font-medium text-white/70 tracking-wide",style:{fontFamily:"var(--font-body)"},children:"Back to Home"})]})})]}),(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6,delay:.6},className:"flex items-center gap-8 md:gap-16 pt-8 border-t border-white/5",children:[{icon:k,value:"6",label:"Stories"},{icon:T.Users,value:"6",label:"Authors"},{icon:j.Mail,value:"500+",label:"Readers"}].map((e,a)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.4,delay:.7+.1*a},className:"text-center",children:[(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2 mb-2",children:[(0,t.jsx)(e.icon,{size:16,className:"text-acm-blue/60"}),(0,t.jsx)("span",{className:"text-2xl md:text-3xl font-black text-white",style:{fontFamily:"var(--font-heading)"},children:e.value})]}),(0,t.jsx)("span",{className:"text-[10px] tracking-[0.2em] text-white/30 uppercase",style:{fontFamily:"var(--font-body)"},children:e.label})]},e.label))})]})}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0",children:(0,t.jsx)(i.motion.div,{initial:{scaleX:0},animate:s?{scaleX:1}:{},transition:{duration:1.2,delay:.8},className:"h-px bg-linear-to-r from-transparent via-white/10 to-transparent"})})]})}let F=(0,g.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var A=e.i(87316),E=e.i(71689);let z=(0,g.default)("share-2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),W=(0,g.default)("bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);var D=e.i(55900);function L({post:e,isOpen:s,onClose:n}){let r=(0,a.useRef)(null),[o,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(0),h=(0,a.useCallback)(e=>{"Escape"===e.key&&n()},[n]),u=(0,a.useCallback)(()=>{if(r.current){let{scrollTop:e,scrollHeight:t,clientHeight:a}=r.current;d(Math.min(e/(t-a)*100,100)),l(e>500)}},[]);(0,a.useEffect)(()=>(s&&(document.body.style.overflow="hidden",window.addEventListener("keydown",h),d(0),l(!1)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",h)}),[s,h]);let x=(0,a.useMemo)(()=>e?.content?function(e){let a=e.split("\n"),i=[],s=[],n=0,r=e=>e.split(/(`[^`]+`)/g).map((e,a)=>e.startsWith("`")&&e.endsWith("`")?(0,t.jsx)("code",{className:"px-1.5 py-0.5 bg-white/10 rounded text-acm-blue font-mono text-sm",children:e.slice(1,-1)},a):e.split(/(\*\*[^*]+\*\*)/g).map((e,i)=>e.startsWith("**")&&e.endsWith("**")?(0,t.jsx)("strong",{className:"text-white font-semibold",children:e.slice(2,-2)},`${a}-${i}`):e)),o=()=>{if(s.length>0){let e=s.join(" ").trim();e&&i.push((0,t.jsx)("p",{className:"text-white/70 leading-[1.8] mb-6 text-base md:text-lg",children:r(e)},n++)),s=[]}};for(let e of a){let a=e.trim();if(a.startsWith("### "))o(),i.push((0,t.jsx)("h3",{className:"mt-10 mb-4 text-xl md:text-2xl font-bold text-white",children:a.replace("### ","")},n++));else if(a.startsWith("## "))o(),i.push((0,t.jsx)("h2",{className:"mt-12 mb-6 text-2xl md:text-3xl font-bold text-white border-l-2 border-acm-blue pl-4",children:a.replace("## ","")},n++));else if(a.startsWith("# "))o(),i.push((0,t.jsx)("h1",{className:"mt-12 mb-6 text-3xl md:text-4xl font-bold text-white",children:a.replace("# ","")},n++));else if(/^\d+\.\s/.test(a)){o();let e=a.replace(/^\d+\.\s/,"");i.push((0,t.jsxs)("div",{className:"ml-4 md:ml-6 mb-3 flex gap-3 text-white/70",children:[(0,t.jsxs)("span",{className:"text-acm-blue font-mono text-sm flex-shrink-0",children:[a.match(/^\d+/)?.[0],"."]}),(0,t.jsx)("span",{className:"text-base md:text-lg leading-relaxed",children:r(e)})]},n++))}else a.startsWith("- ")?(o(),i.push((0,t.jsxs)("div",{className:"ml-4 md:ml-6 mb-3 flex gap-3 text-white/70",children:[(0,t.jsx)("span",{className:"text-acm-blue mt-2",children:"•"}),(0,t.jsx)("span",{className:"text-base md:text-lg leading-relaxed",children:r(a.replace("- ",""))})]},n++))):""===a?o():s.push(a)}return o(),i}(e.content):null,[e?.content]);return e?(0,t.jsx)(p.AnimatePresence,{children:s&&(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-[100] bg-[#030303]",children:[(0,t.jsx)(i.motion.div,{className:"fixed top-0 left-0 right-0 h-1 bg-acm-blue/20 z-[110]",initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:(0,t.jsx)(i.motion.div,{className:"h-full bg-acm-blue",style:{width:`${c}%`}})}),(0,t.jsx)(i.motion.header,{initial:{y:-100},animate:{y:0},transition:{delay:.2,duration:.4,ease:[.22,1,.36,1]},className:"fixed top-0 left-0 right-0 z-[105] bg-[#030303]/80 backdrop-blur-xl border-b border-white/5",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between",children:[(0,t.jsxs)(i.motion.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:n,className:"group flex items-center gap-2 md:gap-3 text-white/60 hover:text-white transition-colors",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-acm-blue/50 group-hover:bg-acm-blue/10 transition-all",children:(0,t.jsx)(E.ArrowLeft,{className:"w-4 h-4 group-hover:text-acm-blue transition-colors"})}),(0,t.jsx)("span",{className:"hidden md:block text-sm font-medium",children:"Back to Blogs"})]}),(0,t.jsx)("div",{className:"absolute left-1/2 -translate-x-1/2 hidden md:block",children:(0,t.jsx)("span",{className:"text-xs font-medium tracking-widest text-acm-blue uppercase",children:e.category})}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(i.motion.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-acm-blue/50 hover:bg-acm-blue/10 transition-all",children:(0,t.jsx)(W,{className:"w-4 h-4 text-white/60"})}),(0,t.jsx)(i.motion.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-acm-blue/50 hover:bg-acm-blue/10 transition-all",children:(0,t.jsx)(z,{className:"w-4 h-4 text-white/60"})}),(0,t.jsx)(i.motion.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:n,className:"w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all md:hidden",children:(0,t.jsx)(F,{className:"w-4 h-4 text-white/60"})})]})]})}),(0,t.jsxs)("div",{ref:r,onScroll:u,className:"h-full overflow-y-auto overflow-x-hidden pt-16 md:pt-20",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"relative min-h-[60vh] md:min-h-[70vh] flex items-end",children:[(0,t.jsx)("div",{className:"absolute inset-0",style:{background:`
                    radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0, 133, 202, 0.12), transparent 60%),
                    radial-gradient(ellipse 80% 40% at 80% 20%, rgba(99, 102, 241, 0.08), transparent 50%),
                    linear-gradient(180deg, rgba(3,3,3,0) 0%, rgba(3,3,3,1) 100%)
                  `}}),(0,t.jsxs)("div",{className:"relative z-10 w-full max-w-4xl mx-auto px-6 md:px-8 pb-12 md:pb-20",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"flex flex-wrap items-center gap-3 mb-6",children:[(0,t.jsx)("span",{className:"px-4 py-1.5 bg-acm-blue/20 border border-acm-blue/30 text-xs font-medium tracking-wider text-acm-blue uppercase rounded-full",children:e.category}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-white/50 uppercase tracking-wider rounded-full",children:[(0,t.jsx)(T.Users,{className:"w-3 h-3"}),e.author.team]})]}),(0,t.jsx)(i.motion.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.4,duration:.6},className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6",style:{fontFamily:"var(--font-heading)"},children:e.title}),(0,t.jsx)(i.motion.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"text-lg md:text-xl lg:text-2xl text-white/50 mb-8",children:e.subtitle}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"flex flex-wrap items-center gap-4 md:gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-acm-blue/40 to-acm-blue/10 border border-white/10 flex items-center justify-center",children:(0,t.jsx)("span",{className:"text-sm md:text-base font-bold text-acm-blue",children:e.author.name.split(" ").map(e=>e[0]).join("")})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"block text-sm md:text-base font-medium text-white",children:e.author.name}),(0,t.jsx)("span",{className:"block text-xs text-acm-blue/70",children:e.author.role})]})]}),(0,t.jsx)("span",{className:"hidden md:block h-6 w-px bg-white/10"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-white/40",children:[(0,t.jsx)(A.Calendar,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"text-xs md:text-sm",children:new Date(e.publishedAt).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),(0,t.jsx)("span",{className:"hidden md:block h-6 w-px bg-white/10"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-white/40",children:[(0,t.jsx)(m.Clock,{className:"w-4 h-4"}),(0,t.jsx)("span",{className:"text-xs md:text-sm",children:e.readTime})]})]})]})]}),(0,t.jsxs)(i.motion.article,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:.7,duration:.6},className:"relative w-full max-w-4xl mx-auto px-6 md:px-8 pb-24",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mb-10",children:e.tags.map(e=>(0,t.jsx)("span",{className:"px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/40 uppercase tracking-wider rounded-full",children:e},e))}),(0,t.jsxs)("div",{className:"mb-10 flex items-center gap-4",children:[(0,t.jsx)("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"}),(0,t.jsx)("div",{className:"flex gap-1",children:[0,1,2].map(e=>(0,t.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-acm-blue/40"},e))}),(0,t.jsx)("div",{className:"h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"})]}),(0,t.jsx)("blockquote",{className:"relative border-l-2 border-acm-blue/50 pl-6 mb-12",children:(0,t.jsx)("p",{className:"text-lg md:text-xl italic text-white/60 leading-relaxed",children:e.excerpt})}),(0,t.jsx)("div",{className:"prose prose-invert prose-lg max-w-none",children:x}),(0,t.jsxs)("div",{className:"mt-16 mb-12 flex items-center justify-center gap-4",children:[(0,t.jsx)("div",{className:"h-px w-20 bg-gradient-to-r from-transparent to-white/20"}),(0,t.jsx)("div",{className:"text-xs uppercase tracking-widest text-white/20",children:"End"}),(0,t.jsx)("div",{className:"h-px w-20 bg-gradient-to-l from-transparent to-white/20"})]}),(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-6 text-center md:text-left",children:[(0,t.jsx)("div",{className:"w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-acm-blue/40 to-acm-blue/10 border-2 border-white/10 flex items-center justify-center flex-shrink-0",children:(0,t.jsx)("span",{className:"text-2xl md:text-3xl font-bold text-acm-blue",children:e.author.name.split(" ").map(e=>e[0]).join("")})}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("h4",{className:"text-lg md:text-xl font-bold text-white mb-1",children:e.author.name}),(0,t.jsxs)("p",{className:"text-sm text-acm-blue mb-3",children:[e.author.role," • ",e.author.team]}),(0,t.jsx)("p",{className:"text-sm text-white/50 leading-relaxed",children:"Passionate about technology and sharing knowledge with the community. Contributing to the tech ecosystem one article at a time."})]})]})}),(0,t.jsxs)("div",{className:"mt-16 pt-12 border-t border-white/5",children:[(0,t.jsx)("h3",{className:"text-xl md:text-2xl font-bold text-white mb-6",children:"Continue Reading"}),(0,t.jsxs)("button",{onClick:n,className:"group inline-flex items-center gap-3 text-acm-blue hover:text-white transition-colors",children:[(0,t.jsx)("span",{className:"text-sm font-medium",children:"Explore more articles"}),(0,t.jsx)(E.ArrowLeft,{className:"w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform"})]})]})]})]}),(0,t.jsx)(p.AnimatePresence,{children:o&&(0,t.jsx)(i.motion.button,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{r.current?.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full bg-acm-blue text-white flex items-center justify-center shadow-lg shadow-acm-blue/20",children:(0,t.jsx)(D.ChevronUp,{className:"w-5 h-5"})})})]})}):null}function I(){let[e,i]=(0,a.useState)(null),[s,n]=(0,a.useState)(!1),r=(0,a.useCallback)(e=>{i(e),n(!0)},[]),c=(0,a.useCallback)(()=>{n(!1),setTimeout(()=>i(null),400)},[]);return(0,t.jsxs)("main",{className:"bg-black text-white selection:bg-acm-blue/30",children:[(0,t.jsx)(o,{}),(0,t.jsx)(l,{}),(0,t.jsx)(h,{posts:x,onPostClick:r}),(0,t.jsx)(y,{posts:x,onPostClick:r}),(0,t.jsx)(S,{}),(0,t.jsx)(L,{post:e,isOpen:s,onClose:c})]})}e.s(["default",()=>I],24348)}]);