export default function getDefaultBasketballImage() {
    const possibleImages = [
        'b29hecz6uifluvjsebdj', // Giannis (his photo works perfectly for this page)
        'x1qhekbnogvomuozfoxl', // Jokic
        'q21a27w6knxret2s6ppg', // Luka
        'mfgahe7yue41ltc0wzoh', // Embiid
        'qxrnygjfdkj5g86n4sjh', // Tatum
    ];
  
    const defaultImageID =
      possibleImages[Math.floor(Math.random() * possibleImages.length)];
  
    return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
  }
  