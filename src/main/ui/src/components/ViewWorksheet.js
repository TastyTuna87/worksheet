import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewWorksheet() {
    const[worksheet, setWorksheet] = useState({
        type_name:"",
        color:"",
        slice_width:"",
        width:"",
        thickness:"",
        gem:"",
        gem_number:"",
    });

  const { id } = useParams();

  useEffect(() => {
    loadWorksheet();
}, []);

const loadWorksheet = async () => {
    const result = await axios.get(`http://localhost:8080/worksheet/worksheet/${id}`);
    setWorksheet(result.data);
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Worksheet Details</h2>

          <div className="card">
            <div className="card-header">
              Details of worksheet id : {worksheet.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {worksheet.type_name}
                </li>
                <li className="list-group-item">
                  <b>Color: </b>
                  {worksheet.color}
                </li>
                <li className="list-group-item">
                  <b>Slice width: </b>
                  {worksheet.slice_width}
                </li>
                <li className="list-group-item">
                  <b>Width: </b>
                  {worksheet.width}
                </li>
                <li className="list-group-item">
                  <b>Thickness: </b>
                  {worksheet.thickness}
                </li>
                <li className="list-group-item">
                  <b>Gem setting: </b>
                  {worksheet.gem}
                </li>
                <li className="list-group-item">
                  <b>Gem number: </b>
                  {worksheet.gem_number}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}