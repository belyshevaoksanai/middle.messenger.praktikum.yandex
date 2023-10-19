export interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  variant?: 'standard' | 'filled';
  events?: {
    focus?: () => void;
    blur?: () => void;
  };
}
