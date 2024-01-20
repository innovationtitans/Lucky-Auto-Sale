import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyCollections = () => {
  const axiosSecure = useAxiosSecure();
  const [sold, setSold] = useState(false);

  const { data: CarInformation = [], refetch } = useQuery({
    queryKey: ["mycollection"],
    queryFn: async () => {
      const res = await axiosSecure.get("/cars");
      return res.data;
    },
  });

  console.log(sold);

  const handleSold = async (id) => {
    const res = await axiosSecure.patch(`sold/${id}`);
    console.log(res.data);
    refetch();
    setSold(true);
  };

  const handleDetele = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this data after deleting",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/deleteCar/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: "This car has been deleted from the server.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <>
      <div className="text-center my-20">
        The sold option is not toggled here. Clicking on the sold option (yes or
        no) will make it tagged as sold in homepage.
      </div>
      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Last 4 digit of ID</th>
              <th>Detail</th>
              <th>Date Posted</th>
              <th>Edit</th>
              <th>Sold?</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {CarInformation.map((d) => {
              return (
                <tr key={d._id}>
                  <th>
                    <td>{d._id.slice(19, d._id.length - 1)}</td>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={d.Image_cover} alt={d.year} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {d.year} {d.model} {d.make}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{d.date}</td>

                  <td>
                    <Link to={`/dashboard/updateCar/${d._id}`}>
                      <p className=" hover:bg-yellow-400 w-fit p-2   cursor-pointer">
                        <MdEditSquare className="text-3xl" />
                      </p>
                    </Link>
                  </td>

                  <td>
                    <p onClick={() => handleSold(d._id)}>
                      {d.sold ? "Yes" : "No"}
                    </p>
                  </td>

                  <td>
                    <p
                      className="text-3xl text-red-500 cursor-pointer"
                      onClick={() => handleDetele(d._id)}
                    >
                      <MdDelete />
                    </p>
                  </td>
                </tr>
              );
            })}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCollections;
