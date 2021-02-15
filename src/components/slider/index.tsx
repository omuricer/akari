import Swiper from "react-id-swiper";
import Image from "next/image";
import SwiperCore, { Navigation, Lazy } from "swiper";
import style from "./index.module.scss";

SwiperCore.use([Navigation, Lazy]);

interface Props {
  images: { src: string; alt: string }[];
}
const Slider: React.FC<Props> = (props) => {
  const images = props.images.map((image, index) => (
    <span className={style.item} key={index}>
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={600}
        objectFit="contain"
      />
    </span>
  ));
  return (
    <>
      <Swiper
        autoHeight
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images}
      </Swiper>
    </>
  );
};
export default Slider;
