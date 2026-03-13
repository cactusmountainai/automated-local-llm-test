module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          ticker: 'ticker 10s linear infinite', // Adjust duration as needed
        },
        keyframes: {
          ticker: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
  };