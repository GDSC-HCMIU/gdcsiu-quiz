import React from 'react';


export const Footer = () => {
  return (
    <div>
      <footer>
        <div class="rounded-t-xl fixed bottom-0 w-full h-max bg-gray-900 text-white">
          <div class="flex-grow">
            <div class="container mx-auto text-center">
              <ul class="flex justify-center text-lg mt-5 space-x-4">
                <li><a href="/" class="hover:text-gray-400">Home</a></li>
                <li><a href="#" class="hover:text-gray-400">About</a></li>
                <li><a href="#" class="hover:text-gray-400">Services</a></li>
                <li><a href="#" class="hover:text-gray-400">Contact</a></li>
              </ul>
              <p class="m-5 text-lg">&copy; 2023 Demo Website</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
