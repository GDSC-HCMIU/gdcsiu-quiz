import React from 'react';
import { ROUTING, EXTERNAL_LINK } from '../../constants';
import HOME_ICON from '../../assets/home-colorful.png'
import FB_ICON from '../../assets/facebook.png'
import CLUB_LOGO from '../../assets/icon.svg'


export const Footer = () => {
  return (
    <div>
      <footer>
        <div class=" fixed bottom-0 w-full h-max bg-gray-600 text-white">
          <div class="flex-grow">
            <div class="container mx-auto text-center">
              <ul class="flex justify-center text-lg mt-5 space-x-4">
                <li>
                  <a href={ROUTING.HOME} target="_blank" class="hover:text-gray-400">
                    <img src={HOME_ICON} width="24" alt="home" />
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINK.FB_FANPAGE} target="_blank" class="hover:text-gray-400">
                    <img src={FB_ICON} width="24" alt="fb" />
                  </a>
                </li>
              </ul>
              <div>
                <img class="mx-auto mt-5"src={CLUB_LOGO} width="50" alt="logo"/>
                <p class="m-5 text-lg">&copy; 2023 GDSC International University</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
