import { useState } from 'react';
import { getServiceTypeLabel, getBudgetLabel, getTimelineLabel, WHATSAPP_NUMBER } from './constants';

export interface FormState {
  name: string;
  phone: string;
  serviceType: string;
  description: string;
  budget: string;
  timeline: string;
}

export const useCustomServiceForm = (onClose: () => void) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    phone: '',
    serviceType: '',
    description: '',
    budget: '',
    timeline: '',
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const whatsappMessage = `*Custom Service Request*

*Name:* ${formState.name}
*Phone:* ${formState.phone}
*Service Type:* ${getServiceTypeLabel(formState.serviceType)}
*Budget:* ${getBudgetLabel(formState.budget)}
*Timeline:* ${getTimelineLabel(formState.timeline)}

*Project Description:*
${formState.description}

---
This message was sent from my portfolio website.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');

    // Show success state
    setIsSubmitted(true);
    
    // Reset form and close after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        serviceType: '',
        description: '',
        budget: '',
        timeline: '',
      });
      onClose();
    }, 3000);
  };

  const resetForm = () => {
    setFormState({
      name: '',
      phone: '',
      serviceType: '',
      description: '',
      budget: '',
      timeline: '',
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

