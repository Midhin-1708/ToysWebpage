import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Sparkles, Leaf, Users } from 'lucide-react'
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from '../animations/variants.js'

const values = [
  { icon: Heart, title: 'Made with Love', desc: 'Every toy is chosen as if it were going to our own kids.' },
  { icon: Sparkles, title: 'Spark Imagination', desc: 'We favor open-ended play that grows with your child.' },
  { icon: Leaf, title: 'Sustainable Choices', desc: 'Responsibly sourced materials and minimal packaging waste.' },
  { icon: Users, title: 'Community First', desc: 'A portion of every sale supports children\u2019s literacy programs.' },
]

const team = [
  { name: 'Elena Ford', role: 'Founder & Chief Play Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { name: 'James Alou', role: 'Head of Product Curation', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { name: 'Nadia Kim', role: 'Child Development Advisor', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
]

export default function About() {
  return (
    <div className="w-full bg-cream pb-20 pt-32">
      <section className="container-inner grid items-center gap-12 pb-20 lg:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
          <p className="font-display font-bold text-coral">Our Story</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            Toys That Grow<br />Imaginations
          </h1>
          <p className="mt-5 max-w-md text-navy/65">
            IDEALS PlayWorld started in a garage filled with wooden blocks and
            a simple belief: play is how children make sense of the world. A
            decade later, we've shipped over a million toys to families who
            share that belief — without ever compromising on safety or joy.
          </p>
          <Link
            to="/shop"
            className="btn-pop mt-7 inline-flex items-center gap-2 rounded-full bg-coral px-8 py-4 font-display font-bold text-white shadow-toy"
          >
            Explore Our Toys
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={slideInRight} className="relative aspect-square">
          <img
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop"
            alt="Children playing with colorful toys"
            className="h-full w-full rounded-[38%_62%_60%_40%/45%_40%_60%_55%] object-cover shadow-toy"
          />
        </motion.div>
      </section>

      <section className="container-inner py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 text-center font-display text-3xl font-extrabold text-navy sm:text-4xl"
        >
          What We Stand For
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(27,42,74,0.06)]"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-sunshine-100 text-sunshine-500">
                <v.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-navy">{v.title}</h3>
              <p className="mt-1.5 text-sm text-navy/60">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-inner">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mb-10 text-center font-display text-3xl font-extrabold text-navy sm:text-4xl"
          >
            Meet the PlayWorld Team
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="text-center"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="mx-auto h-36 w-36 rounded-full object-cover shadow-toy"
                />
                <h3 className="font-display mt-4 font-bold text-navy">{m.name}</h3>
                <p className="text-sm font-semibold text-navy/50">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
