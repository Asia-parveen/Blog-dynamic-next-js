import React from "react";
import { books } from "../../data/books";
import Link from "next/link";
import Image from "next/image";

const BooksPage = () => {
  return ( 
    <div className="p-8 max-w-6xl mx-auto pb-20 ">
     
      <h1 className="text-4xl font-bold mb-6 flex text-right py-7 gap-2 cursor-pointer hover:text-[#F1c40F]">
        <Image
          src="/images/logo.jpg" 
          alt="Book Icon"
          width={40} 
          height={40} 
          className="rounded-lg "
        />
        Famous Books Blog
      </h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <Image
              src={book.image} 
              alt={book.title} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600 mb-4">By {book.author}</p>
             
              <Link
                href={`/books/${book.id}`}
                className="text-[#1D3557] hover:underline hover:text-[#F1C40F] font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;



// import React from "react";
// import { books } from "../../data/books";
// import Link from "next/link";
// import Image from "next/image";

// const BooksPage = () => {
//   return ( 
//     <div className="p-8 max-w-6xl mx-auto pb-20 ">
     
//      <h1 className="text-4xl font-bold mb-6 flex text-right py-7 gap-2 cursor-pointer hover:text-[#F1c40F]">
//       <Image
//             src="/images/logo.jpg" 
//             alt="Book Icon"
//             width={40} 
//             height={40} 
//             className="rounded-lg "
//           />
//         Famous Books Blog</h1>
     
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {books.map((book) => (
//           <div
//             key={book.id}
//             className="border rounded shadow-md hover:shadow-xl transition-all overflow-hidden"
//           >
          
//             <Image
//               src={book.image} 
//               alt={book.title} 
//               width={300} 
//               height={200} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
//               <p className="text-gray-600 mb-4">By {book.author}</p>
             
//               <Link
//                 href={`/books/${book.id}`}
//                 className="text-[#1D3557] hover:underline hover:text-[#F1C40F] font-medium"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BooksPage;
