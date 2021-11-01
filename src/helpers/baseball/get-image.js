export default function getDefaultBaseballImage() {
  const possibleImages = [
    'leubf9flpaxusinegtby', // Guerrero
    'w8z10tg4olqhtxwctj7b', // Ohtani
    'ctolarswf5vl7ctkbty6', // Acuna
    'z67yk0vp30bgvhxbbybr', // Tatis
    'e8wdhhqlwblohqnsfbtz', // Soto
  ];

  const defaultImageID =
    possibleImages[Math.floor(Math.random() * possibleImages.length)];

  return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
}
