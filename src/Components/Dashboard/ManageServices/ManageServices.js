import { IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './ManageServices.css'

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://digma-server.herokuapp.com/services")
          .then((response) => response.json())
          .then((data) => {
            setServices(data);
          });
      }, [services]);

      function handleDelete(id, event) {
        fetch(`https://digma-server.herokuapp.com/deleteService/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              console.log("Delete Confirmed");
            }
          });
      }
    return (
        <div className="table-field">
        <table className="table mr-2">
          <thead style={{ width: "90%" }}>
            <tr className="bg-light ">
              <th scope="col">Service</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((obj) => (
              <tr className="text-black" key={obj._id}>
                <th scope="row">
                  
                  {obj.title}
                </th>
                <td>{obj.details} </td>
                <td>
                  <IconButton
                    onClick={() => {
                      handleDelete(obj._id);
                    }}
                    aria-label="delete"
                    className="text-danger"
                  >
                    <DeleteForeverIcon />
                    
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default ManageServices;