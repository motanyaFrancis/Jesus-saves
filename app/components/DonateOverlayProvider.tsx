// components/DonateOverlayProvider.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DonateOverlayContextType {
  isOpen: boolean;
  open: (amount?: number, type?: 'once' | 'monthly') => void;
  close: () => void;
  initialAmount: number | undefined;
  initialDonationType: 'once' | 'monthly' | undefined;
}

const DonateOverlayContext = createContext<DonateOverlayContextType | undefined>(undefined);

export const DonateOverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialAmount, setInitialAmount] = useState<number | undefined>(undefined);
  const [initialDonationType, setInitialDonationType] = useState<'once' | 'monthly' | undefined>(undefined);

  const open = (amount?: number, type?: 'once' | 'monthly') => {
    setInitialAmount(amount);
    setInitialDonationType(type);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setInitialAmount(undefined); // Clear initial amount on close
    setInitialDonationType(undefined); // Clear initial type on close
  };

  return (
    <DonateOverlayContext.Provider value={{ isOpen, open, close, initialAmount, initialDonationType }}>
      {children}
    </DonateOverlayContext.Provider>
  );
};

export const useDonateOverlay = () => {
  const context = useContext(DonateOverlayContext);
  if (context === undefined) {
    throw new Error('useDonateOverlay must be used within a DonateOverlayProvider');
  }
  return context;
};