import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  name: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
 
  breadcrumbs,
  }) => {
  return (
    <header className="relative bg-gray-300">
      

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="text-sm font-bold text-gray-500 mb-4" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <svg
                      className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title, Subtitle, Description */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="h-1 bg-yellow-500 w-16 mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-serif italic">
            {subtitle}
          </p>
          {description && (
            <p className="text-base text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
