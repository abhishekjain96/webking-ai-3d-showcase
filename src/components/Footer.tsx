import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Portfolio Websites',
      'Landing Pages',
      'E-commerce Sites',
      'Mobile Apps',
      'SEO Optimization',
      'Performance Boost',
    ],
    company: [
      'About Us',
      'Our Team',
      'Case Studies',
      'Careers',
      'Blog',
      'Contact',
    ],
    resources: [
      'Documentation',
      'Help Center',
      'Community',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@webkingai.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Digital Avenue, Tech City' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-background border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full border-2 border-white">
                    <div className="w-2 h-2 bg-white rounded-full mt-1 ml-1"></div>
                  </div>
                </motion.div>
                <div>
                  <div className="text-2xl font-display font-bold gradient-text">
                    WebKing AI
                  </div>
                  <div className="text-xs text-muted-foreground -mt-1">
                    Premium Web Solutions
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                We create stunning, high-performance websites that elevate your brand 
                and engage your audience. Let's build something extraordinary together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <info.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      {info.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link, index) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform inline-block"
                          data-cursor-hover
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform inline-block"
                          data-cursor-hover
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link, index) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform inline-block"
                          data-cursor-hover
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-3xl border border-primary/20 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground">
                  Get the latest updates on web trends, tips, and exclusive offers.
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-background border border-primary/20 focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  className="px-6 py-3 bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                  data-cursor-hover
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20 gap-6"
          >
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 WebKing AI. All rights reserved. Built with ❤️ and cutting-edge technology.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -2
                  }}
                  className="p-3 rounded-xl glass border border-primary/20 hover:border-primary/40 hover:shadow-neon transition-all duration-300 group"
                  data-cursor-hover
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                data-cursor-hover
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};