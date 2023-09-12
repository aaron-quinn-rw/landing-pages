export default function getDefaultHockeyImage() {
    const possibleImages = [
        'fopzoj2htjha4jplld7w', // Connor McDavid
        'wfjeuledao3izcajlaza', // Nathan Mackinnon
        'z7u0fx6thdc3qel6pkzw', // Cale Makar
        'ikhuhkmcaz2uzz6rckqc', // Sidney Crosby
        'oemko2cm5kkf8dj4oucw', // Adam Fox
        'kkpja3juszlrnsrk0ply', // Leon Draisaitl
    ];
  
    const defaultImageID =
      possibleImages[Math.floor(Math.random() * possibleImages.length)];
  
    return `https://res.cloudinary.com/rotowire/image/upload/ar_4:3,c_fill,dpr_2.0,f_auto,g_auto:custom_no_override,q_auto,w_auto/${defaultImageID}`;
  }
  