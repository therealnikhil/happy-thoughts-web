import { useState, useEffect } from 'react'
import moment from 'moment'

const CountDown = () => {
  const [cd, setCd] = useState(
    moment.duration(moment('2021-01-01 00:00:00').diff(moment()))
  )

  useEffect(() => {
    let interval = setInterval(() => {
      setCd(moment.duration(moment('2021-01-01 00:00:00').diff(moment())))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-wrapper">
      <div className="countdown-box">
        <p className="countdown-value">{cd.months()}</p>
        <p className="countdown-label">Months</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{cd.days()}</p>
        <p className="countdown-label">Days</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{cd.hours()}</p>
        <p className="countdown-label">Hours</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{cd.minutes()}</p>
        <p className="countdown-label">Minutes</p>
      </div>
      <div className="countdown-box">
        <p className="countdown-value">{cd.seconds()}</p>
        <p className="countdown-label">Seconds</p>
      </div>
    </div>
  )
}

export default CountDown
