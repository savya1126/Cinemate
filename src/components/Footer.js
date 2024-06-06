import { Link } from "react-router-dom";

const footer = () => {
  return (

          <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
              <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030<Link to="/" class="hover:underline">Cinemate</Link>. All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                      <a href="#" target="_blank" class="hover:underline me-4 md:me-6">Facebook</a>
                  </li>
                  <li>
                      <a href="#" target="_blank" class="hover:underline me-4 md:me-6">Instagram</a>
                  </li>
                  <li>
                      <a href="#" target="_blank" class="hover:underline me-4 md:me-6">Linked-In</a>
                  </li>
                  <li>
                      <a href="#" target="_blank" class="hover:underline">GitHub</a>
                  </li>
              </ul>
              </div>
          </footer>

  )
}

export default footer;
