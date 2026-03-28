import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const UeberMich = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" animate="visible" className="text-center">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Über mich
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Leidenschaft fürs Handwerk
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed mb-4">
            Ich bin Henrika – Friseurmeisterin mit über 37 Jahren Erfahrung und einer tiefen
            Leidenschaft für schöne Haare. 
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground leading-relaxed mb-4">
            Mir ist wichtig, dass Sie sich bei mir wohlfühlen. Jeder Besuch beginnt mit einem
            persönlichen Gespräch, um genau zu verstehen, was Sie sich wünschen. Denn das beste
            Ergebnis entsteht aus Vertrauen und Können.
          </motion.p>
          <motion.p variants={fadeUp} custom={4} className="font-body text-muted-foreground leading-relaxed mb-4">
            Zusätzlich gehören bei uns auch Nagelleistungen zu unserem Angebot.
          </motion.p>
          <motion.p variants={fadeUp} custom={5} className="font-body text-muted-foreground leading-relaxed">
            Regelmäßige Weiterbildungen und ein Gespür für aktuelle Trends sorgen dafür, dass
            Sie den Salon immer mit einem Lächeln verlassen.
          </motion.p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default UeberMich;
