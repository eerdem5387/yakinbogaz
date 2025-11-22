import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-accent/5 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-accent/10 hover:border-primary/20 transition-colors"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-primary">Bize Ulaşın</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground/80">İsim</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground/80">E-posta</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ornek@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground/80">Mesaj</label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-accent/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none h-32 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Mesajınızı buraya yazın..."
          />
        </div>
        <motion.button
          type="submit"
          className="w-full py-4 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Gönder
        </motion.button>
      </div>
    </motion.form>
  );
} 