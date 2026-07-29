import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
          Get in <span className="text-transparent bg-clip-text bg-gradient-primary">Touch</span>
        </h1>
        <p className="text-lg text-textSecondary leading-relaxed">
          Have questions about our AI models, premium plans, or need technical support? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Email Us</h3>
            <p className="text-sm text-textSecondary mb-4">For general inquiries and support.</p>
            <a href="mailto:support@aswinix.com" className="text-sm font-bold text-primary hover:text-secondary transition-colors">
              support@aswinix.com
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-colors">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Live Chat</h3>
            <p className="text-sm text-textSecondary mb-4">Available Mon-Fri, 9am-6pm IST.</p>
            <button className="text-sm font-bold text-secondary hover:text-primary transition-colors">
              Start Chat
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-soft">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-2xl font-heading font-bold mb-8 uppercase tracking-wide">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-textSecondary uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-textSecondary uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-textSecondary uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-textSecondary uppercase tracking-wider">Subject</label>
                <select className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Premium Support</option>
                  <option>Bug Report</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-textSecondary uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all shadow-premium">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
