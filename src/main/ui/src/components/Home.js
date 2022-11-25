import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const[worksheets, setWorksheets] = useState([]);

    useEffect((worksheets, index) => {
        loadWorksheets();
    }, [worksheets]);
    const loadWorksheets = async () => {
        const result = await axios.get("http://localhost:8080/worksheet/getAll");
        console.log(result.data);
        setWorksheets(result.data);
    }
    return(
        <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Color</th>
              <th scope="col">Multi color</th>
              <th scope="col">Slice color</th>
              <th scope="col">Slice width</th>
              <th scope="col">Width</th>
              <th scope="col">Thickness</th>
              <th scope="col">Gem</th>
              <th scope="col">Gem number</th>
            </tr>
          </thead>
          <tbody>
            {worksheets.map((worksheet, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{worksheet.type_name}</td>
                <td>{worksheet.color}</td>
                <td>{worksheet.multi_color}</td>
                <td>{worksheet.slice_color}</td>
                <td>{worksheet.slice_width}</td>
                <td>{worksheet.thickness}</td>
                <td>{worksheet.gem}</td>
                <td>{worksheet.gem_number}</td>
                <td>
                  {/* <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}