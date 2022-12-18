import React from "react";
import "./tenfuse.css";
const Tenfuse = () => {
  function sortNumber() {
    let arr = [];
    let inp = "1 7 2 3 11 9 30 19 21";
    arr = inp.split(" "); // [1,7,2,3,11,9,30,19,21]
    arr.sort(function (a, b) {
      return a - b;
    }); // [1,2,3,7,9,11,19,21,30]
    return arr.join(" "); // 1 2 3 7 9 11 19 21 30
  }

  function convertDateTime() {
    const timeString = "07:05:45 PM";
    const [time, modifier] = timeString.split(" "); // แยกค่าเวลาออกจากหน่วยเวลา ['12:01:00','PM']
    let [hours, minutes, second] = time.split(":"); // ทำการแยกชั่วโมงกับนาที ['12','01','00']
    let ans = 0;
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      if (parseInt(hours) < 12) {
        hours = parseInt(hours) + 12; // ถ้าเป็น PM จะให้ +12 เนื่องจากเป็น 24 hour format
      }
    }
    ans = `${hours}:${minutes}:${second}`; //19:05:45
    return ans;
  }

  return (
    <>
      <div>
        <div>
          <h4>ข้อที่ 1</h4>
          <p>Input : 1 7 2 3 11 9 30 19 21</p>
          <p>Output : {sortNumber()}</p>
        </div>
        <div>
          <h4>ข้อที่ 2</h4>
          <p>Input : 12:01:00 PM</p>
          <p>Output : {convertDateTime()}</p>
        </div>
        <div>
          <h4>ข้อที่ 6 ตอบ 11</h4>
        </div>
      </div>
    </>
  );
};

export default Tenfuse;
