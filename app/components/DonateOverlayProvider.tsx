// components/DonateOverlayProvider.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface DonateOverlayContextType {
    open: () => void;
    close: () => void;
    isOpen: boolean;
}

const DonateOverlayContext = createContext<DonateOverlayContextType | undefined>(undefined);

export const DonateOverlayProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <DonateOverlayContext.Provider value={{ open, close, isOpen }}>
            {children}
        </DonateOverlayContext.Provider>
    );
};

export const useDonateOverlay = () => {
    const context = useContext(DonateOverlayContext);
    if (!context) throw new Error('useDonateOverlay must be used within a DonateOverlayProvider');
    return context;
};
