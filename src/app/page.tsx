import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="group cursor-pointer">
        <Image
          src={"/suit-turned-away.png"}
          alt={"Suit turned away"}
          width={500}
          height={500}
          priority
          className="group-hover:hidden"
        />
        <Image
          src={"/suit-turning-to-you.png"}
          alt={"Suit turning to you"}
          width={500}
          height={500}
          priority
          className="hidden group-hover:block"
        />
      </div>
    </main>
  );
}
