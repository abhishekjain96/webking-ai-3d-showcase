import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "TechCorp Portfolio",
      description: "A stunning corporate website with 3D animations, smooth scrolling, and advanced interactivity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["React", "Three.js", "GSAP", "Tailwind"],
      color: "primary",
      gradient: "gradient-primary"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, admin dashboard, and real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      color: "secondary",
      gradient: "gradient-secondary"
    },
    {
      title: "Creative Agency Site",
      description: "Award-winning agency website featuring dynamic animations and stunning visual effects.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
      tags: ["Vue.js", "WebGL", "Canvas", "SCSS"],
      color: "accent",
      gradient: "gradient-primary"
    },
    {
      title: "SaaS Dashboard",
      description: "Modern SaaS platform with real-time data visualization and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      color: "primary",
      gradient: "gradient-secondary"
    },
    {
      title: "Mobile App Landing",
      description: "Converting mobile app landing page with interactive prototypes and smooth animations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["React", "Framer Motion", "TypeScript", "Tailwind"],
      color: "secondary",
      gradient: "gradient-primary"
    },
    {
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering system and table reservations.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      tags: ["WordPress", "PHP", "MySQL", "Stripe"],
      color: "accent",
      gradient: "gradient-secondary"
    }
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
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
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-accent animate-pulse-neon" />
              <span className="text-sm font-medium">Our Work</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-foreground">Featured</span>
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our 
              expertise in creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="glass rounded-3xl border border-primary/20 hover:border-primary/40 overflow-hidden h-full transition-all duration-500 hover:shadow-premium transform-3d">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ filter: "brightness(1.1)" }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action Buttons */}
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ 
                        opacity: 0,
                        scale: 0.8,
                        y: -10
                      }}
                      whileHover={{ 
                        opacity: 1,
                        scale: 1,
                        y: 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="p-2 rounded-full glass border border-white/20 hover:border-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor-hover
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-full glass border border-white/20 hover:border-white/40 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        data-cursor-hover
                      >
                        <Github className="w-4 h-4 text-white" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full glass border border-primary/20 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary p-0 h-auto font-semibold"
                        data-cursor-hover
                      >
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center glass p-12 rounded-3xl border border-primary/20 bg-gradient-card"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate and create something amazing together. 
              We're excited to hear about your vision and bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="px-8 py-4 bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                data-cursor-hover
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/10"
                data-cursor-hover
              >
                View All Work
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};