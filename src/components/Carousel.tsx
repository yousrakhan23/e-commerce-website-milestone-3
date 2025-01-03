import Image from "next/image";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";
// import img7 from "../../public/images/img7.jpg";
// import img8 from "../../public/images/img8.jpg";
// import img9 from "../../public/images/img9.jpg";
// import img10 from "../../public/images/img10.jpg";
// import img11 from "../../public/images/img11.jpg";
// import img12 from "../../public/images/img12.jpg";

import Link from "next/link";

export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={img1} alt="image1" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image alt="image2" src={img2} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image alt="image3" src={img3} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image alt="image4" src={img4} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image src={img5} alt="image5" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image src={img6} alt="image6" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide5" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
