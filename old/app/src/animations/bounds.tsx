// 縦に揺れる
export const Bounds = {
  bounds: {
    animation: "$fluffy 6s ease infinite",
  },
  "@keyframes fluffy": {
    "0%": {
      transform: "translateY(0)",
    },
    "3%": {
      transform: "translateY(0)",
    },
    "5%": {
      transform: "translateY(0)",
    },
    "10%": {
      transform: "translateY(-3px)",
    },
    "12.5%": {
      transform: "translateY(0)",
    },
    "15%": {
      transform: "translateY(-6px)",
    },
    "25%": {
      transform: "translateY(0)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
};
