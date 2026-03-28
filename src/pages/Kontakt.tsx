import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "Brückenstraße 2, 09322 Penig" },
  { icon: Phone, label: "Telefon", value: "03738 1661620" },
  { icon: Clock, label: "Öffnungszeiten", value: "Montag geschlossen | Dienstag bis Freitag 8–21 Uhr" },
  { icon: Clock, label: "Hinweis", value: "Abweichende Arbeitszeiten je nach Terminvereinbarung" },
];

const Kontakt = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Wir freuen uns auf Sie
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Kontakt
          </motion.h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-lg p-6 shadow-soft flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground mb-1">{item.label}</p>
                <p className="font-body text-sm text-muted-foreground">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="rounded-lg bg-card p-8 shadow-elevated text-center"
        >
          <p className="font-display text-2xl font-semibold text-foreground mb-3">
            So finden Sie uns
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Für einen datenschutzfreundlichen Auftritt laden wir keine eingebettete Karte direkt auf der Website.
            Den Standort können Sie bei Bedarf mit einem Klick in Ihrem Kartendienst öffnen.
          </p>
          <Button asChild className="bg-gold-gradient text-primary-foreground font-body tracking-wide">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Br%C3%BCckenstra%C3%9Fe+2%2C+09322+Penig"
              target="_blank"
              rel="noreferrer"
            >
              Route in Google Maps öffnen <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Kontakt;
