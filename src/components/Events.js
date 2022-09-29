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
            Come kickstart mountain of glory with us and experience the
            immeasurable glory our our Living Most High.
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
            Join us on the second day of mountain of glory for an awesome
            experience
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
            It's the third day of mountain of glory, don't miss it for anything
            because your breakthrough awaits you.
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
            Come and let's praise and thank the Almighty for His guidance and
            blessings.
          </div>

          <div className="event-timing">07:30am - 10:00am</div>
        </div>
      </div>
    </div>
  );
}

export default Events;
