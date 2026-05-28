###### **Items to add to my JavaScript Reference Guide**



* JavaScript equivalent to shorthand CSS. Example - Yes you can — here's the JavaScript equivalent of shorthand CSS:

shopTitle.style.cssText = "color: red; font-size: 48px; font-weight: bold;";

cssText lets you write multiple styles in one line using the same syntax as CSS. It's the closest JavaScript equivalent to CSS shorthand like border: 2px solid black
* The get/set pattern is universal in JavaScript:

Method							Action
getAttribute("alt")					Reads the attribute value
setAttribute("alt", "new value")		Changes the attribute value
removeAttribute("alt")				Removes the attribute entirely

* <li data-price="12">   <!-- stores price data on the element -->
<li data-category="vegetarian">   <!-- you could store anything -->
<li data-id="001">   <!-- common for database IDs -->

data-price is called a data attribute — a special HTML feature that lets you store custom data directly on an element. The naming convention is always data- followed by your chosen name. It's not just for JavaScript to select — it's for storing extra information on an element that doesn't affect how it looks but JavaScript can read it. You'll use data attributes constantly in real projects.

* DOM vs BOM distinctions

DOM											BOM

What it controls: The page content				The browser itself

Top level object: document						window

Examples: querySelector, createElement			location, history, navigator

* Window vs screen — important distinction:

What it measures

window.innerWidth	The browser viewport — the visible page area

screen.width			The physical monitor resolution

* Best practices for writing and testing alerts, prompts, etc

The rule:

Situation										Where to write it

Code that fires immediately on load				Be careful — dialogs will block the page

Code that fires on a user action					Safe in VS Code — it waits for the trigger

