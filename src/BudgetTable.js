import React, { useState } from 'react';

const categories = [
  'Groceries',
  'Restaurants & Bars',
  'Transport',
  'Fun',
  'Internet',
  'Home',
  'Shopping',
  'Travel'
];

function BudgetTable() {
  const [rows, setRows] = useState([
    { category: '', budget: '', spent: '' }
    // Add existing rows or keep an initial row if needed
  ]);

  const addRow = () => {
    const newRow = { category: '', budget: '', spent: '' };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = name === 'budget' ? formatBudgetInput(value) : value;
    setRows(updatedRows);
  };

  const formatBudgetInput = (value) => {
    const cleanValue = value.replace(/\$/g, ''); // Remove existing '$' signs
    return `$${cleanValue}`; // Add '$' sign at the beginning
  };

  return (
    <div className="tableWrapper">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Category</th>
            <th>Budget</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <select
                  name="category"
                  value={row.category}
                  onChange={(e) => handleInputChange(e, index)}
                >
                  <option value="">Select Category</option>
                  {categories.map((category, idx) => (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="budget"
                  value={row.budget}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="spent"
                  value={row.spent}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>+ Add Row</button>
    </div>
  );
}

export default BudgetTable;
