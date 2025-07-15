"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

export default function VideoSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  const handleCloseVideo = () => {
    setIsPlaying(false)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-white">
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Video Placeholder with Play Button */}
        <div
          className="relative w-full max-w-4xl aspect-video bg-blue-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePlayVideo}
        >
          <img
            src="/images/video-thumbnail.png"
            alt="Share your brand Story with Listerr"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <button
              className={`rounded-full p-6 bg-white shadow-md transition-all duration-300 
                ${isHovered ? "scale-110 bg-blue-50" : "scale-100"}`}
            >
              <Play className="w-8 h-8 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute left-[5%] top-[20%] w-32 h-32 bg-blue-200/50 rotate-45 backdrop-blur-sm" />
        <div className="absolute right-[15%] top-[30%] w-24 h-24 bg-blue-300/50 rotate-12 backdrop-blur-sm" />
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-16 right-0 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <video
              className="w-full h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              src="https://d2r3qmme4qcl0d.cloudfront.net/media/videos/Listerr-A%20commerce%20network.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
