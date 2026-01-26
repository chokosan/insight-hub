import React from "react";
import logo from '../assets/logo3.png'



const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Insight Hub
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Insight Hub is a space for sharing ideas, stories, lessons, and
            experiences across a wide range of topics — from technology and
            creativity to personal thoughts and everyday inspiration.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Why This Insight Hub Exists
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The idea behind Insight Hub is simple: to create a place where
              curiosity leads the way. Here, you’ll find content that isn’t
              limited to one niche, but instead reflects a variety of interests,
              ideas, and perspectives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s a deep dive into a concept, a personal reflection, or
              something learned along the way, every post is written with
              honesty, clarity, and a genuine desire to share value.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={logo}
              alt="About blog"
              className="bg-transparent h-70 w-70"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            What You’ll Find Here
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Curious Writing</h3>
              <p className="text-gray-600">
                Articles driven by curiosity, exploring ideas and topics that
                spark interest and reflection.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Honest Perspectives</h3>
              <p className="text-gray-600">
                Personal thoughts, lessons learned, and opinions shared with
                openness and authenticity.
              </p>
            </div>

            <div className="p-6 rounded-xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Creative Freedom</h3>
              <p className="text-gray-600">
                No strict categories — just the freedom to write about anything
                meaningful, interesting, or inspiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Thanks for Being Here
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Insight Hub continues to grow with every post and every reader.
            Whether you’re here to learn something new, find inspiration, or
            simply enjoy reading — you’re always welcome.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
