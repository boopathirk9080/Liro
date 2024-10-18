import React from "react";
import pic1 from '../../assets/basepics/dispersion-02.jpeg';
import pic2 from '../../assets/basepics/aberrant-01.jpeg';
import pic3 from '../../assets/basepics/metallic-03.jpeg';
import pic4 from '../../assets/basepics/neon-09 (1).jpeg';
import pic5 from '../../assets/basepics/twilight-02.jpeg';

export function FeaturedImageGallery() {
    const data = [
        {
            imgelink: pic1, // Direct assignment of the image path
        },
        {
            imgelink: pic2,
        },
        {
            imgelink: pic3,
        },
        {
            imgelink: pic4,
        },
        {
            imgelink: pic5,
        },
        
    ];
    const [active, setActive] = React.useState(pic1
    );

    return (
        <div className="flex flex-col items-center pt-8 gap-6">
            {/* Main Image */}
            <div className="lg:w-[1200px] sm:w-[800px] h-[400px]">
                <img
                    className="w-full h-full rounded-lg object-cover object-center"
                    src={active}
                    alt="Main"
                />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-4 pb-6 lg:w-[1245px] sm:w-[823px]">
                {data.map(({ imgelink }, index) => (
                    <div key={index} className="flex justify-center">
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="lg:w-[190px] lg:h-[130px] sm:w-[130px] sm:h-[80px] cursor-pointer rounded-lg object-cover object-center hover:opacity-75 transition-opacity duration-200"
                            alt={`Thumbnail ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedImageGallery;
