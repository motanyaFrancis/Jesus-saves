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


interface HighlightLink {
  title: string;
  slug: string;
}

interface FooterProps {
  links: HighlightLink[];
}

// 🔹 Social media links could be centralized if reused
const socialLinks = [
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: '#' },
  { icon: FaTiktok, label: 'TikTok', href: '#' },
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
];

const partners = [
  { name: 'Hope Channel Kenya', href: '#', logo: '/images/hope-channel.jpg' },
  { name: 'Hope Channel Africa', href: '#', logo: '/images/hope-africa.png' },
  { name: '2nd Coming Broadcasting Network', href: '#', logo: '/images/2cbn.png' },
  { name: 'Dawn of Faith TV', href: '#', logo: '/images/dawn-of-faith.jpg' },
];

const Footer: React.FC<FooterProps> = ({ links }) => {
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
            <ul className="mt-8 space-y-1 text-sm font-medium text-gray-700">
              <li>Dates: 6th - 19th July 2025</li>
              <li>Sunday to Friday: 4:30pm - 8:00pm</li>
              <li>Saturday: 8:00am - 4:00pm</li>
            </ul>

            <ul className="mt-8 flex gap-6 text-rose-900">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon className="size-6 hover:opacity-75 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="font-bold uppercase text-gray-900">Shows</p>
              <ul className="mt-6 space-y-2 font-semibold text-xs">
                {links?.length ? (
                  links.map(({ title, slug }) => (
                    <li key={slug}>
                      <Link
                        href={`/shows/${slug}`}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">No shows available.</li>
                )}
              </ul>
            </div>

            <div>
              <p className="font-bold uppercase text-gray-900">Partners</p>
              <ul className="mt-6 space-y-1 font-semibold text-xs">
                {partners.map((partner) => (
                  <li key={partner.name}>
                    <Link
                      href={partner.href}
                      className="flex items-center space-x-2 text-gray-700 transition hover:opacity-75"
                    >
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={45}
                        height={45}
                        className="object-contain"
                      />
                      <span>{partner.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {['Terms & Conditions', 'Privacy Policy', 'Cookies Policy'].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-gray-500 transition hover:opacity-75">
                    {label}
                  </Link>
                </li>
              ))}
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
