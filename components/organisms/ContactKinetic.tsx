'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const ContactKinetic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    contactMethod: 'email' as 'email' | 'sms' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.95]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };



  // Format phone number for display (e.g., 5873946940 -> 587-394-6940)
  const formatPhoneDisplay = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = [match[1], match[2], match[3]].filter(Boolean).join('-');
      return formatted;
    }
    return phone;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const cleaned = input.replace(/\D/g, ''); // Remove all non-digits
    const formatted = formatPhoneDisplay(cleaned);
    setFormState({...formState, phone: formatted});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');
    
    try {
      // Validate required fields
      if (!formState.name || !formState.email || !formState.message) {
        throw new Error('Please fill in all required fields');
      }
      
      if (formState.contactMethod === 'sms' && !formState.phone) {
        throw new Error('Phone number is required for SMS contact');
      }
      
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setSubmitStatus('success');
      setSubmitMessage(
        formState.contactMethod === 'email' 
          ? 'Thank you! Your message has been sent successfully. I\'ll get back to you via email soon. Please check your spam folder just in case.'
          : 'Thank you! Your confirmation SMS has been sent successfully. I\'ll get back to you via SMS soon. (Do not reply to the confirmation message)'
      );
      
      // Reset form after success
      setFormState({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '', 
        contactMethod: 'email' 
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="contact"
      className="min-h-screen py-32 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #F4F1EA 0%, #e8e3d6 50%, #F4F1EA 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({length: 20}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              backgroundColor: i % 3 === 0 ? '#D75F4E' : i % 2 === 0 ? '#A9B8C4' : '#15202B',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-8 relative z-10"
        style={{ y: parallaxY, scale }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-7xl lg:text-8xl font-display italic text-text-body mb-8">
            Let's <span style={{ color: '#D75F4E' }}>Connect</span>
          </h2>
          <p className="text-2xl max-w-3xl mx-auto" style={{ color: '#15202B' }}>
            Ready to collaborate? I'm available for full-time opportunities and consulting projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl font-medium text-center transition-all"
              style={{
                background: 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
                color: '#F4F1EA',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(215, 95, 78, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/kobe-smallman"
              target="_blank"
              className="px-8 py-4 rounded-xl font-medium text-center border-2 transition-all"
              style={{
                borderColor: '#A9B8C4',
                color: '#A9B8C4',
                background: 'transparent',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: '#D75F4E',
                color: '#D75F4E',
                boxShadow: '0 20px 40px rgba(169, 184, 196, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              💼 LinkedIn
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <h3 className="text-3xl font-display italic text-text-body mb-8">
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Contact Method Selection */}
                <motion.div className="space-y-4">
                  <label className="text-lg font-medium text-text-body">
                    How would you like me to respond?
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.label
                      className="flex items-center cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formState.contactMethod === 'email'}
                        onChange={(e) => setFormState({...formState, contactMethod: e.target.value as 'email' | 'sms'})}
                        className="mr-3 w-5 h-5"
                      />
                      <span className="text-text-body">📧 Email</span>
                    </motion.label>
                    <motion.label
                      className="flex items-center cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value="sms"
                        checked={formState.contactMethod === 'sms'}
                        onChange={(e) => setFormState({...formState, contactMethod: e.target.value as 'email' | 'sms'})}
                        className="mr-3 w-5 h-5"
                      />
                      <span className="text-text-body">📱 SMS</span>
                    </motion.label>
                  </div>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/50 text-text-body placeholder-text-body/50 focus:border-accent focus:outline-none transition-all"
                    style={{
                      borderColor: formState.name ? '#D75F4E' : 'transparent',
                    }}
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/50 text-text-body placeholder-text-body/50 focus:border-accent focus:outline-none transition-all"
                    style={{
                      borderColor: formState.email ? '#D75F4E' : 'transparent',
                    }}
                    required
                  />
                </motion.div>

                {/* Conditional Phone Field */}
                {formState.contactMethod === 'sms' && (
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="tel"
                      placeholder="Your Phone Number (e.g., 587-394-6940)"
                      value={formState.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/50 text-text-body placeholder-text-body/50 focus:border-accent focus:outline-none transition-all"
                      style={{
                        borderColor: formState.phone ? '#D75F4E' : 'transparent',
                      }}
                      maxLength={12}
                      required
                    />
                  </motion.div>
                )}

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    rows={5}
                    className="w-full px-6 py-4 rounded-xl border-2 border-transparent bg-white/50 text-text-body placeholder-text-body/50 focus:border-accent focus:outline-none resize-none transition-all"
                    style={{
                      borderColor: formState.message ? '#D75F4E' : 'transparent',
                    }}
                    required
                  />
                </motion.div>

                {/* Submit Status Message */}
                {submitMessage && (
                  <motion.div
                    className={`p-4 rounded-xl text-center font-medium ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl font-medium text-lg relative overflow-hidden"
                  style={{
                    background: isSubmitting 
                      ? 'linear-gradient(45deg, #A9B8C4, #c5d2dd)' 
                      : 'linear-gradient(45deg, #D75F4E, #ff6b5a)',
                    color: '#F4F1EA',
                  }}
                  whileHover={!isSubmitting ? {
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(215, 95, 78, 0.3)',
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      {formState.contactMethod === 'email' ? 'Sending Email...' : 'Sending SMS...'}
                    </motion.div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactKinetic;
