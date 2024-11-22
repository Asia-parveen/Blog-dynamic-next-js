import React from "react";
import { books } from "../../../data/books";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


type BookDetailsProps = {
  params: { id: string };
};

const BookDetails = async ({ params }: BookDetailsProps) => {
 
  const { id } = await params; 

  const book = books.find((b) => b.id === id);

  if (!book) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
      <div className="rounded-lg p-2">
        <Image
          src={book.image}
          alt={book.title}
          width={800}
          height={400}
          className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:opacity-60"
        />
      </div>
      <div className="text-center mt-[2rem]">
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Publisher:</span> {book.author}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Genre:</span> {book.genre}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Published Year:</span>{" "}
          {book.publishYear}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-gray-800">Description:</span>{" "}
          {book.description}
        </p>
      </div>

      <Link
        href="/"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default BookDetails;



// import React from "react";
// import { books } from "../../../data/books";
// import { notFound } from "next/navigation"; 
// import Link from "next/link";
// import Image from "next/image";


// const BookDetails = async ({ params }: { params: { id: string } }) => {

//   const book = books.find((b) => b.id === params.id);

  
//   if (!book) return notFound();

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
//       <div className="rounded-lg p-2">
//         <Image
//           src={book.image}
//           alt={book.title}
//           width={800}
//           height={400}
//           className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:opacity-60"
//         />
//       </div>
//       <div className="text-center mt-[2rem]">
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Publisher:</span> {book.author}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Genre:</span> {book.genre}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Published Year:</span>{" "}
//           {book.publishYear}
//         </p>
//         <p className="text-gray-700 leading-relaxed mb-6">
//           <span className="font-semibold text-gray-800">Description:</span>{" "}
//           {book.description}
//         </p>
//       </div>

//       <Link
//         href="/"
//         className="text-[#1D3557] hover:underline font-medium text-lg"
//       >
//         ← Back to Home
//       </Link>
//     </div>
//   );
// };

// export default BookDetails;



// import React from "react";
// import { books } from "../../../data/books";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";


// type BookDetailsProps = {
//   params: { id: string };
// };

// const BookDetails = ({ params }: BookDetailsProps) => {
//   const book = books.find((b) => b.id === params.id);

//   if (!book) return notFound();

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6">{book.title}</h1>
//       <div className="rounded-lg p-2">
//         <Image
//           src={book.image}
//           alt={book.title}
//           width={800}
//           height={400}
//           className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:opacity-60"
//         />
//       </div>
//       <div className="text-center mt-[2rem]">
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Publisher:</span> {book.author}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Genre:</span> {book.genre}
//         </p>
//         <p className="text-lg text-gray-800 mb-4">
//           <span className="font-semibold">Published Year:</span>{" "}
//           {book.publishYear}
//         </p>
//         <p className="text-gray-700 leading-relaxed mb-6">
//           <span className="font-semibold text-gray-800">Description:</span>{" "}
//           {book.description}
//         </p>
//       </div>

//       <Link
//         href="/"
//         className="text-[#1D3557] hover:underline font-medium text-lg"
//       >
//         ← Back to Home
//       </Link>
//     </div>
//   );
// };

// export default BookDetails;



