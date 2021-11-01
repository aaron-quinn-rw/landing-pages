export default function getDefaultFootballImage() {
  const possibleImages = [
    'z0vxnh10cwpwycrgcpjw', // Christian Mccaffrey
    'uji4uz4bcgtauzpuiclv', // Dalvin Cook
    'piogze78cdi3nt6jzf39', // Saquon Barkley
    'c2dxjuoz9ygh43yemk7b', // Derrick Henry
    'agzrnmpedmuerg2gwefv', // Alvin Kamara
    'qznd6al44tvmodnta57p', // Ekeziel Elliot
    'fflfjv0qsdeny1l9jb8x', // Patrick Mahomes
  ];

  const defaultImageID =
    possibleImages[Math.floor(Math.random() * possibleImages.length)];

  return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
}
