import { useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link for form submission
    const mailtoLink = `mailto:khanzadi8566@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-up">Contact Me</h2>
          <p className="section-subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Feel free to reach out for collaboration, queries, or opportunities.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="contact-info-item animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-5 h-5 text-primary" />
            <span>Khanewal, Pakistan</span>
          </div>
          <div className="contact-info-item animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Mail className="w-5 h-5 text-primary" />
            <span>khanzadi8566@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded-lg border border-border animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Send a Message</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="form-input resize-none"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
