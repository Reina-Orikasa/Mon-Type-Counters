function findCounter() {
  let countersToCounters = document.getElementById('countersToCounters');
  countersToCounters.innerHTML = '';
  let userType = document.getElementById('userType').value.toLowerCase().trim();

  userType = userType.replace(/[^A-Za-z]+/g, '');
  // takes the first letter and capitalizes it
  let capitalizedUserType =
    userType.charAt(0).toUpperCase() + userType.slice(1);

  let counterFound;
  let [goodType, backgroundColor] = calculateCounter(capitalizedUserType);
  setBackgroundColor(backgroundColor);

  if (goodType != 'Error.') {
    counterFound = true;
  } else {
    counterFound = false;
  }

  // Displays the counter on the website. If there is none then display
  // default message - no counter found.
  let answer = document.getElementById('counters');

  let arrayOfCounters = goodType.split(',');
  if (counterFound) {
    arrayOfCounters.forEach((el) => {
      countersToCounters.innerHTML +=
        '<div class="targetType">' +
        '<b>' +
        el +
        '</b> is weak against: ' +
        '<p><b>' +
        calculateCounter(el)[0] +
        '</b></p></div>';
    });

    answer.innerHTML =
      '<hr class="mb-4" /><strong>' +
      capitalizedUserType +
      '</strong>' +
      ' is weak against: ' +
      '<br>' +
      '<strong>' +
      goodType +
      '</strong> <hr class="mt-4" />';
  } else {
    answer.innerHTML = goodType + ' Please check type spelling.';
  }
}

// takes a color and sets the background to it
function setBackgroundColor(color) {
  document.body.style.transition = 'all 0.8s';
  document.body.style.backgroundColor = color;
}

// takes a parameter type, calculates the type counters
// and returns the counters and the background color type
// of the parameter.
function calculateCounter(type) {
  let enteredType;
  let backgroundColor;
  type = type.trim();
  // Takes the type the user wants to counter and gives the type counters
  switch (type) {
    case 'Grass':
      enteredType = 'Fire, Ice, Poison, Flying, Bug';
      backgroundColor = '#78C850';
      break;
    case 'Fire':
      enteredType = 'Water, Ground, Rock';
      backgroundColor = '#F08030';
      break;
    case 'Water':
      enteredType = 'Electric, Grass';
      backgroundColor = '#6890F0';
      break;
    case 'Electric':
      enteredType = 'Ground';
      backgroundColor = '#F8D030';
      break;
    case 'Normal':
      enteredType = 'Fighting';
      backgroundColor = '#A8A878';
      break;
    case 'Ice':
      enteredType = 'Fire, Fighting, Rock, Steel';
      backgroundColor = '#98D8D8';
      break;
    case 'Fighting':
      enteredType = 'Flying, Psychic, Fairy';
      backgroundColor = '#C03028';
      break;
    case 'Poison':
      enteredType = 'Ground, Psychic';
      backgroundColor = '#A040A0';
      break;
    case 'Ground':
      enteredType = 'Water, Grass, Ice';
      backgroundColor = '#E0C068';
      break;
    case 'Flying':
      enteredType = 'Electric, Ice, Rock';
      backgroundColor = '#A890F0';
      break;
    case 'Psychic':
      enteredType = 'Bug, Ghost, Dark';
      backgroundColor = '#F85888';
      break;
    case 'Bug':
      enteredType = 'Fire, Flying, Rock';
      backgroundColor = '#A8B820';
      break;
    case 'Rock':
      enteredType = 'Water, Grass, Fighting, Ground, Steel';
      backgroundColor = '#B8A038';
      break;
    case 'Ghost':
      enteredType = 'Ghost, Dark';
      backgroundColor = '#705898';
      break;
    case 'Dragon':
      enteredType = 'Ice, Dragon, Fairy';
      backgroundColor = '#7038F8';
      break;
    case 'Dark':
      enteredType = 'Bug, Fighting, Fairy';
      backgroundColor = '#705848';
      break;
    case 'Steel':
      enteredType = 'Fire, Fighting, Ground';
      backgroundColor = '#B8B8D0';
      break;
    case 'Fairy':
      enteredType = 'Poison, Steel';
      backgroundColor = '#EE99AC';
      break;
    default:
      enteredType = 'Error.';
      backgroundColor = 'white';
  }
  return [enteredType, backgroundColor];
}

// Enter will click the button
let input = document.getElementById('userType');
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('submit').click();
    document.getElementById('userType').blur();
  }
});

// typewriterjs | MIT License
// https://github.com/tameemsafi/typewriterjs/blob/master/LICENSE
var app = document.getElementById('typer');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString('grass')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Flying!?')
  .pauseFor(1000)
  .deleteAll()
  .typeString('fAiRy')
  .pauseFor(1000)
  .start();

// autoComplete.js || Apache License 2.0
// https://github.com/TarekRaafat/autoComplete.js/blob/master/LICENSE

const autoCompleteJS = new autoComplete({
  selector: '#userType',
  placeHolder: 'Enter Type',
  data: {
    src: [
      'Normal',
      'Fire',
      'Fighting',
      'Water',
      'Flying',
      'Grass',
      'Poison',
      'Electric',
      'Ground',
      'Psychic',
      'Rock',
      'Ice',
      'Bug',
      'Dragon',
      'Ghost',
      'Dark',
      'Steel',
      'Fairy',
    ],
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement('div');
        // Add class to the created element
        message.setAttribute('class', 'no_result');
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    element: (item, data) => {
      item.classList.add = 'text-purple-400';
    },
    highlight: {
      render: true,
    },
  },
  submit: true,
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

document
  .querySelector('#userType')
  .addEventListener('selection', function (event) {
    let input = document.getElementById('userType');
    // "event.detail" carries the autoComplete.js "feedback" object
    document.getElementById('submit').click();
    input.value = '';
    input.blur();
  });

function clearInput() {
  document.getElementById('userType').value = '';
}
