export default function getDefaultFootballImage() {
  const possibleImages = [
    'uxctbcw3v91vswdlbqkp', // Saquon Barkley
    'mwblpkhgvaf71lhxzvsq', // Ja'Marr Chase
    'nvmzzrfw73cioxmsrddg', // Bijan Robinson
    'ud1xvip0fqzwr2jyjjtb', // Josh Allen
  ];

  const defaultImageID =
    possibleImages[Math.floor(Math.random() * possibleImages.length)];

  return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
}
