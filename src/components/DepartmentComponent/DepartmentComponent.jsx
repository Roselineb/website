import React from 'react'
import './DepartmentComponent.css'

function DepartmentComponent() {
  return (
    <div className='dept-pg-content'>
      <h1>Departments</h1>  

      <table>
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AIDS</td>
            <td>120</td>
          </tr>
          <tr>
            <td>ECE</td>
            <td>300</td>
          </tr>
          <tr>
            <td>CSE</td>
            <td>180</td>
          </tr>
          <tr>
            <td>Medical Electronics</td>
            <td>110</td>
          </tr>
          <tr>
            <td>BME</td>
            <td>110</td>
          </tr>
          <tr>
            <td>EIE</td>
            <td>90</td>
          </tr>
          <tr>
            <td>AIML</td>
            <td>110</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DepartmentComponent