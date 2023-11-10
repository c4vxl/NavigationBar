# Navigation Bar
This is a custom navigation bar created using HTML, CSS, and JavaScript. The navigation bar features responsive design, a dropdown menu, and a toggle button for smaller screens.

## Features

- Responsive design with media queries for both desktop and mobile screens.
- Dropdown menu with expandable links.
- Navigation bar appearance changes when the user scrolls down the page.
- Toggle button for mobile view to show/hide the navigation links.

## Usage

1. You have to clone the files `style.css` and `script.js` in your project
2. Import them in your html file:
```html
<link rel="stylesheet" href="style.css">
<script defer src="script.js"></script>
```

3. The last step will be to add the html code of the navigation bar to your project:
```html
    <nav class="navbar">
        <div class="navbar__logo__container">
            <img src="" alt="" class="navbar__logo"> <!--Add your logo-->
        </div>

        <ul class="navbar__links">
            
        </ul>

        <div class="navbar__button">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
```

4. Add links and dropdowns:
- To add a link to the navigation bar add the following code inside the `navbar__links`-container:
```html
<li class="link"><a href="#">Link</a></li>
```

- To add a dropdown to the navigation bar add the following code inside the `navbar__links`-container:
```html
<li class="dropdown">
    <a class="dropdown__title">Dropdown</a>
    <ul class="dropdown__content">
        <li class="link"><a href="">Link 1</a></li>
        <li class="link"><a href="">Link 2</a></li>
        <li class="link"><a href="">Link 3</a></li>
    </ul>
</li>
```




## Customization

You can customize the navigation bar appearance by modifying the CSS variables in the `style.css` file. Here are some of the variables you can adjust:

- `color`: _Text color_
- `bg-color`: _Background color_
- `logo-size`: _Size of the logo_
- `logo-transition-time`: _Logo transition time_
- `links-gap`: _Gap between links_
- `link-hover-transition-time`: _Link hover transition time_
- `link-hover-underline-height`: _Link hover underline height_
- `link-hover-color`: _Link hover color_
- `dropdown-content-bg-color`: _Dropdown content background color_
- `phone-btn-height`: _Phone button height_
- `phone-btn-width`: _Phone button width_
- `phone-btn-row-height`: _Phone button row height_
- `phone-btn-transition-time`: _Phone button transition time_

There is also the option to overwrite this variables when the user has scrolled down on the page:
```css
.navbar.scrolled {
    /* Overwrite variables */   
}
```

Feel free to experiment with these variables to match the navigation bar's style to your website's design.


## License

This project is licensed under the [MIT License](LICENSE).

---

## Developer
This Project was Developed by [c4vxl](https://c4vxl.de)
