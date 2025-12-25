import { useState } from 'react';
import { WHATSAPP_NUMBER } from './CustomServiceModal/constants';

export interface ContactFormState {
  name: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    phone: '',
    message: '',
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `*Contact Form Submission*

*Name:* ${formState.name}
*Phone:* ${formState.phone}

*Message:*
${formState.message}

---
This message was sent from my portfolio website.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');

    // Show success state
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        message: '',
      });
      setActiveField(null);
    }, 3000);
  };

  const resetForm = () => {
    setFormState({
      name: '',
      phone: '',
      message: '',
    });
    setActiveField(null);
    setIsSubmitted(false);
  };

  return {
    formState,
    activeField,
    isSubmitted,
    handleChange,
    handleSubmit,
    setActiveField,
    resetForm,
  };
};

