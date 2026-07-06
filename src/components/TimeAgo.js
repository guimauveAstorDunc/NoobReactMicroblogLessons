import { useState, useEffect } from 'react';

const secondsTable = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['week', 60 * 60 * 24 * 7],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60]
];
const rtf = new Intl.RelativeTimeFormat(undefined, {numeric: 'auto'});

/* getTimeAgo(ISO timestamp)
 *  Gets the time in ISO 8601 specification,
 *  and RETURNS an array with:
 *      - a bestTime (i.e. the "4" in "4 minutes ago")
 *      - a bestUnit (i.e. the "minutes" in "4 minutes ago")
 *      - a bestInterval on which the timestamp should be updated (in seconds).
*/
function getTimeAgo(date) {
    // | oldMilliseconds - newMilliseconds | / 1000
    const seconds = Math.round((date.getTime() - new Date().getTime()) / 1000);
    const absSeconds = Math.abs(seconds);
    let bestUnit, bestTime, bestInterval;
    for (let [unit, unitSeconds] of secondsTable) {
        /* start at a year (working your way down to a minute)
            and the post was made  */
        if (absSeconds >= unitSeconds) {
            bestUnit = unit;
            bestTime = Math.round(seconds / unitSeconds);
            // max interval for a timestamp to be updated will be 24 hours
            bestInterval = Math.min(unitSeconds / 2, 60 * 60 * 24);
            break;
        }
    }
    /*
     * Edge Case:   Post was uploaded less than a minute ago.
     *              Therefore, use seconds.
    */
    if (!bestUnit) {
        bestUnit = 'second';
        bestTime = parseInt(seconds / 10) * 10;
        bestInterval = 10;
    }
    
    return [bestTime, bestUnit, bestInterval];
}

export default function TimeAgo({ isoDate }) {
    const date = new Date(Date.parse(isoDate));
    const [time, unit, interval] = getTimeAgo(date);
    const [, setUpdate] = useState(0);

    useEffect(() => {
        const timerId = setInterval(
            () => setUpdate(update => update + 1),
            interval * 1000
        );
        return () => clearInterval(timerId);
    }, [interval]);

    return (
        <span title={date.toString()}>{rtf.format(time, unit)}</span>
    );
}