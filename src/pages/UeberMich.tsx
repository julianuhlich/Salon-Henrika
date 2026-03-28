import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import aboutImage from "@/assets/about-portrait.jpg";

const UeberMich = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <img
              src={aboutImage}
              alt="Inhaberin des Salons"
              className="rounded-lg shadow-elevated w-full object-cover aspect-[3/4]"
              loading="lazy"
              width={800}
              height={1000}
            />
          </motion.div>

          <motion.div initial="hidden" animate="visible">
            <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
              Über mich
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Leidenschaft fürs Handwerk
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed mb-4">
              Hallo, ich bin Anna – Friseurmeisterin mit über 15 Jahren Erfahrung und einer
              tiefen Leidenschaft für schöne Haare. Nach Stationen in renommierten Salons habe
              ich mir mit dem Salon Élégance meinen Traum erfüllt.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground leading-relaxed mb-4">
              Mir ist wichtig, dass du dich bei mir wohlfühlst. Jeder Besuch beginnt mit einem
              persönlichen Gespräch, um genau zu verstehen, was du dir wünschst. Denn das
              beste Ergebnis entsteht aus Vertrauen und Können.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="font-body text-muted-foreground leading-relaxed">
              Regelmäßige Weiterbildungen und ein Gespür für aktuelle Trends sorgen dafür,
              dass du immer mit einem Lächeln den Salon verlässt.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default UeberMich;
