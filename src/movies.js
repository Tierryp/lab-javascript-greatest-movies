// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SPmovies = moviesArray.filter((element) => {
    let isDrama = false;

    if (
      element.genre.includes("Drama") &&
      element.director === "Steven Spielberg"
    ) {
      isDrama = true;
    }

    return isDrama;
  });

  return SPmovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  const totalEquals = moviesArray.reduce((a, c) => {
    if (!c.score) {
      return a;
    }
    return a + c.score;
  }, 0);
  const averageEquals = totalEquals / moviesArray.length;
  const roundedAvg = averageEquals.toFixed(2);

  return Number(roundedAvg);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((e) => e.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let clone = [...moviesArray];
  return clone.sort((year1, year2) => {
    return year1.year - year2.year || year1.title.localeCompare(year2.title);
  });
  return clone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const alphabetOrder = moviesArray.map((element) => element.title).sort((a,b) => a.localeCompare(b));
  return alphabetOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    function htom(duration){
        let firstMethod = duration.split("h");
        let secondMethod = firstMethod[1].split("min");

        let hours = Number(firstMethod[0]);
        let mins = Number(secondMethod[0]);
        return hours * 60 + mins;
    }

  const solution = moviesArray.map(element => {

    return {
      ...element,
      duration: htom(element.duration)
    };
  })

 //   const solution = moviesArray.map((element => element)).filter(element =>{
 //      element.duration[0] < 10 
 //       element.duration[0] * 60 = totalNum  

//})
console.log(solution)
return solution
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
