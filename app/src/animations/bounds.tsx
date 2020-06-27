// 縦に揺れる
export const Bounds = {
  bounds: {
    animation: "$fluffy 3s ease infinite",
  },
  "@keyframes fluffy": {
    "0%": {
      transform: "translateY(0)",
    },
    "5%": {
      transform: "translateY(0)",
    },
    "10%": {
      transform: "translateY(0)",
    },
    "20%": {
      transform: "translateY(-10px)",
    },
    "25%": {
      transform: "translateY(0)",
    },
    "30%": {
      transform: "translateY(-8px)",
    },
    "50%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
};
