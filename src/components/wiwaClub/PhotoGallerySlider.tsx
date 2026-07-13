import React from 'react'
import Slider from 'react-slick';
import { photoGalleryData } from '../../data/sliderData';

const PhotoGallerySlider: React.FC = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className='photo_gallery mb-5'>
            {
                photoGalleryData.map((item) => (
                    <div key={item.id} >
                        <div className='photo_gallery_grid'>
                            {
                                item.imageData.map((imgData, index) => (
                                    <img className='w-full' key={index} src={imgData.imgSrc} alt={imgData.alt} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </Slider>
    );
}

export default PhotoGallerySlider

