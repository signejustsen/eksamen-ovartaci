# HTML and CSS Crash Exercise

This simple website needs help from a webdesigner that has insight in the following areas HTML and CSS. There are a number of HTML and CSS errors that need to be fixed. For further help to accomplish this exercise I've created a quick introduction to important HTML and CSS topics that can help you to solve this exercise.

## Instructions
1. Download this repository
2. Update all web files and folders according to file naming convention
3. Open index.html file with your text editor (eg.Brackets)
4. I've inserted HTML comments with instructions that you should try to solve
5. Repeat step 3 for all the other HTML files
6. Open style.css file with your text editor (eg. Brackets)
7. I've inserted CSS comments with instructions that you should try to solve

## File naming convention
To avoid broken links, naming conventions are important in web folders and filenames.

❌  Don't use any of these common characters when naming web files or folders:
- \# pound
- < left angle bracket
- $ dollar sign
- \+ plus sign
- % percent
- \> right angle bracket
- ! exclamation point
- ^ circumflex accent
- & ampersand
- \* asterisk
- ‘ single quotes
- | pipe
- { left bracket
- ? question mark
- “ double quotes
- = equal sign
- } right bracket
- / forward slash
- : colon
- \ back slash
- blank spaces
- @ at sign

Don’t start or end your filename with a space, period, hyphen, or underline.\
Keep your filenames to a reasonable length and be sure they are under 31 characters.\
Blank spaces are replaced by %20 by the browser. Which makes it harder to read if shared.\
Write always your filenames and folders with lowercase.

### Acceptable Characters
- \- hyphen
- _ underscore

### Examples
Best practices for web **file** naming.

- **product_catalog.html**
- **user-category.php**
- **log_out_user_profile.php**

Best practices for web **folder** naming.
- **small_images**
- **brand-characters**
- **product_portfolio_images**

## Absolute path
Absolute paths contain a complete **URL**, which includes a protocol, the website's domain name and possibly a specific file, subfolder, or page name. 
### For example: ###

```html
<a href="https://startlearning.dk/storytelling/images/background-image.jpg/">Storytelling</a>
```
OR
```html
<link rel="stylesheet" href="https://startlearning.dk/storytelling/css/style.css">
```

## Relative path
Relative link only includes the name of a specific file or page, which is relative, to the current path. If you keep all of your website's files in a single directory, you can establish links between pages as follows: 
### For example: ###

```html
<link rel="stylesheet" href="css/style.css">
```
OR
```html
<a href="images/background-image.jpg/">Storytelling</a>
```
## Stylesheets
There are three ways of inserting a style sheet:

- **External CSS**
- **Internal CSS**
- **Inline CSS**

Example with **External CSS**
```HTML
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
```
Example with **Internal CSS**
```HTML
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
```
Example with **Inline CSS**
```HTML
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

## HTML Attributes
An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag. All attributes are made up of two parts − a name and a value. \
The four core attributes that can be used on the majority of HTML elements (although not all) are: \

- **id**
- **title**
- **class**
- **style**

**id** attribute defines an identifier (ID) which must be unique in the whole Web-document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
```html
<p id ="footer-text">This para explains what is HTML</p>
```
**alt, src, class** are attributes that can be applied on the img HTML tag
```html
<img class ="images" src="img/thumb-1.jpg" alt="thumb-image">
```
**title** attribute contains text representing advisory information related to the tag HTML element it belongs to.
```html
<h3 title = "Hello HTML!">Titled Heading Tag Example</h3>
```
**type, id, name, required and placeholder** are attributes that can be applied on the input HTML tag
```html
<form>
  <input type="text" id="username" name="username" placeholder="Type your username" required>
</form>
```

## HTML Forms
An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### Here is an demo of a HTML Form: ###
![system schema](https://i2.wp.com/www.tutorialbrain.com/wp-content/uploads/2019/01/HTML-Form.jpg?fit=1920%2C1080&ssl=1 )

### Here are the corresponding HTML tag elements for the HTML formula above ###

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
<body>

<h2>HTML Forms</h2>

  <form>
    <label for="fname">First Name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last Name:</label><br>
    <input type="text" id="lname" name="lname"><br>
    <label for="dob">Date of Birth:</label><br>
    <input type="date" id="dob" name="dob"><br>
    <label for="mail">Email id:</label><br>
    <input type="email" id="mail" name="mail"><br>
    <label for="mobil">Mobil Number:</label><br>
    <input type="number" id="mobil" name="mobil"><br>
    <input type="submit" value="SUBMIT">
    <input type="reset" value="RESET">
  </form>
</body>
</html>
```
