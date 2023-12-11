import Image from 'next/image';

interface ImageViewerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageViewer = ({ src, alt, width, height }: ImageViewerProps) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export { ImageViewer };
