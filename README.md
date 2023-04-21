<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
<form action="">
  <fieldset>
    <legend></legend>
    <div>
      <label for="name">Name</label>
      <input type="text">
    </div>
    <div><label for="surname">surname</label>
      <input type="text" id="name"></div>
      <div>
      <label for="birthday">birthday</label>
      <input type="datetime-local"> </div>
      <div><label for="Gender">Gender<input type="hidden"></label></div>
      <div><label for="Male">Male<input type="checkbox"></label></div>
      <div><label for="Female">Female<input type="checkbox"></label></div>
      <div><label for="Drive experience">Drive experience<input type="file"></label></div>
  </fieldset>
  <fieldset>
    <legend>contact</legend>
    <div><label for="email">email</label><input type="text"></div>
    <div><label for="phone">phone</label><input type="text"></div>
    <div><label for="address">address</label>
      <textarea id="address" cols="50" rows="10">

      </textarea>
  </fieldset>
  <fieldset>
    <legend>car info</legend>
    <div><label for="brand">brand</label><input type="file"></div>
    <div><label for="model">model</label><input type="file"></div>
    <div><label for="used">used</label><input type="checkbox"></div>
    <div><label for="Red">Red<input type="checkbox"></label></div>
    <div><label for="Black">Black<input type="checkbox"></label></div>
    <div><label for="Blue">Blue<input type="checkbox"></label></div>
    <div><label for="Price">Price<input type="range"></label></div>
    <div><label for="Cancel">Cancel<input type="button"></label></div>
    <div><label for="Ok">Ok<input type="button"></label></div>
  </fieldset>
</form>
</form>  
</body>
</html>
