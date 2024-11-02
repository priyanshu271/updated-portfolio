import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center overflow-hidden">
      <section className="flex flex-col md:flex-row items-center p-4 md:p-8 max-w-4xl w-full">

        {/* Text Section */}
        <div className="text-center md:text-left flex-1 md:pr-8 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
            Hi, <br />
            I am <span className="text-red-500">Priyanshu Rai</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4">{`<Web Developer />`}</p>
          <p className="mt-4 text-lg md:text-xl italic">
            {`"Code is like humor. When you have to explain it, it’s bad."`}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/IMG_3038.jpg"
            alt="Priyanshu Rai, Web Developer"
            width={220}  
            height={220}
            className="rounded-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
