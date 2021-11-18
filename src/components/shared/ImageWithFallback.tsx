export type ImageFallbackType = {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = 'https://res.cloudinary.com/chore-technologies/image/upload/v1622826989/appmockup_agdped.png',
}: ImageFallbackType) => {
  return (
    <img
      className="object-cover"
      src={src}
      alt={alt}
      onError={(e) => (e.currentTarget.src = fallbackSrc)}
    />
  );
};
