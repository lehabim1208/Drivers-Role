import React, { useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from './UI';
import { Driver } from '../types';
import QRCode from 'qrcode';
export const Badge: React.FC<{ driver: Driver }> = ({ driver }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawBadge = async () => { /* Lógica de dibujo del canvas */ };
  useEffect(() => { drawBadge(); }, [driver]);
  return ( <div className="flex flex-col items-center gap-6 p-2"> <canvas ref={canvasRef} className="max-w-full h-auto w-[320px] bg-white rounded-3xl" /> <Button variant="primary" className="w-full">Descargar Gafete</Button> </div> );
};