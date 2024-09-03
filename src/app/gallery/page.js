import Image from "next/image";
import nextImage from '../assets/next_image.png'

const page = () => {
    return (
        <div>
            <h2 className="text-4xl text-blue-700 text-center">Image Optimization</h2>
            <h1 className="text-2xl text-center">Regular Image Tag</h1>
            <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*rV5X0gHZhdwixavh.png" alt="next image" className="mx-auto" width={500} height={500} />
            <h1 className="text-2xl text-center">Next Image Tag</h1>
            <Image src={`https://miro.medium.com/v2/resize:fit:828/format:webp/0*rV5X0gHZhdwixavh.png`} alt="next app" width={500} height={500} className="mx-auto" />
            <h1 className="text-2xl text-center">Local Image</h1>
            <Image src={nextImage} alt="next app" width={500} height={500} className="mx-auto" />
        </div>
    );
};

export default page;
