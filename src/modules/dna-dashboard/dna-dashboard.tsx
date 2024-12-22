import React from 'react';
import {
  AiOutlineHome,
  AiOutlineAim,
  AiOutlineLineChart,
  AiOutlineCalendar,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { FiSettings, FiBell } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { GiDna1 } from 'react-icons/gi';
import { BiScan } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';

export const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white rounded-lg p-5 m-5">
        <div className="text-2xl font-bold flex items-center">
          MYDNA
          <span className="ml-auto cursor-pointer p-2 rounded-full hover:bg-gray-100">
            <FiSettings size={16} />
          </span>
        </div>
        <ul className="mt-8">
          <li className="flex items-center p-2 cursor-pointer mb-2 hover:bg-gray-100 rounded-lg">
            <AiOutlineHome className="mr-2" />
            Homepage
          </li>
          <li className="flex items-center p-2 cursor-pointer mb-2 hover:bg-gray-100 rounded-lg">
            <AiOutlineAim className="mr-2" />
            Statistics
          </li>
          <li className="flex items-center p-2 cursor-pointer mb-2 bg-gray-100 rounded-lg text-indigo-600 font-semibold">
            <AiOutlineLineChart className="mr-2" />
            Analytics
            <IoIosArrowForward className="ml-auto text-gray-500" />
          </li>
          <li className="flex items-center p-2 cursor-pointer mb-2 hover:bg-gray-100 rounded-lg">
            <AiOutlineCalendar className="mr-2" />
            Appointments
          </li>
          <li className="flex items-center p-2 cursor-pointer mb-2 hover:bg-gray-100 rounded-lg">
            <AiOutlineMail className="mr-2" />
            Messages
            <span className="ml-auto bg-indigo-100 text-indigo-600 rounded-full px-2 py-0 text-xs">
              2
            </span>
          </li>
        </ul>
        <div className="mt-8 font-bold text-sm">
          Connected Profiles
          <button className="ml-2 bg-gray-100 border-none rounded-lg py-1 px-2 text-xs cursor-pointer">
            Add another
          </button>
        </div>
        <div className="flex mt-2 space-x-1">
          <BsPersonCircle size={24} />
          <BsPersonCircle size={24} />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 m-5">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex justify-between items-center text-gray-700">
            <div className="text-xl font-bold">DNA Overview</div>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1 cursor-pointer rounded-md text-center hover:bg-gray-100">
                Day
              </span>
              <span className="px-3 py-1 cursor-pointer rounded-md text-center bg-indigo-100 text-indigo-600">
                Week
              </span>
              <span className="px-3 py-1 cursor-pointer rounded-md text-center hover:bg-gray-100">
                Month
              </span>
            </div>
          </div>
          <div className="relative h-64 flex items-center justify-center mt-4">
            <img
              src="/dna_image.png" // Replace with your actual image path or require('path/to/image.png')
              alt="DNA"
              className="object-contain max-h-full max-w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="mb-3">Good interaction with other molecules</p>
                <button className="bg-indigo-600 text-white border-none rounded-lg py-2 px-4 cursor-pointer text-sm">
                  Learn more
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <button className="rounded-full bg-gray-100 p-1">
                <IoIosArrowBack />
              </button>
              <button className="rounded-full bg-gray-100 p-1">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/3 bg-white rounded-lg p-5 shadow-md flex flex-col">
            <div className="flex items-center text-gray-700">
              <BsPersonCircle size={30} className="mr-2" />
              <div>
                <p className="text-sm font-semibold">Becca Kirby</p>
                <p className="text-xs text-gray-500">Chicago, USA</p>
              </div>
              <span className="ml-auto cursor-pointer p-1 rounded-full hover:bg-gray-100">
                <FiBell size={16} />
              </span>
            </div>
            <div className="flex justify-between mt-3 text-xs text-gray-700">
              <div className="flex items-center">
                <HiOutlineSparkles size={14} className="mr-1" />
                27 Analysis in progress
              </div>
              <div className="flex items-center">
                <GiDna1 size={14} className="mr-1" />
                31 Active treatments
              </div>
            </div>
            <div className="mt-4 flex flex-col items-start text-gray-700">
              <div className="flex items-center justify-between w-full mb-1 text-sm">
                <p className="font-bold">
                  Heartrate{' '}
                  <span className="ml-1 font-normal text-xs text-gray-500">
                    Average rate
                  </span>
                </p>
                <span className="cursor-pointer p-1 rounded-full hover:bg-gray-100">
                  ...
                </span>
              </div>
              <div className="flex items-center justify-center h-20 text-2xl font-bold">
                92 <span className="text-sm font-normal">bpm</span>
              </div>
              <div>
                <img
                  src="/heartrate_graph.png" // Replace with your actual image path
                  alt="Heartrate Graph"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-2/3 bg-white rounded-lg p-5 shadow-md text-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Researches</div>
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <SlCalender size={14} className="mr-1 text-gray-500" />
                  <span className="text-xs text-gray-500">
                    September 11-17, 2023
                  </span>
                </div>
                <div className="flex items-center text-xs">
                  <span className="cursor-pointer p-1 rounded-full hover:bg-gray-100">
                    <IoIosArrowBack />
                  </span>
                  Week
                  <span className="cursor-pointer p-1 rounded-full hover:bg-gray-100">
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-2 top-0 w-1 h-full bg-gray-200"></div>
                <div className="flex items-center mb-1">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
                  <p className="ml-3">Mon</p>
                  <div className="ml-4 px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs">
                    Calculating the risk of diseases
                  </div>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-2 top-0 w-1 h-full bg-gray-200"></div>
                <div className="flex items-center mb-1">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-indigo-600 rounded-full"></div>
                  <p className="ml-3">Tue</p>
                  <div className="ml-4 px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs">
                    Diagnosis of genetic diseases
                  </div>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-2 top-0 w-1 h-6 bg-gray-200"></div>
                <div className="flex items-center mb-1">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <p className="ml-3 text-gray-500">Web</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-2 top-0 w-1 h-6 bg-gray-200"></div>
                <div className="flex items-center">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                  <p className="ml-3 text-gray-500">Thu</p>
                  <div className="ml-4 px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs">
                    Patterns in heredity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="font-bold text-gray-700">AI Powered Analytics</div>
          <ul className="mt-2">
            <li className="flex items-center p-2 cursor-pointer mb-1 hover:bg-gray-100 rounded-lg text-sm">
              <HiOutlineSparkles className="mr-2 text-gray-500" />
              Spectroscope{' '}
              <span className="ml-1 text-xs text-green-500 font-semibold">
                Ready
              </span>
            </li>
            <li className="flex items-center p-2 cursor-pointer mb-1 hover:bg-gray-100 rounded-lg text-sm">
              <GiDna1 className="mr-2 text-gray-500" />
              DNA Profile{' '}
              <span className="ml-1 text-xs text-yellow-500 font-semibold">
                In progress
              </span>
            </li>
            <li className="flex items-center p-2 cursor-pointer mb-1 hover:bg-gray-100 rounded-lg text-sm">
              <BiScan className="mr-2 text-gray-500" />
              Genetic Scanner{' '}
              <span className="ml-1 text-xs text-yellow-500 font-semibold">
                In progress
              </span>
            </li>
            <li className="flex items-center p-2 cursor-pointer mb-1 hover:bg-gray-100 rounded-lg text-sm">
              <CgFileDocument className="mr-2 text-gray-500" />
              General Analysis{' '}
              <span className="ml-1 text-xs text-yellow-500 font-semibold">
                In progress
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
