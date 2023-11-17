export interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  variant?: 'standard' | 'filled';
  events?: {
    focus?: () => void;
    blur?: () => void;
  };
}
