import React from "react";

export interface DialogProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Dialog = ({ children, open, onOpenChange }: DialogProps) => (
  <div>
    {open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <div className="absolute top-2 right-2">
            <button onClick={() => onOpenChange(false)} className="text-gray-500">
              ×
            </button>
          </div>
          {children}
        </div>
      </div>
    )}
  </div>
);

Dialog.displayName = "Dialog";
export { Dialog };

export const DialogTrigger = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const DialogContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-gray-900">{children}</h2>
);

export const DialogDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-600">{children}</p>
);

export const DialogFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-end mt-4 space-x-2">{children}</div>
);
