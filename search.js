const nonStopFlights = [{
    departure: 'Melbourne',
    arrival: 'Beijing'
}]

const oneStopFlights = [{
    departure: 'Melbourne',
    arrival: 'Guangzhou'
}, {
    departure: 'Guangzhou',
    arrival: 'Beijing'
}]

const twoStopsFlights = [{
    departure: 'Melbourne',
    arrival: 'Singapore'
}, {
    departure: 'Singapore',
    arrival: 'Guangzhou'
}, {
    departure: 'Guangzhou',
    arrival: 'Beijing'
}]

const threeStopsFlights = [{
    departure: 'Melbourne',
    arrival: 'Sydney'
}, {
    departure: 'Sydney',
    arrival: 'Singapore'

}, {
    departure: 'Singapore',
    arrival: 'Guangzhou'
}, {
    departure: 'Guangzhou',
    arrival: 'Beijing'
}]

function getStops(flights) {
    const stops = {
        1: 'non-stop',
        2: '1 stop',
    } [flights.length] || `${flights.length - 1} stops`;

    console.log(stops);
}

function getStops(flights) {
    var number = flights.length

    if (number === 1) {
        console.log('non-stop')
    } else {
        console.log(`${number-1} stop${number===2 ? '' : 's'}`)
    }
}

getStops(nonStopFlights);
// non-stop

getStops(oneStopFlights);
// 1 stop

getStops(twoStopsFlights);
// 2 stops

getStops(threeStopsFlights);
// 3 stops


//***********************************//


const o1 = {
    text: 'o1',
    fn: function () {
        return this.text
    }
}
const o2 = {
    text: 'o2',
    fn: function () {
        return o1.fn()
    }
}
const o3 = {
    text: 'o3',
    fn: function () {
        var fn = o1.fn
        return fn()
    }
}

console.log(o1.fn()) // o1
console.log(o2.fn()) // o1
console.log(o3.fn()) // undefind