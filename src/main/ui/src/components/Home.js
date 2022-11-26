import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Link, Button } from "@mui/material";

export default function Home() {
    const[worksheets, setWorksheets] = useState([]);

    useEffect((worksheets, index) => {
        loadWorksheets();
    }, [worksheets]);
    const loadWorksheets = async () => {
        const result = await axios.get("http://localhost:8080/worksheet/getAll");
        setWorksheets(result.data);
    }
    const deleteUser = async () => {

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
              <th scope="col">Slice width</th>
              <th scope="col">Width</th>
              <th scope="col">Thickness</th>
              <th scope="col">Gem setting</th>
              <th scope="col">Gem number</th>
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
                <td>{worksheet.slice_width}</td>
                <td>{worksheet.width}</td>
                <td>{worksheet.thickness}</td>
                <td>{worksheet.gem}</td>
                <td>{worksheet.gem_number}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewWorksheet/${worksheet.id}`}
                  >
                    View
                  </Link>
                  <Button
                    className="btn btn-outline-primary mx-2"
                    to={`/editWorksheet/${worksheet.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(worksheet.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    </div>
    );
}