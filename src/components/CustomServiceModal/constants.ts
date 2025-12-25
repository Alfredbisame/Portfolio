// Service type options
export const SERVICE_TYPES = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-development', label: 'Mobile Development' },
  { value: 'cloud-architecture', label: 'Cloud Architecture' },
  { value: 'consultation', label: 'Technical Consultation' },
  { value: 'other', label: 'Other' },
] as const;

// Budget options in Ghanaian Cedis (GHS)
export const BUDGET_OPTIONS = [
  { value: 'under-5k', label: 'Under ₵5,000' },
  { value: '5k-10k', label: '₵5,000 - ₵10,000' },
  { value: '10k-25k', label: '₵10,000 - ₵25,000' },
  { value: '25k-50k', label: '₵25,000 - ₵50,000' },
  { value: '50k-100k', label: '₵50,000 - ₵100,000' },
  { value: '100k-plus', label: '₵100,000+' },
] as const;

// Timeline options
export const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: '1 Month' },
  { value: '2-3-months', label: '2-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6-plus-months', label: '6+ Months' },
] as const;

// WhatsApp number
export const WHATSAPP_NUMBER = '233554572904';

// Label getters
export const getServiceTypeLabel = (value: string): string => {
  const option = SERVICE_TYPES.find(opt => opt.value === value);
  return option?.label || value;
};

export const getBudgetLabel = (value: string): string => {
  const option = BUDGET_OPTIONS.find(opt => opt.value === value);
  return option?.label || value || 'Not specified';
};

export const getTimelineLabel = (value: string): string => {
  const option = TIMELINE_OPTIONS.find(opt => opt.value === value);
  return option?.label || value || 'Not specified';
};

