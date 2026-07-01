import { motion } from 'framer-motion';
import { Heart, CalendarDays, MapPin } from 'lucide-react';
import './styles/app.css';

const wedding = {
  names: 'Κωνσταντίνος & Άννα',
  date: '19 Σεπτεμβρίου 2026',
  time: '19:00',
  place: 'Παναγία Μαγκλαβά · Κτήμα Τσαμαντάνη',
};

function OliveBranch({ className = '' }) {
  return (
    <svg className={`olive ${className}`} viewBox="0 0 220 120" aria-hidden="true">
      <path d="M20 100 C62 46,126 20,202 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      {[
        [50,74,-35],[72,58,28],[94,44,-32],[116,34,27],[138,26,-28],[160,20,25],[181,15,-20]
      ].map(([x,y,r],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="9" ry="22" transform={`rotate(${r} ${x} ${y})`} fill="currentColor" opacity={i%2?0.72:0.92}/>
      ))}
    </svg>
  );
}

function KALogo() {
  return (
    <div className="ka-logo" aria-label="KA monogram">
      <span>K</span><i></i><span>A</span>
    </div>
  );
}

function InvitationCard() {
  return (
    <motion.article
      className="invitation-card"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.8, ease: 'easeOut' }}
    >
      <OliveBranch className="top-left" />
      <OliveBranch className="bottom-right" />
      <div className="card-inner">
        <KALogo />
        <p className="small-title">Wedding Invitation</p>
        <h1>Κωνσταντίνος<br/><em>&</em><br/>Άννα</h1>
        <p className="invite-text">Με μεγάλη μας χαρά σας προσκαλούμε να μοιραστείτε μαζί μας την πιο όμορφη ημέρα της ζωής μας.</p>
        <div className="divider"><Heart size={14}/></div>
        <div className="details">
          <p><CalendarDays size={17}/>{wedding.date}</p>
          <p>{wedding.time}</p>
          <p><MapPin size={17}/>{wedding.place}</p>
        </div>
        <button className="gold-button">Άνοιγμα πρόσκλησης</button>
      </div>
    </motion.article>
  );
}

function EnvelopePreview() {
  return (
    <motion.div className="envelope-preview" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.9 }}>
      <div className="envelope-flap"></div>
      <div className="envelope-body">
        <div className="seal"><KALogo /></div>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="paper-glow"></div>
      <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <KALogo />
            <p className="eyebrow">Luxury Wedding Invitation</p>
            <h2>{wedding.names}</h2>
            <p className="hero-date">{wedding.date}</p>
          </motion.div>
        </div>
        <div className="showcase">
          <InvitationCard />
          <EnvelopePreview />
        </div>
      </motion.section>
    </main>
  );
}
