import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-[#eee]">
      <div className="md:mx-7 mx-0">
        <h2 className="text-center text-2xl pt-7 mb-4 text-stone-600">
          How is your job search ?, Track your job application process.
        </h2>
        <div className="flex justify-center">
          <div>
            <input
              placeholder="Search application"
              className="border-none p-2 outline-none border-slate-800"
            />
            <button className="bg-[#6DED5C] text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>
        <Link href="/create">
          <button className="bg-[#8BD649] text-white p-2 rounded float-right">
            New Apply
          </button>
        </Link>
        <div>
          <table class="md:table-fixed table-auto w-full bg-white border-collapse border border-slate-400 text-stone-700">
            <caption class="caption-top">
              Recently Sent Job Applications
            </caption>
            <thead>
              <tr>
                <th className="border border-slate-300">Company</th>
                <th className="border border-slate-300">Postion</th>
                <th className="border border-slate-300">Date of Applying</th>
                <th className="border border-slate-300">Status</th>
                <th className="border border-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300">
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className="border border-slate-300">Malcolm Lockyer</td>
                <td className="border border-slate-300">1961</td>
                <td className="border border-slate-300">1961</td>
                <td className="border border-slate-300">
                  <div className="flex">
                    <div className="group relative">
                      <FiEdit />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Edit
                      </span>
                    </div>
                    <div className="group relative">
                      <MdDeleteOutline />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300">Witchy Woman</td>
                <td className="border border-slate-300">The Eagles</td>
                <td className="border border-slate-300">1972</td>
                <td className="border border-slate-300">1972</td>
                <td className="border border-slate-300">
                  <div className="flex">
                    <div className="group relative">
                      <FiEdit />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Edit
                      </span>
                    </div>
                    <div className="group relative">
                      <MdDeleteOutline />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300">Shining Star</td>
                <td className="border border-slate-300">
                  Earth, Wind, and Fire
                </td>
                <td className="border border-slate-300">1975</td>
                <td className="border border-slate-300">1975</td>
                <td className="border border-slate-300">
                  <div className="flex">
                    <div className="group relative">
                      <FiEdit />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Edit
                      </span>
                    </div>
                    <div className="group relative">
                      <MdDeleteOutline />
                      <span
                        class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 "
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
