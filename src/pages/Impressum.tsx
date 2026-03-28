import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { imprintDetails } from "@/content/impressum";

const Impressum = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <motion.div initial="hidden" animate="visible">
          <motion.p variants={fadeUp} custom={0} className="text-sm uppercase tracking-[0.2em] text-primary font-body mb-3">
            Rechtliches
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Impressum
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="bg-card rounded-lg p-8 shadow-soft space-y-6"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>{imprintDetails.salonName}</p>
              <p>{imprintDetails.owner}</p>
              <p>{imprintDetails.street}</p>
              <p>{imprintDetails.city}</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Kontakt
            </h2>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>Telefon: {imprintDetails.phone}</p>
              {imprintDetails.email ? <p>E-Mail: {imprintDetails.email}</p> : null}
            </div>
          </div>

          {imprintDetails.vatId ? (
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Umsatzsteuer-ID
              </h2>
              <p className="font-body text-sm text-muted-foreground">{imprintDetails.vatId}</p>
            </div>
          ) : null}

          {imprintDetails.supervisoryAuthority ? (
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Aufsichtsbehörde
              </h2>
              <p className="font-body text-sm text-muted-foreground">
                {imprintDetails.supervisoryAuthority}
              </p>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  </div>
);

export default Impressum;
