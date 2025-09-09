import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Users } from 'lucide-react';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3e4?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "WebKing AI delivered beyond our expectations. The website is not only visually stunning but also performs exceptionally well. Our conversion rate increased by 150% after the launch!",
      company: "TechStartup Inc."
    },
    {
      name: "Michael Chen",
      role: "Founder, Creative Studio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The team's attention to detail and innovative approach impressed us. They transformed our vision into a digital masterpiece that truly represents our brand.",
      company: "Creative Studio"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, E-Commerce Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with WebKing AI was a game-changer. Their expertise in both design and development resulted in a platform that our customers love using.",
      company: "E-Commerce Co."
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The restaurant website they created brought our business online seamlessly. Online orders increased by 200% in the first month!",
      company: "Bella Vista Restaurant"
    },
    {
      name: "Lisa Park",
      role: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "My personal training business transformed with the portfolio website they built. I now book 3x more clients through my online presence.",
      company: "FitLife Coaching"
    },
    {
      name: "James Wilson",
      role: "SaaS Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The SaaS platform they developed is incredibly user-friendly and robust. Our user engagement metrics have never been better.",
      company: "DataFlow Solutions"
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
    <section id="testimonials" className="py-20 relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--secondary)) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--primary)) 0%, transparent 50%)
          `
        }} />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4 text-secondary animate-pulse-neon" />
              <span className="text-sm font-medium">Client Reviews</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">What Our Clients</span>
              <br />
              <span className="text-foreground">Say About Us</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients 
              have to say about their experience working with us.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
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
                <div className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/40 h-full transition-all duration-500 hover:shadow-premium transform-3d relative overflow-hidden">
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Quote className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-8 italic"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>

                  {/* Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 glass p-8 rounded-3xl border border-primary/20"
          >
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "500+", label: "Projects Completed" },
              { number: "150%", label: "Average ROI Increase" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};