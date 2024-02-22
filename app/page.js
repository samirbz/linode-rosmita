import Image from 'next/image';
export default function Home() {
  return (
    <main className='flex flex-col items-center '>
      <h1 className='text-4xl font-bold'>Rosmita page</h1>
      <Image
        src="/images/1.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
