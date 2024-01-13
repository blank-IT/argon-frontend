import Image from 'next/image';

interface ImageViewerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
}

const ImageViewer = ({ src, alt, width, height, layout }: ImageViewerProps) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} layout={layout} />
  );
};

export { ImageViewer };
