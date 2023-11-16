export default function getDefaultBaseballImage() {
  const possibleImages = [
    'bb4ovozni7ehu4fzjrx2', // Betts
    'jqlgdlir0xeffiuxc8yu', // Strider
    'c6glgtwxgj2yv6clnqro' // Seager
  ];

  const defaultImageID =
    possibleImages[Math.floor(Math.random() * possibleImages.length)];

  return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
}
