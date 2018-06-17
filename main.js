var inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

// Array.prototype.filter method in javascript
// filter the list of inventors those who were born in 1500 's

var fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year <= 1599
);
console.table(fifteen);

//Array.prototype.map
// gives us the name of the invtory first and last names
var invertorName = inventors.map(
  inventor => inventor.first + " " + inventor.last
);
console.table(invertorName);

// Array.prototype.sort();
//sort the inventors oldest to youngest

// var older = inventors.sort(function (a, b) {

//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

var older = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(older);

// Array.prototype.reduce);
// How many year did the inventors live;

var totalYear = inventors.reduce(function(total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYear);
console.log(inventors.length);

// sort the inventors by years live

var older = inventors.sort(function(a, b) {
  var firstGuy = a.passed - a.year;
  var lastGuy = b.passed - b.year;
  return firstGuy > lastGuy ? -1 : 1;
});

console.table(older);

// sort excersise
// sort the people alphbatically by the last name

var alpha = people.sort(function(lastOne, nextOne) {
  var [aFirst, aLast] = lastOne.split(" ,");
  var [bFirst, bLast] = nextOne.split(" ,");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// reduce Excersise
//sum up the inctances each of these

var eachItemLength = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(eachItemLength);
