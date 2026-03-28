import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const priceCategories = [
  {
    title: "Schnitt & Styling",
    items: [
      { name: "Damenhaarschnitt (Waschen, Schneiden, Föhnen)", price: "ab 55 €" },
      { name: "Herrenhaarschnitt", price: "ab 30 €" },
      { name: "Kinderhaarschnitt (bis 12 J.)", price: "ab 20 €" },
      { name: "Pony nachschneiden", price: "10 €" },
      { name: "Hochsteckfrisur / Eventfrisur", price: "ab 65 €" },
    ],
  },
  {
    title: "Farbe & Strähnchen",
    items: [
      { name: "Ansatzfarbe", price: "ab 45 €" },
      { name: "Komplettfärbung", price: "ab 65 €" },
      { name: "Foliensträhnen", price: "ab 70 €" },
      { name: "Balayage / Ombré", price: "ab 95 €" },
      { name: "Glossing / Tönung", price: "ab 30 €" },
    ],
  },
  {
    title: "Pflege & Extras",
    items: [
      { name: "Intensivkur", price: "ab 15 €" },
      { name: "Olaplex-Behandlung", price: "ab 25 €" },
      { name: "Keratin-Glättung", price: "ab 120 €" },
      { name: "Augenbrauen zupfen & färben", price: "15 €" },
      { name: "Wimpern färben", price: "12 €" },
    ],
  },
];

const Preise = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" animate="visible" className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Transparente Preise
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Preise
          </motion.h1>
        </motion.div>

        <div className="grid gap-10">
          {priceCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-lg p-8 shadow-soft"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline gap-4">
                    <span className="font-body text-sm text-muted-foreground">{item.name}</span>
                    <span className="font-display text-sm font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center text-xs text-muted-foreground mt-10 font-body"
        >
          Alle Preise sind Richtwerte. Der endgültige Preis wird nach persönlicher Beratung festgelegt.
        </motion.p>
      </div>
    </section>
  </div>
);

export default Preise;
