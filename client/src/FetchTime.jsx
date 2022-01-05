import React, { useEffect, useState } from 'react';

const FetchTime = () => {
  let [currentTime, setCurrentTime] = useState("...loading...");

  useEffect(() => {
    let getTimeFromServer = async () => {
      try {
        let response = await fetch('/slow');
        let vals = await response.json();
        console.log(`FETCH TIME: call setCurrentTime(${vals.currentTime})`);
        return setCurrentTime(vals.currentTime);
      } catch (ex) {
        console.log(ex);
      }
    };

    console.log('FETCH TIME: Starting up the interval');
    let intervalId = setInterval(getTimeFromServer, 3000);

    return () => {
      console.log('FETCH TIME: Shutting down the interval');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>FETCH TIME: the current time is ({currentTime})</p>
    </div>
  );
};

export default FetchTime;
