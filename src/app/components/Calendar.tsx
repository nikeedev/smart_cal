import React from 'react'
import '../styles/Calendar.css'

const get_current_month_name = () => {
  switch (new Date().getMonth()) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      break;
  }
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Calendar() {
  let current_month = get_current_month_name();


  return (
    <>
      <p id="month">{current_month}</p>
      <div className="dates">
        <table>
          <tr>
            {
              days.map(day =>
                <th key={"day-" + day} style={{ color: "#ebdbb2" }}>{day}</th>
              )
            }
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr>
            <td></td>
          </tr>
          
          <tr>
            <td></td>
          </tr>
          
          <tr>
            <td></td>
          </tr>
        
        </table>
      </div>
    </>
  )
}
