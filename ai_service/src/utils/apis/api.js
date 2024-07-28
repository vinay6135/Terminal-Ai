const getBardUrl = () =>
  `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.BARD_API_KEY}`;

export { getBardUrl };
