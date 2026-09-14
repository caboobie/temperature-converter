# Temperature Converter

A simple temperature converter built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries.

![Temperature converter screenshot](screenshot.png)

## Features

- Convert between Celsius, Fahrenheit, and Kelvin
- Six one-click conversion buttons (C→F, C→K, F→C, F→K, K→C, K→F)
- Input validation for non-numeric values
- Physical validation — rejects temperatures below absolute zero (-273.15°C / -459.67°F / 0 K)

## Tech

- HTML5
- CSS Grid & Flexbox
- Vanilla JavaScript (DOM manipulation, event listeners, no frameworks)

## What I learned

- Structuring conversion logic around a common "middle" unit (Celsius) instead of writing a separate formula for every possible pair — fewer formulas, fewer places for bugs to hide
- Validating input against real-world physical constraints, not just checking it's a valid number
- Recognizing when a feature (like keyboard shortcuts) doesn't actually fit a project, rather than adding it just because a previous project had it

## Running it

Clone the repo and open `index.html` in your browser — no build steps or dependencies required.

\`\`\`
git clone https://github.com/caboobie/temp-converter.git
\`\`\`