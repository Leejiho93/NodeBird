import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Icon } from 'antd';
import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed; 
    z-index: 5000;
    top: 0;
    left: 0;
    rigth: 0;
    bottom: 0
`;

export const Header = styled.header`
    height: 44; 
    background: white;
    position: relative;
    padding: 0;
    text-align: center;    

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }
`;

export const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background: #090909
`;

export const CloseBtn = styled(Icon)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15;
    line-height: 14px;
    cursor: pointer
`;

export const Indicator = styled.div`
    text-align: center;

    & div {
        width: 75;
        heigth: 30;
        line-height: 30px;
        border-radius: 15;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }
`;

export const ImageWrapper = styled.div`
    padding: 32;
    text-align: center;

    & img {
        margin: 0 auto;
        max-height: 750px
    }
`

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Overlay>
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn type="close" onClick={onClose} />
            </Header>
            <div>
                <SlickWrapper>
                    <Slick
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite={true}
                        arrows
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map(v => {
                            return (
                                <ImageWrapper>
                                    <img src={v.src}/>
                                </ImageWrapper>
                            )
                        })}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1} / {images.length}
                        </div>
                    </Indicator>
                </SlickWrapper>
            </div>
        </Overlay>
    )
}

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;