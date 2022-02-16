import React, {useState} from "react";
import Calendar from 'react-calendar'
import "./Calendar.css";
import 'react-calendar/dist/Calendar.css';


function isSameDay(a, b) {
  if (a.getDate() === b.getDate()) {
    return true;
  } else {
    return false
  }
}
const datesToAddContentTo = [new Date()];

function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return ' Today';
    }
  }
}

// const volleyballFakeData = [{id: "5", name: "Secret Saturday", date: "2/12/2022"}];

const VolleyballCalendar = () => {
  const [value, onChange] = useState(new Date());
  return <Calendar
    tileContent={tileContent}
    onChange={onChange}
  />
}

export default VolleyballCalendar;