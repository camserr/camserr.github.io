import { useState, useEffect } from 'react';
import { FaRunning, FaGlobeAmericas, FaMapMarkerAlt, FaCalendarAlt, FaMountain, FaHome } from 'react-icons/fa';
import SailingIcon from '@mui/icons-material/Sailing';

function Interests() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-100 tracking-tight">Beyond Code</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-dark-200 rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Chicago Skyline"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-accent-100">
              <FaMapMarkerAlt className="mr-2" />
              <span className="text-sm">Current: Fort Worth, TX</span>
            </div>
            <div className="flex items-center text-accent-100">
              <FaMapMarkerAlt className="mr-2" />
              <span className="text-sm">Target: Chicago, IL</span>
            </div>
          </div>
          <div className="bg-dark-300 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaHome className="text-accent-100 mr-2" />
                <span className="text-gray-300">Ann Arbor, MI</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/images/michigan-mitten.png"
                  alt="Michigan Mitten"
                  className="h-8 w-8 mr-2"
                />
                <div className="flex items-center">
                  <img 
                    src="/images/block-m.png"
                    alt="Block M"
                    className="h-6 w-auto mr-2"
                  />
                  <span className="font-bold text-maize text-lg">Go Blue!</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Growing up in Michigan fostered my deep connection with outdoor activities and water sports. 
            Whether it's sailing on the Great Lakes, skiing the slopes of Northern Michigan, or 
            running along coastal paths, I'm always seeking adventures that challenge and inspire. 
            This passion for outdoor activities has shaped my perspective on problem-solving and 
            teamwork, skills that I bring to my software engineering career. I'm particularly drawn 
            to waterfront locations and mountain regions, which influences my career goals as I seek 
            opportunities in the Midwest and East Coast regions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-200 rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <SailingIcon className="text-2xl text-accent-100 mr-3" />
              <h3 className="text-xl font-semibold text-gray-100">Sailing</h3>
            </div>
            <p className="text-gray-300">
              Former sailing instructor with experience teaching all skill levels. 
              Passionate about both recreational sailing and racing, with particular 
              experience in small boat handling and race management.
            </p>
          </div>

          <div className="bg-dark-200 rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaMountain className="text-2xl text-accent-100 mr-3" />
              <h3 className="text-xl font-semibold text-gray-100">Skiing</h3>
            </div>
            <p className="text-gray-300">
              Avid skier with experience across diverse terrains, from the local slopes of Michigan 
              to the challenging runs of Colorado and the breathtaking peaks of Whistler, Canada. 
              Each destination has offered unique challenges and unforgettable experiences, 
              contributing to my growth as both an athlete and problem-solver.
            </p>
          </div>

          <div className="bg-dark-200 rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaRunning className="text-2xl text-accent-100 mr-3" />
              <h3 className="text-xl font-semibold text-gray-100">Running</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated runner who enjoys exploring new trails and waterfront paths. 
              Running provides both physical challenge and mental clarity, essential 
              for maintaining work-life balance.
            </p>
            <div className="bg-dark-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center text-accent-100">
                  <FaCalendarAlt className="mr-2" />
                  <span className="text-sm font-medium">Next Race</span>
                </div>
                <span className="text-sm text-gray-400">Oct 19, 2025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Detroit Marathon</span>
                <span className="text-sm text-gray-400">26.2 mi</span>
              </div>
            </div>
          </div>

          <div className="bg-dark-200 rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <FaGlobeAmericas className="text-2xl text-accent-100 mr-3" />
              <h3 className="text-xl font-semibold text-gray-100">Travel</h3>
            </div>
            <p className="text-gray-300">
              Adventure seeker with a particular interest in coastal destinations. 
              Traveling provides new perspectives and challenges that enhance both 
              personal growth and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;
