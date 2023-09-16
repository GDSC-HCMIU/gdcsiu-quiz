import React from 'react';
import { Link } from 'react-router-dom';
import FB_ICON from '../../assets/facebook.png';
import HOME_ICON from '../../assets/home-colorful.png';
import CLUB_LOGO from '../../assets/icon.svg';
import { EXTERNAL_LINK, ROUTING } from '../../constants';


export const Footer = () => {
  return (
    <div>
      <footer>
        <div class=" fixed bottom-0 w-full h-max bg-gray-600 text-white">
          <div class="flex-grow">
            <div class="container mx-auto text-center">
              <ul class="flex justify-center text-lg mt-5 space-x-4">
                <li>
                  <Link to={ROUTING.HOME} class="hover:text-gray-400">
                    <img src={HOME_ICON} width="24" alt="home" />
                  </Link>
                </li>
                <li>
                  <Link to={EXTERNAL_LINK.FB_FANPAGE} target="_blank" class="hover:text-gray-400">
                    <img src={FB_ICON} width="24" alt="fb" />
                  </Link>
                </li>
              </ul>
              <div>
                <img class="mx-auto mt-5" src={CLUB_LOGO} width="50" alt="logo" />
                <p class="m-5 text-lg">&copy; 2023 GDSC International University</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
