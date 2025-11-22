import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-accent/5 backdrop-blur-sm p-8 rounded-2xl border border-accent/10 hover:border-primary/20 transition-all"
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      <Link 
        href={link}
        className="text-primary hover:text-primary-dark inline-flex items-center transition-colors"
      >
        Detaylı Bilgi
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
} 