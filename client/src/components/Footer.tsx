"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const FOOTER_LINKS = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "#" },
      { label: "Events", href: "#" },
      { label: "Teams", href: "#" },
      { label: "Projects", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join ACM", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Gallery", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden pt-32 pb-12 px-6 md:px-12 lg:px-24">
      {/* Animated Graphic Background - ACM Logo Silhouette */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 0.12, scale: 0.8 }}
          transition={{ duration: 1.0 }}
          className="absolute -right-[10%] -top-[5%] w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]"
        >
          <Image
            src="/ACM_White_Logo_transparent_text.png"
            alt="ACM Logo Background"
            fill
            className="object-contain"
            style={{ filter: "" }} // Ensure it's white if not already
          />
        </motion.div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-black via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: CTA */}
        <div className="mb-24">
          <AnimatedText>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-8">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-acm-blue to-acm-blue-light">
                The Future.
              </span>
            </h2>
          </AnimatedText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
          >
            <button className="group relative px-8 py-4 bg-white text-black hover:bg-acm-blue hover:text-white transition-colors duration-300 rounded-full overflow-hidden">
              <span className="relative font-medium tracking-wide text-lg">
                Join the Chapter
              </span>
            </button>
          </motion.div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-800 pt-16 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/ACM_Logo_white_text.png"
                  alt="ACM Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold tracking-wide">
                GGSIPU EDC
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Fostering a community of developers, designers, and innovators.
              Creating impact through technology and collaboration.
            </p>
            <div className="flex gap-4 pt-4">
              {SOCIAL_LINKS.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-acm-blue hover:bg-acm-blue/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-sm font-mono uppercase tracking-wider text-gray-500">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-acm-blue transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-acm-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500">
          <p>© 2024 GGSIPU EDC ACM Student Chapter. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a
              href="mailto:contact@acm.org"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail size={14} />
              contact@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
