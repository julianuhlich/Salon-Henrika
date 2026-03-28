import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import heroImage from "@/assets/Hero_googel.png";
import treatmentImage from "@/assets/Pinterrest.jpeg";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Salon Henrika Interieur"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-4 tracking-tight"
          >
            Ihr Stil. <br className="md:hidden" />
            <span className="italic">Ihr Moment.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-md mx-auto mb-8"
          >
            Persönliche Beratung, meisterhafte Schnitte und ein Hauch von Luxus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground font-body tracking-wide">
              <Link to="/kontakt">
                Termin vereinbaren <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
              Unsere Leistungen
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Was wir für Sie tun
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Schnitt & Styling", desc: "Präzise Schnitte, die Ihren Look perfekt unterstreichen." },
              { title: "Farbe & Highlights", desc: "Von natürlichen Nuancen bis hin zu mutigen Statements." },
              { title: "Pflege & Wellness", desc: "Verwöhnprogramme für gesundes, glänzendes Haar." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8 shadow-soft text-center group hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="font-body">
              <Link to="/leistungen">
                Alle Leistungen <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image + Text */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <img
                src={treatmentImage}
                alt="Haarstyling im Salon"
                className="rounded-lg shadow-elevated w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">Warum zu uns?</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Weil Sie es verdienen, sich schön zu fühlen
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                In unserem Salon erwartet Sie eine entspannte Atmosphäre, individuelle Beratung 
                und handwerkliches Können auf höchstem Niveau. Jeder Besuch ist ein kleines Erlebnis.
              </p>
              <Button asChild className="bg-gold-gradient text-primary-foreground font-body">
                <Link to="/ueber-mich">Mehr über mich</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
