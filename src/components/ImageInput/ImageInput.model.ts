interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface ImageInputProps {
  name: string;
  events?: {
    focus?: () => void;
    blur?: () => void;
    change?: (event: HTMLInputEvent) => void;
  };
}
