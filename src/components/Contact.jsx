import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    // Simulate form submission
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="contact" className="pt-24 relative overflow-hidden bg-[#05021a]/30">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-purple-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Contact Me
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left info cards */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Let's connect!
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              I am open to discussions regarding software internships, AI development opportunities, coding collaborations, and project consultations. Drop me a line!
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300">
                <span className="p-3 rounded-xl bg-cyan-accent/10 text-cyan-accent text-lg">
                  <FaEnvelope />
                </span>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Email Me</span>
                  <a
                    href="mailto:abdulhakkim.t2024aids@sece.ac.in"
                    className="block text-sm font-semibold text-gray-200 hover:text-cyan-accent transition-colors duration-300"
                  >
                    abdulhakkim.t2024aids@sece.ac.in
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-accent/20 transition-all duration-300">
                <span className="p-3 rounded-xl bg-purple-accent/10 text-purple-accent text-lg">
                  <FaPhone />
                </span>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">Call Me</span>
                  <a
                    href="tel:+919342258469"
                    className="block text-sm font-semibold text-gray-200 hover:text-purple-accent transition-colors duration-300"
                  >
                    +91 93422 58469
                  </a>
                </div>
              </div>
            </div>

            {/* Social details */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://github.com/kemabdulhakkim-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-cyan-accent hover:shadow-[0_0_10px_#00f5d4] transition-all duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-hakkim-t-a04528333/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-purple-accent hover:shadow-[0_0_10px_#6366f1] transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 glass-panel text-left space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono tracking-wider uppercase text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-accent transition-all duration-300"
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono tracking-wider uppercase text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-accent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono tracking-wider uppercase text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-accent transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-accent to-blue-accent text-cyber-dark font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,212,0.4)] hover:scale-[1.01] btn-glow-cyan"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>

              {/* Status alerts */}
              {status === "success" && (
                <p className="text-sm font-semibold text-emerald-400 mt-2 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold text-rose-400 mt-2 text-center">
                  Please fill out all fields.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer line */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Abdul Hakkim T. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
