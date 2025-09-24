import Image from 'next/image';

export default function HeroImage({src = '', width = '100%', height = '100%'}: { src?: string, width: string, height?: string }) {
  return (
    <div style={{position: 'absolute', width: width, height: height, top: '0', backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }}>
      <Image
        src={src}
        alt="Hero"
        fill
        sizes="100vw"
        priority
        loading="eager"
        style={{
          objectFit: 'fill',
          
        }}
      />
    </div>
  );
}
