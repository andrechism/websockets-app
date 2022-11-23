import styled, { keyframes } from "styled-components"

const duetRotate = keyframes`
    0% {
        transform: translateZ(0) rotate(0deg) translateX(-50%) translateY(-50%)
    }

    100% {
        transform: translateZ(0) rotate(360deg) translateX(-50%) translateY(-50%)
    }
`

export const Spinner = styled.div`
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 800;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.background.tertiary};
    border-width: 2px;
    border-style: solid;
    border-color: transparent transparent transparent currentcolor;
    border-image: initial;
    border-radius: 50%;
    transform: translateZ(0px) translateX(-50%) translateY(-50%);
    transform-origin: 0% 0%;
    animation: 0.6s linear 0s infinite normal none running ${duetRotate};

    &::after {
        padding: 0px;
        margin: 0px;
        background: transparent;
        appearance: none;

        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        overflow: hidden;
        content: "";
        border: 2px solid currentcolor;
        border-radius: 50%;
        opacity: 0.3;
        transform: translateZ(0px) translateX(-50%) translateY(-50%);
        transform-origin: 0% 0%;
    }
`

