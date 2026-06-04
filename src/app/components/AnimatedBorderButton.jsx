import React from "react";
import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

/* =========================================================
   1. GRADIENT BORDER BUTTON
========================================================= */

const GradientButtonRoot = styled(MuiButton)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
    padding: "10px 24px",
    fontWeight: 600,

    "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: "2px",

        background: `
      linear-gradient(
        90deg,
        ${theme.palette.primary.main},
        #00e5ff,
        #7c4dff,
        ${theme.palette.primary.main}
      )
    `,

        backgroundSize: "300% 300%",
        animation: "gradientBorder 3s linear infinite",

        WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",

        pointerEvents: "none"
    },

    "@keyframes gradientBorder": {
        "0%": {
            backgroundPosition: "0% 50%"
        },
        "100%": {
            backgroundPosition: "300% 50%"
        }
    }
}));

export const AnimatedBorderButton = ({
    children,
    href,
    onClick,
    ...props
}) => {
    const handleClick = (event) => {
        if (href) window.open(href, "_blank");
        if (onClick) onClick(event);
    };

    return (
        <GradientButtonRoot
            variant="outlined"
            onClick={handleClick}
            {...props}
        >
            {children}
        </GradientButtonRoot>
    );
};

/* =========================================================
   2. PROGRESSIVE BORDER BUTTON
   (Moving Glow Around Border)
========================================================= */

const ProgressiveButtonRoot = styled(MuiButton)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: 14,
    padding: "10px 24px",
    fontWeight: 600,

    border: "1px solid rgba(255,255,255,0.12)",

    "&::before": {
        content: '""',
        position: "absolute",

        width: "80px",
        height: "80px",

        background: `radial-gradient(
      circle,
      ${theme.palette.primary.main} 0%,
      transparent 70%
    )`,

        animation: "orbitBorder 4s linear infinite",

        pointerEvents: "none"
    },

    "@keyframes orbitBorder": {
        "0%": {
            top: "-40px",
            left: "-40px"
        },

        "25%": {
            top: "-40px",
            left: "calc(100% - 40px)"
        },

        "50%": {
            top: "calc(100% - 40px)",
            left: "calc(100% - 40px)"
        },

        "75%": {
            top: "calc(100% - 40px)",
            left: "-40px"
        },

        "100%": {
            top: "-40px",
            left: "-40px"
        }
    }
}));

export const ProgressiveBorderButton = ({
    children,
    href,
    onClick,
    ...props
}) => {
    const handleClick = (event) => {
        if (href) window.open(href, "_blank");
        if (onClick) onClick(event);
    };

    return (
        <ProgressiveButtonRoot
            variant="contained"
            onClick={handleClick}
            {...props}
        >
            {children}
        </ProgressiveButtonRoot>
    );
};

export default AnimatedBorderButton;

