import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles, Droplets } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const treatments = [
  {
    icon: Scissors,
    title: "Schnitt & Styling",
    items: [
      "Damenhaarschnitt – Waschen, Schneiden, Föhnen",
      "Herrenhaarschnitt – Waschen, Schneiden, Styling",
      "Kinderhaarschnitt (bis 12 Jahre)",
      "Pony nachschneiden",
      "Hochsteckfrisur / Eventfrisur",
    ],
  },
  {
    icon: Paintbrush,
    title: "Farbe & Strähnchen",
    items: [
      "Ansatzfarbe",
      "Komplettfärbung",
      "Foliensträhnen – Highlights / Lowlights",
      "Balayage / Ombré",
      "Glossing / Tönungen",
    ],
  },
  {
    icon: Sparkles,
    title: "Pflege & Kuren",
    items: [
      "Intensivkur mit Einwirkzeit",
      "Olaplex-Behandlung",
      "Keratin-Glättung",
      "Kopfhautbehandlung",
      "Haarkur mit Dampf",
    ],
  },
  {
    icon: Droplets,
    title: "Extras",
    items: [
      "Augenbrauen zupfen & färben",
      "Wimpern färben",
      "Bartpflege & Trimm",
      "Beratungstermin (kostenlos)",
    ],
  },
];

const Behandlungen = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Unsere Leistungen
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Behandlungen
          </motion.h1>
        </motion.div>

        <div className="grid gap-10">
          {treatments.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-lg p-8 shadow-soft"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">{cat.title}</h2>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Behandlungen;
