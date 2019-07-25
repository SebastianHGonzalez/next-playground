export const colors = {
  normal: {
    primary: "#4CAF50",
    primaryContrast: "white",
    secondary: "orange",
    secondaryContrast: "white",
    background: "transparent"
  },

  error: {
    primary: "#D8000C",
    primaryContrast: "white",
    secondary: "white",
    secondaryContrast: "#D8000C",
    background: "#FFBABA"
  }
};

export function makeTheme(colors) {
  return {
    background: {
      color: colors.background
    },

    button: {
      normal: {
        primary: {
          color: colors.primaryContrast,
          backgroundColor: colors.primary,
          borderColor: colors.primary
        },
        secondary: {
          color: colors.secondaryContrast,
          backgroundColor: colors.secondary,
          borderColor: colors.secondary
        }
      },
      outlined: {
        primary: {
          color: colors.primary,
          backgroundColor: "transparent",
          borderColor: colors.primary
        },
        secondary: {
          color: colors.secondary,
          backgroundColor: "transparent",
          borderColor: colors.secondary
        }
      },
      flat: {
        primary: {
          color: "black",
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        secondary: {
          color: "darkgrey",
          backgroundColor: "transparent",
          borderColor: "transparent"
        }
      }
    }
  };
}
