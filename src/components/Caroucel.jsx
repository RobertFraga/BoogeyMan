import React from "react";
import Django from "../assets/django.svg";
import react from "../assets/reactjs.svg";
import Python from "../assets/python.svg";
import Js from "../assets/javascript.svg";
import mySQL from "../assets/mysql2.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css-3.svg";
import tail from "../assets/tailwind.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";

const Caroucel = () => {
  return (
    <>
      <div className="bg-purple-700 p-6">
        {/* Title */}
        <div className="text-white font-extrabold text-center text-2xl mb-6">
          Technologies
        </div>

        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {/* Hide scrollbar for Chrome/Safari */}
          <style>
            {`
      div::-webkit-scrollbar {
        display: none;
      }
    `}
          </style>

          {[...Array(1)]
            .flatMap(() => [
              Django,
              react,
              Python,
              Js,
              mySQL,
              html,
              css,
              tail,
              figma,
              git,
            ])
            .map((imgSrc, idx) => (
              <div key={idx} className="flex-shrink-0 snap-center">
                <img src={imgSrc} className="w-16 h-16 object-contain" />
              </div>
            ))}
        </div>

        {/* Desktop: single row like image */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {[Django, react, Python, Js, mySQL, html, css, tail, figma, git].map(
            (imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                className="w-16 h-16 object-contain"
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Caroucel;
