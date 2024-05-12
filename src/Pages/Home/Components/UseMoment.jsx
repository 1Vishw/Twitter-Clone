import moment from 'moment/moment'
export const getCurrenetTimeStamp = (timestamp) => {
    return moment().format(timestamp);  // May 12, 2024 11:09 AM
}