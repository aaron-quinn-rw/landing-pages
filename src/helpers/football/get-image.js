export default function getDefaultFootballImage() {
  const possibleImages = [
    'mv45bcb8zjh4vjnwwjlk', // Christian Mccaffrey
    'nvmzzrfw73cioxmsrddg', // Bijan Robinson
    'lcqv7clatkkaxz69d8fq', // CeeDee Lamb
    'th4nlbooobuvrjj7o7g7', // Ja'Marr Chase
    'jt1dd1ndn2i6j0c6algt', // Amon-Ra St. Brown
    'qmtyrjrt5elclr4tb2fg', // Breece Hall
    'fflfjv0qsdeny1l9jb8x', // Patrick Mahomes
  ];

  const defaultImageID =
    possibleImages[Math.floor(Math.random() * possibleImages.length)];

  return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
}
