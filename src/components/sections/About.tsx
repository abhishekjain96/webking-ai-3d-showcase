import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Rocket, Target, Code2, Lightbulb } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Rocket },
    { number: "100+", label: "Happy Clients", icon: Users },
    { number: "5", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support", icon: Target },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 relative overflow-hidden bg-background-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Lightbulb className="w-4 h-4 text-secondary animate-pulse-neon" />
              <span className="text-sm font-medium">About WebKing AI</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Crafting Digital</span>
              <br />
              <span className="text-foreground">Excellence</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're not just developers – we're digital architects who transform 
              your vision into stunning, high-performance web experiences that captivate 
              audiences and drive business growth.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-primary">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with cutting-edge web solutions that not only look 
                  incredible but perform exceptionally. We believe every pixel matters, 
                  every interaction counts, and every user deserves an extraordinary experience.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-secondary">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Approach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We combine AI-powered insights with human creativity to deliver 
                  websites that are not just visually stunning, but strategically 
                  designed to convert visitors into customers and dreams into reality.
                </p>
              </div>
            </motion.div>

            {/* Right Content - 3D Card Effect */}
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="glass p-8 rounded-3xl border border-accent/20 shadow-premium transform-3d">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                  <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Premium, custom-coded solutions",
                    "Lightning-fast loading speeds",
                    "Mobile-first responsive design",
                    "SEO optimized for maximum visibility",
                    "24/7 ongoing support & maintenance",
                    "AI-powered performance optimization"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="text-center group"
              >
                <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-neon transform-3d">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform float" />
                  <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};