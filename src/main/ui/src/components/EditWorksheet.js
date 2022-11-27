import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditWorksheet() {

    let navigate = useNavigate();
    const {id} = useParams();
    const[worksheet, setWorksheet] = useState({
        type_name:"",
        color:"",
        slice_width:"",
        width:"",
        thickness:"",
        gem:"",
        gem_number:"",
    });
    const {type_name, color, slice_width, width,
        thickness, gem, gem_number} = worksheet;

    const onInputChange = (e) =>{
        setWorksheet({ ...worksheet, [e.target.name] : e.target.value});
    };
    useEffect(() => {
        loadWorksheet();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/worksheet/worksheet/${id}`, worksheet);
        navigate("/");
    }
    const loadWorksheet = async () => {
        const result = await axios.get(`http://localhost:8080/worksheet/worksheet/${id}`);
        setWorksheet(result.data);
    }

  return (
    <div className='container'>
        Add Worksheet Form
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Worksheet</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='RingType' className='form-label'>
                            Ring type:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter type:'
                        name="type_name"
                        value={type_name}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Color' className='form-label'>
                            Color:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter color:'
                        name='color'
                        value={color}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='SliceWidth' className='form-label'>
                            Slice width:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter the width of the slices:'
                        name='slice_width'
                        value={slice_width}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Width' className='form-label'>
                            Width:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter width:'
                        name='width'
                        value={width}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Thickness' className='form-label'>
                            Thickness:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter thickness:'
                        name='thickness'
                        value={thickness}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Gem' className='form-label'>
                            Gem settings:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter gem settings:'
                        name='gem'
                        value={gem}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='gem_number' className='form-label'>
                            Gem number:
                        </label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder='Enter the numbers of gem:'
                        name='gem_number'
                        value={gem_number}
                        onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button type='submit' className="btn btn-outline-primary mx-2">
                        Edit
                    </button>
                    <Link className="btn btn-danger mx-2"
                    to="/">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
      )
    
   
}
