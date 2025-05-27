'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaFacebookF,
} from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5 border-t border-gray-500/70">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/images/jesus-saves.jpg"
          alt="Jesus saves"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">
                Call us
              </span>
              <a
                href="tel:0123456789"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6 text-rose-900">
              <li>
                <Link href="#" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <FaYoutube className="size-6 hover:opacity-75 transition" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram className="size-6 hover:opacity-75 transition" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                  <FaXTwitter className="size-6 hover:opacity-75 transition" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <FaTiktok className="size-6 hover:opacity-75 transition" />
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF className="size-6 hover:opacity-75 transition" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Programs</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">
                    Family Hub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">
                    Faith and Worship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">
                    Health Nuggets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">
                    Children
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 transition hover:opacity-75">
                    Testimonies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies Policy
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2025. Seventh-day Adventist Church - Karen Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
