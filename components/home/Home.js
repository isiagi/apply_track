import { useUser } from "@clerk/nextjs";
import { MdCreate } from "react-icons/md";

function Home({ applys, handleDelete, handleEdit, submitting, handleSearch }) {
  const { isSignedIn, user } = useUser();

  return (
    <div className="md:mx-7 mx-0">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className=" pt-7 mb-4 text-[#10B981] flex items-center gap-3 text-3xl font-light">
            HELLO {isSignedIn && `${user.lastName.toUpperCase()}`}! 👋
          </h2>
          <h3 className="text-[#475569]">
            Keep Track of your Job Applications Records Here.
          </h3>
        </div>
        <div className="flex justify-center">
          <div>
            <input
              placeholder="Search application"
              className="border-none p-2 bg-[#FAFAFA] outline-none border-slate-800"
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
            <button
              onClick={() => handleSearch()}
              className="bg-[#10B981] text-white p-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Link href="/create">
        <button className="bg-[#08D1C7] text-white p-2 rounded float-right flex items-center my-3">
          <MdCreate /> New
        </button>
      </Link>
      {
        <div>
          <Table
            data={applys}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleSubmit={submitting}
            setSearchParam={setSearchParam}
          />
        </div>
      }
    </div>
  );
}

export default Home;
