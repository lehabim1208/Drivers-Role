import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info as InfoIcon } from 'lucide-react';

export const GlassCard = ({ children, className = "" }) => (
  <div className={`liquid-glass rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl ${className}`}>
    {children}
  </div>
);

// ... Resto del código de UI.tsx