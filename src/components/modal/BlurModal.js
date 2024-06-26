import React from 'react';
import styled from 'styled-components';

const BlurModalLayout = styled.div`
    box-sizing: border-box;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.15);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 500ms;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    z-index: 900;
    overflow: hidden;
`;
const ModalLayout = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 901;
    overflow: hidden;
`;
const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    border-radius: 15px;
    width: 100%;
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
    margin-top: 20vh;
    border: none;
    background-color: transparent;
    overflow: auto;

    &::-webkit-scrollbar {
    width: 5px; 
    }
    &::-webkit-scrollbar-thumb {
    background: #3B6596;
    border-radius: 4px;
    }

    .blur-image {
        width: 400px;
        height: 400px;
    }
`;
const ModalFooter = styled.div`
`;

const BlurModal = ({ innerDatas, footerDatas }) => {
    return (
        <BlurModalLayout>
            <ModalLayout>
                <ModalInner>{innerDatas}</ModalInner>
                <ModalFooter>{footerDatas}</ModalFooter>
            </ModalLayout>
        </BlurModalLayout>
    );
};

export default BlurModal;
