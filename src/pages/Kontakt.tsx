import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "Musterstraße 12, 80331 München" },
  { icon: Phone, label: "Telefon", value: "+49 89 123 456 78" },
  { icon: Mail, label: "E-Mail", value: "hallo@salon-elegance.de" },
  { icon: Clock, label: "Öffnungszeiten", value: "Di–Fr: 9–18 Uhr | Sa: 9–14 Uhr" },
];

const Kontakt = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Wir freuen uns auf dich
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
          className="rounded-lg overflow-hidden shadow-elevated"
        >
          <iframe
            title="Standort Salon Élégance"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.531!2d11.5761!3d48.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzA2LjQiTiAxMcKwMzQnMzQuMCJF!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  </div>
);

export default Kontakt;
