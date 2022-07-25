import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import './Table.css'

function Table({ cities }) {
  return (
    <div>
      <table className="table">
        <thead></thead>
        <tbody>
        {typeof cities === 'string' ? cities : cities.map((el) => (<tr key={uuidv4()}>
          <td>{el.foundationDate}</td>
          <td className="name-td">{el.name}</td>
          <td>{el.peopleAmmount}</td>
          <td>{el.distanceFromMoscow}</td>
        </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
