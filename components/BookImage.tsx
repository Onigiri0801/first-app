import Image from 'next/image';

type Props = {
  src: string;
  className?: string;
};

export default function BookImage({ src, className }: Props) {
  return (
    <div
      className={`mx-auto w-48 sm:w-60 min-h-48 grid place-items-center ${className}`}
    >
      <Image
        src={src}
        alt="書影"
        width={200}
        height={283}
        className="bg-white mx-auto"
      />
    </div>
  );
}
