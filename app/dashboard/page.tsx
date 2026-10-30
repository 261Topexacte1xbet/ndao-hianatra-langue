'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [selectedMethod, setSelectedMethod] = useState<'mvola' | 'orange'>('mvola');
  const [copied, setCopied] = useState(false);

  const mvolaNumber = '0382969974';
  const orangeNumber = '0372514900';
  const accountName = 'ANDRO FARA NIEZAKA';

  const handleCopy = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#ffffff', padding: '16px', paddingBottom: '96px', maxWidth: '440px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(30, 41, 59, 0.6)', marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: '900', color: '#34d399', margin: '0 0 4px 0' }}>Ndao Hianatra Langue</h1>
        <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>Fandoavam-bola sy Fanavaozana Premium</p>
      </div>

      {/* Main Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '20px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '12px', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Safidio ny fomba handoavam-bola</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <button
              onClick={() => setSelectedMethod('mvola')}
              style={{
                padding: '12px',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: '12px',
                border: selectedMethod === 'mvola' ? '2px solid #f59e0b' : '2px solid #1e293b',
                backgroundColor: selectedMethod === 'mvola' ? 'rgba(245, 158, 11, 0.2)' : '#1e293b',
                color: selectedMethod === 'mvola' ? '#fcd34d' : '#94a3b8',
                cursor: 'pointer'
              }}
            >
              MVola
            </button>
            <button
              onClick={() => setSelectedMethod('orange')}
              style={{
                padding: '12px',
                borderRadius: '16px',
                fontWeight: '800',
                fontSize: '12px',
                border: selectedMethod === 'orange' ? '2px solid #f97316' : '2px solid #1e293b',
                backgroundColor: selectedMethod === 'orange' ? 'rgba(249, 115, 22, 0.2)' : '#1e293b',
                color: selectedMethod === 'orange' ? '#fdba74' : '#94a3b8',
                cursor: 'pointer'
              }}
            >
              Orange Money
            </button>
          </div>

          {/* Credentials Display */}
          <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.7)', border: '1px solid rgba(30, 41, 59, 0.8)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <p style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>Anaran'ny Tompony</p>
              <p style={{ fontWeight: '900', color: '#ffffff', fontSize: '16px', margin: 0 }}>{accountName}</p>
            </div>

            <div>
              <p style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px 0' }}>Laharana Finday</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '18px', color: '#34d399' }}>
                  {selectedMethod === 'mvola' ? mvolaNumber : orangeNumber}
                </span>
                <button
                  onClick={() => handleCopy(selectedMethod === 'mvola' ? mvolaNumber : orangeNumber)}
                  style={{
                    backgroundColor: '#34d399',
                    color: '#020617',
                    fontWeight: '900',
                    fontSize: '12px',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {copied ? 'Voikaika' : 'Mandika'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid #1e293b', padding: '16px', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>Toromarika:</h3>
          <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
            1. Manaova fandefasana vola amin'ireo laharana voalaza etsy ambony.<br />
            2. Alefaso ny porofo na ny hafatra fanamafisana amin'ny mpandrindra mba hampavitrika ny kaontinao Premium.
          </p>
        </div>
      </div>
    </div>
  );
}
