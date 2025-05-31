import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center relative text-white bg"
      style={{
        background:
          'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZysXnI8nfgGW88jNjPaLMoL3EsHnYuMdiaw&s)',
          
      }}
    >
      <div className="absolute inset-0 bg-opacity-70 z-0" />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-10 text-center">🎬 MovieVerse Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      
          <div
            onClick={() => navigate("/popular")}
            className="cursor-pointer bg-gray-900 bg-opacity-80 rounded-xl p-6 w-full max-w-xs text-center shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
          ><center>
            <img
              src="https://filmcolossus.com/wp-content/uploads/2022/07/typorama-2.jpg"
              alt="Popular"
              className="w-16 h-16 mx-auto mb-4"
            />
            </center>
            <h2 className="text-xl font-semibold mb-1">Action</h2>
            <p className="text-gray-300 text-sm">Click to explore all Action movies</p>
          </div>

      
        </div>
      </div>
    </div>
  );
}
