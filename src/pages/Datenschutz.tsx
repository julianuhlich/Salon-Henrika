import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import privacyHtml from "@/content/datenschutz.html?raw";

const Datenschutz = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Rechtliches
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Datenschutzerklärung
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="bg-card rounded-lg p-8 shadow-soft"
        >
          <div
            className="font-body text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_h1]:font-display [&_h1]:text-3xl [&_h1]:text-foreground [&_h1]:mb-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: privacyHtml }}
          />
        </motion.div>
      </div>
    </section>
  </div>
);

export default Datenschutz;
