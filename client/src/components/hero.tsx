import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/cinematic_aerial_view_of_brazilian_nature_for_luxury_brand.mp4";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 drop-shadow-lg">
            Empowering the Bold
          </h1>
          <p className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
            Parceiro estratégico de investimento e tecnologia para o futuro das clínicas de estética no Brasil.
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down" />
        </div>
      </motion.div>
    </section>
  );
}
