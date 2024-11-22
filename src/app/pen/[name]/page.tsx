// src/app/pen/[name]/page.tsx
import { pens } from "../../../data/penData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: {
    name: string; 
  };
};

const PenDetail = ({ params }: Props) => {
 
  const penName = decodeURIComponent(params.name.replace(/-/g, " "));
  
 
  const pen = pens.find((pen) => pen.name.toLowerCase() === penName.toLowerCase());

  
  if (!pen) {
    return notFound(); 
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{pen.name}</h1>
      <Image
        src={pen.imageUrl}
        alt={`Image of ${pen.name}`}
        width={500}
        height={300}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4 font-bold">{pen.description}</p>
      <p className="text-lg text-gray-700 mb-6">{pen.content}</p>
      <Link
        href="/pen"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Go Back
      </Link>
    </div>
  );
};

export default PenDetail;





