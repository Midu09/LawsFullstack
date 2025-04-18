import { IKImage } from "imagekitio-react";

const Images = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Images;
