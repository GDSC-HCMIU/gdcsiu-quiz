import React from 'react';
import { Link } from 'react-router-dom';
import FB_ICON from '../../assets/facebook.png';
import HOME_ICON from '../../assets/home-colorful.png';
import CLUB_LOGO from '../../assets/icon.svg';
import { EXTERNAL_LINK, ROUTING } from '../../constants';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 h-max bg-gray-600 text-white max-sm:sticky max-sm:mt-5 max-sm:h-12">
      <div className="flex">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center text-lg mt-5 space-x-4 max-sm:hidden">
            <li>
              <Link to={ROUTING.HOME} className="hover:text-gray-400">
                <img src={HOME_ICON} width="24" alt="home" />
              </Link>
            </li>
            <li>
              <Link
                to={EXTERNAL_LINK.FB_FANPAGE}
                target="_blank"
                className="hover:text-gray-400">
                <img src={FB_ICON} width="24" alt="fb" />
              </Link>
            </li>
          </ul>
          <div className="max-sm:bg-gray-600 max-sm:inset-x-0 w-full max-sm:p-2">
            <img
              className="mx-auto mt-5  w-12 max-sm:mt-2 max-sm:w-12"
              src={CLUB_LOGO}
              alt="logo"
            />
            <p className="m-5 text-lg max-sm:mt-2 max-sm:text-sm max-sm:m-0">
              &copy; 2023 GDSC International University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
