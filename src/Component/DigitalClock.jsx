import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours24 = time.getHours();
  const hours = hours24 % 12 || 12;
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const ampm = hours24 >= 12 ? "PM" : "AM";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[time.getDay()];
  const monthName = months[time.getMonth()];
  const date = time.getDate();
  const year = time.getFullYear();

  // Greeting
  let greeting = "Good Morning ☀️";

  if (hours24 >= 12 && hours24 < 17) {
    greeting = "Good Afternoon 🌤️";
  } else if (hours24 >= 17 && hours24 < 21) {
    greeting = "Good Evening 🌆";
  } else if (hours24 >= 21 || hours24 < 5) {
    greeting = "Good Night 🌙";
  }

  // Seconds progress
  const secondProgress = (time.getSeconds() / 60) * 100;

  // Day progress
  const totalSeconds =
    hours24 * 3600 +
    time.getMinutes() * 60 +
    time.getSeconds();

  const dayProgress = (totalSeconds / 86400) * 100;

  return (
    <div className="page">

      {/* Background Decorations */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="smallDot dot1"></div>
      <div className="smallDot dot2"></div>

      <div className="clockBox">

        {/* Header */}
        <div className="header">

          <div>
            <span className="tiny">
              TIME CAPSULE / 01
            </span>

            <h1>Today.</h1>
          </div>

          <div className="live">
            <span></span>
            LIVE
          </div>

        </div>

        {/* Main Clock */}
        <div className="clockArea">

          <div className="ring">

            <svg
              className="progressCircle"
              viewBox="0 0 220 220"
            >
              <circle
                cx="110"
                cy="110"
                r="100"
                className="circleBackground"
              />

              <circle
                cx="110"
                cy="110"
                r="100"
                className="circleProgress"
                style={{
                  strokeDashoffset:
                    628 -
                    (628 * secondProgress) / 100,
                }}
              />
            </svg>

            <div className="clock">

              <div className="time">
                <span>{String(hours).padStart(2, "0")}</span>
                <b>:</b>
                <span>{minutes}</span>
              </div>

              <div className="seconds">
                {seconds} SEC
              </div>

              <div className="ampm">
                {ampm}
              </div>

            </div>

          </div>

        </div>

        {/* Greeting */}
        <div className="greeting">
          <span>{greeting}</span>
          <strong>{dayName}</strong>
        </div>

        {/* Date */}
        <div className="dateCard">

          <div className="dateNumber">
            {String(date).padStart(2, "0")}
          </div>

          <div className="dateInfo">
            <span>{monthName}</span>
            <strong>{year}</strong>
          </div>

          <div className="calendarIcon">
            ✦
          </div>

        </div>

        {/* Day Progress */}
        <div className="daySection">

          <div className="dayLabels">
            <span>DAY PROGRESS</span>
            <span>{dayProgress.toFixed(1)}%</span>
          </div>

          <div className="dayBar">
            <div
              className="dayFill"
              style={{
                width: `${dayProgress}%`,
              }}
            ></div>
          </div>

        </div>

        {/* Footer */}
        <div className="footer">

          <span>EVERY SECOND COUNTS</span>

          <div className="footerLine"></div>

          <span>24 / 7</span>

        </div>

      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* PAGE */

        .page {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          position: relative;
          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #f9fcff,
              #ffffff,
              #f8f5ff
            );
        }

        /* BACKGROUND */

        .shape {
          position: absolute;

          border-radius: 50%;

          filter: blur(2px);

          opacity: .6;
        }

        .shape1 {
          width: 300px;
          height: 300px;

          background: #e8f5ff;

          left: -130px;
          top: -100px;
        }

        .shape2 {
          width: 260px;
          height: 260px;

          background: #f1eaff;

          right: -100px;
          bottom: -90px;
        }

        .smallDot {
          position: absolute;

          width: 14px;
          height: 14px;

          border-radius: 50%;

          background: #dbeaf3;
        }

        .dot1 {
          top: 20%;
          right: 18%;
        }

        .dot2 {
          bottom: 18%;
          left: 16%;
        }

        /* CLOCK BOX */

        .clockBox {
          width: 420px;

          padding: 30px;

          position: relative;
          z-index: 2;

          background: rgba(255,255,255,.9);

          border: 1px solid #e7edf2;

          border-radius: 32px;

          box-shadow:
            0 30px 80px
            rgba(70,90,110,.13);

          backdrop-filter: blur(15px);

          animation: appear .7s ease;
        }

        @keyframes appear {

          from {
            opacity: 0;
            transform: translateY(25px) scale(.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }

        /* HEADER */

        .header {
          display: flex;

          justify-content: space-between;

          align-items: flex-start;
        }

        .tiny {
          color: #a3afb8;

          font-size: 7px;

          letter-spacing: 3px;
        }

        .header h1 {
          margin: 8px 0 0;

          color: #304453;

          font-size: 28px;

          letter-spacing: -1px;
        }

        /* LIVE */

        .live {
          display: flex;

          align-items: center;

          gap: 6px;

          padding: 7px 10px;

          border-radius: 20px;

          background: #f1faf5;

          color: #70a989;

          font-size: 6px;

          letter-spacing: 1px;
        }

        .live span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #70bf91;

          animation: blink 1.2s infinite;
        }

        @keyframes blink {

          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: .25;
          }

        }

        /* CLOCK AREA */

        .clockArea {
          display: flex;

          justify-content: center;

          margin: 30px 0 20px;
        }

        .ring {
          width: 240px;
          height: 240px;

          position: relative;

          display: flex;

          align-items: center;
          justify-content: center;
        }

        /* SVG */

        .progressCircle {
          width: 240px;
          height: 240px;

          position: absolute;

          transform: rotate(-90deg);
        }

        .circleBackground {
          fill: none;

          stroke: #edf2f5;

          stroke-width: 5;
        }

        .circleProgress {
          fill: none;

          stroke: #88a9bd;

          stroke-width: 5;

          stroke-linecap: round;

          stroke-dasharray: 628;

          transition:
            stroke-dashoffset .3s linear;
        }

        /* CLOCK */

        .clock {
          width: 190px;
          height: 190px;

          display: flex;

          flex-direction: column;

          justify-content: center;
          align-items: center;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              #f8fbfd,
              #ffffff
            );

          border: 1px solid #e9eef2;

          box-shadow:
            inset 0 0 25px
            rgba(100,130,150,.05),

            0 10px 30px
            rgba(70,90,110,.08);
        }

        /* TIME */

        .time {
          display: flex;

          align-items: center;

          color: #2e4252;

          font-size: 43px;

          font-weight: 600;

          letter-spacing: -2px;
        }

        .time b {
          margin: 0 3px;

          color: #91aabb;

          animation: colon 1s infinite;
        }

        @keyframes colon {

          0%, 45% {
            opacity: 1;
          }

          50%, 100% {
            opacity: .2;
          }

        }

        .seconds {
          margin-top: 5px;

          color: #9ba9b2;

          font-size: 7px;

          letter-spacing: 2px;
        }

        .ampm {
          margin-top: 9px;

          padding: 4px 9px;

          border-radius: 8px;

          background: #edf5fa;

          color: #7594a9;

          font-size: 7px;

          font-weight: bold;
        }

        /* GREETING */

        .greeting {
          display: flex;

          justify-content: space-between;

          align-items: center;

          padding: 15px 3px;

          border-top: 1px solid #edf0f2;

          border-bottom: 1px solid #edf0f2;
        }

        .greeting span {
          color: #8999a5;

          font-size: 9px;
        }

        .greeting strong {
          color: #526879;

          font-size: 11px;
        }

        /* DATE */

        .dateCard {
          margin-top: 15px;

          padding: 14px 16px;

          display: flex;

          align-items: center;

          gap: 12px;

          border-radius: 16px;

          background: #fafcfd;

          border: 1px solid #e9eef1;
        }

        .dateNumber {
          color: #7898ad;

          font-size: 25px;

          font-weight: 600;
        }

        .dateInfo {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .dateInfo span {
          color: #607485;

          font-size: 10px;

          font-weight: bold;
        }

        .dateInfo strong {
          color: #a2adb5;

          font-size: 7px;

          letter-spacing: 1px;
        }

        .calendarIcon {
          margin-left: auto;

          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #eef6fb;

          color: #83a3b7;

          font-size: 14px;
        }

        /* DAY PROGRESS */

        .daySection {
          margin-top: 18px;
        }

        .dayLabels {
          display: flex;

          justify-content: space-between;

          margin-bottom: 7px;

          color: #a3adb5;

          font-size: 6px;

          letter-spacing: 1.5px;
        }

        .dayBar {
          height: 5px;

          overflow: hidden;

          border-radius: 10px;

          background: #edf1f3;
        }

        .dayFill {
          height: 100%;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #b6d3e3,
              #8caabd
            );

          transition: width 1s linear;
        }

        /* FOOTER */

        .footer {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-top: 22px;

          color: #a6b0b8;

          font-size: 6px;

          letter-spacing: 1.5px;
        }

        .footerLine {
          flex: 1;

          height: 1px;

          background: #e8edf0;
        }

        /* MOBILE */

        @media (max-width: 500px) {

          .clockBox {
            width: 92%;

            padding: 22px;
          }

          .ring {
            width: 215px;
            height: 215px;
          }

          .progressCircle {
            width: 215px;
            height: 215px;
          }

          .clock {
            width: 170px;
            height: 170px;
          }

          .time {
            font-size: 36px;
          }

        }

      `}</style>

    </div>
  );
}

export default DigitalClock;