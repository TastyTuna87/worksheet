import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const[worksheets, setWorksheets] = useState([]);
    const {id} = useParams();

    useEffect((worksheets, index) => {
        loadWorksheets();
    }, [worksheets]);
    
    const loadWorksheets = async () => {
        const result = await axios.get("http://localhost:8080/worksheet/getAll");
        setWorksheets(result.data);
    }
    const deleteWorksheet = async (id) => {
        await axios.delete(`http://localhost:8080/worksheet/worksheet/${id}`);
        loadWorksheets();
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
              <th scope="col">Width</th>
              <th scope="col">Gem setting</th>
            </tr>
          </thead>
          <tbody>
            {worksheets.map((worksheet) => (
              <tr key={worksheet.id}>
                <th scope="row">
                  {worksheet.id}
                </th>
                <td>{worksheet.type_name}</td>
                <td>{worksheet.color}</td>
                <td>{worksheet.width}</td>
                <td>{worksheet.gem}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/view/${worksheet.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/${worksheet.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteWorksheet(worksheet.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}