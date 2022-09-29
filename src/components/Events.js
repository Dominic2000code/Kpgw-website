import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="event-container">
      <h3 className="year">2022</h3>

      <div className="event">
        <div className="event-left">
          <div className="event-date">
            <div className="date">5</div>
            <div className="month">Oct</div>
          </div>
        </div>
        <div className="event-right">
          <h3 className="event-title">Glory to Glory: Day 1</h3>

          <div className="event-description">
            It's our annual conference dubbed Mountain of Glory.It's going to be
            a moment of breakthrough with seasoned men and women of God. It'll
            be a powerful time in the presence of God. See you there.
          </div>

          <div className="event-timing">06:30pm - 09:00pm</div>
        </div>
      </div>

      <div className="event">
        <div className="event-left">
          <div className="event-date">
            <div className="date">6</div>
            <div className="month">Oct</div>
          </div>
        </div>
        <div className="event-right">
          <h3 className="event-title">Glory to Glory: Day 2</h3>

          <div className="event-description">
            It's our annual conference dubbed Mountain of Glory.It's going to be
            a moment of breakthrough with seasoned men and women of God. It'll
            be a powerful time in the presence of God. See you there.
          </div>

          <div className="event-timing">06:30pm - 09:00pm</div>
        </div>
      </div>

      <div className="event">
        <div className="event-left">
          <div className="event-date">
            <div className="date">7</div>
            <div className="month">Oct</div>
          </div>
        </div>
        <div className="event-right">
          <h3 className="event-title">Glory to Glory: Day 3</h3>

          <div className="event-description">
            It's our annual conference dubbed Mountain of Glory.It's going to be
            a moment of breakthrough with seasoned men and women of God. It'll
            be a powerful time in the presence of God. See you there.
          </div>

          <div className="event-timing">06:30pm - 09:00pm</div>
        </div>
      </div>

      <div className="event">
        <div className="event-left">
          <div className="event-date">
            <div className="date">9</div>
            <div className="month">Oct</div>
          </div>
        </div>
        <div className="event-right">
          <h3 className="event-title">Thanksgiving Sunday</h3>

          <div className="event-description">
            It's our annual conference dubbed Mountain of Glory.It's going to be
            a moment of breakthrough with seasoned men and women of God. It'll
            be a powerful time in the presence of God. See you there.
          </div>

          <div className="event-timing">07:30am - 10:00am</div>
        </div>
      </div>
    </div>
  );
}

export default Events;
