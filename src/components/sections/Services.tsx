import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Palette, 
  Zap,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Monitor,
      title: "Portfolio Websites",
      description: "Stunning personal and professional portfolios that showcase your work and attract opportunities.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Contact Forms"],
      color: "primary",
      gradient: "gradient-primary"
    },
    {
      icon: Globe,
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive sales for your business.",
      features: ["Conversion Focused", "A/B Testing", "Analytics Setup", "Mobile First"],
      color: "secondary",
      gradient: "gradient-secondary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Sites",
      description: "Complete online stores with payment integration, inventory management, and customer portals.",
      features: ["Payment Gateway", "Inventory System", "User Accounts", "Order Management"],
      color: "accent",
      gradient: "gradient-secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and web-based mobile applications that provide seamless user experiences.",
      features: ["Cross Platform", "Push Notifications", "Offline Support", "App Store Ready"],
      color: "primary",
      gradient: "gradient-primary"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to boost your online visibility and organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Tracking"],
      color: "secondary",
      gradient: "gradient-secondary"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Optimize existing websites for speed, performance, and better user experience.",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Setup", "Caching Strategy"],
      color: "accent",
      gradient: "gradient-primary"
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
    <section id="services" className="py-20 relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Palette className="w-4 h-4 text-primary animate-pulse-neon" />
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="text-foreground">Premium</span>
              <br />
              <span className="gradient-text">Web Solutions</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to launch, we deliver comprehensive web solutions 
              that elevate your brand and drive meaningful results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`p-4 rounded-2xl bg-${service.gradient} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${service.color}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary p-0 h-auto font-semibold"
                        data-cursor-hover
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Hover Effect Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
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
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together. 
              Get a free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="px-8 py-4 bg-gradient-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                data-cursor-hover
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-4 border-primary/30 hover:border-primary hover:bg-primary/10"
                data-cursor-hover
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};