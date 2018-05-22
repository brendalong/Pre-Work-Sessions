// 1. Get the 'html' element using querySelector. Store it in a variable.
const htmlEl = document.querySelector('HTML')

    // a.) set the backroundColor to 'lightyellow'
      htmlEl.style.backgroundColor = 'lightyellow'

// 2. Get the 'section' element using querySelector. Store it in a variable.
const sectionEl = document.querySelector('section')

    // a.) Add a '1px dashed Black' border to the stored section
      sectionEl.style.border = '1px dashed Black'

    // b.) also give the section a width of '40%'
      sectionEl.style.width = '40%'

    // c.) give the main section a 'textalign' property of center
      sectionEl.style.textAlign = 'center'

    // d.) give the main section a cursor of 'crosshair'
      sectionEl.style.cursor = 'crosshair'

// 3.) FIRST ONE - Get the 'sloppyClassNames' element using getElementsByClassName. Store it in a variable. Remember that the DOM will bring back an array, use brackets to pick the right element
const classElOne = document.getElementsByClassName('sloppyClassNames')[0]

    // a.) add a 'backgroundColor' of tomato to the class 'sloppyClassNames'
    classElOne.style.backgroundColor = 'tomato'

// 4.) SECOND ONE - Get the 'sloppyClassNames' element using getElementsByClassName. Store it in a variable. See above instructions for dealing with this array
const classEltwo = document.getElementsByClassName('sloppyClassNames')[1]

    // a.) add a 'backgroundColor' of goldenrod to the class 'sloppyClassNames'
    classEltwo.style.backgroundColor = 'goldenrod'

// 5.) Get the 'listOfWords' element using getElementById. Store it in a variable.
const listofWordsEl = document.getElementById('listOfWords')
    // a.) add a border of '2px solid magenta' to the unorderlist
    listofWordsEl.style.border = '2px solid magenta'

    // b.) add a width of '40%'
    listofWordsEl.style.width = '40%'

// 6.) Get the 'li' elements using querySelectorAll. Store it in a variable. This returns a DOMString. We can perform methods on this DOMString as if it were an array. Here you should use a for loop to add a border of '0.5px dotted black' to each listItem.
const listItemsEl = document.querySelectorAll('li')
for (let i = 0; i < listItemsEl.length; i++) {
  let currentListitem = listItemsEl[i]
  currentListitem.style.border = '0.5px dotted black'
}