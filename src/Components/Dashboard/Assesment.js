import React from "react";
import studentData from "./student_data";
const Assesment = () => {
  return (
    <div>
     

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
              <table class="min-w-full">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Topic
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Date Of assesment
                    </th>
                    
                    <th scope="col" class="relative py-3 px-6">
                      <span class="sr-only">Assesment Page</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                   {
                       studentData.map(data => (
                        <tr class="border-b hover:bg-gray-100 transition odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {data.subject}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {data.topic}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {data.assesmentDate}
                        </td>
                       
                        <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            href="/"
                            class="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                          >
                            Submit
                          </a>
                        </td>
                      </tr>
                       ))
                   }
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
      <button className="block bg-amber-600 w-full rounded p-2 text-white mt-3" href="/">View Completed Assesments</button>
    </div>
  );
};

export default Assesment;
