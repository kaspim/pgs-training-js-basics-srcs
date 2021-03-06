# Práce s DOM a událostmi
* Document Object Model je strom elementů (objektů), z nichž se stránka skládá.
* Odkazování na DOM se užívá i ve spojení s definováním stylů v CSS.
* Oblíbeným frameworkem pro práci s DOM je jQuery.

## Ukázkový kód stránky
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Moje ukázková stránka</title>  
  
    <script src="./skripty.js"></script>
    <link rel="stylesheet" src="./styl.css" />
  </head>
  <body>
    <section>
      <nav>
        <ul>
          <li><a href="#" rel="home">Domů</a></li>
          <li><a href="#">Články</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>
    </section>
    <section>
      <p id="pozdrav">Vítám tě, <span class="osloveni">milý čtenáři</span>!</p>
    </section>
    <section>
      <h1>Články</h1>
      <article>
         <h2>Název článku 1</h2>
         <p>Text mého ukázkového článku 1 není nijak dlouhý ani zajímavý, ale to nám pro ukázku nevadí.</p>
      </article>
      <article>
         <h2>Název článku 2</h2>
         <p>Text mého ukázkového článku 2 není nijak dlouhý ani zajímavý, ale to nám pro ukázku nevadí.</p>
      </article>
    </section>
    <section>
      <p>Nastavte si své oslovení</p>
      <form>
        <input name="osloveni" placeholder="Zde zadejte své preferované oslovení" />
        <button type="button" name="osloveni">Nastavit</button>
      </form>
    </section>
  </body>
</html>
```

## Je dobré znát
* [Selektory](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
* [jQuery API](https://api.jquery.com/)

## Příklady
### Kliknutí na nadpis článku
#### JavaScript
```javascript
var titles = document.querySelectorAll('article > h2');

for (var i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function() {
    alert('Klikáš na článek ' + this.innerText);
  })	
}
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/vfkzLsc9/6/)

#### jQuery
```javascript
$('article > h2').on('click', function() {
  alert('Klikáš na článek ' + $(this).text());
});
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/vfkzLsc9/7/)

### Nastavení oslovení
#### JavaScript
```javascript
document.querySelector('button[name="osloveni"]').addEventListener('click', function () {
  var osloveni = document.querySelector('input[name="osloveni"]').value;
  document.querySelector('#pozdrav > span.osloveni').innerText = osloveni;
});
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/vfkzLsc9/5/), [příklad 2](https://jsfiddle.net/kaspim/vfkzLsc9/4/)

#### jQuery
```javascript
$('button[name="osloveni"]').on('click', function() {
  var osloveni = $('input[name="osloveni"]').val();
  $('#pozdrav > span.osloveni').text(osloveni);
});
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/vfkzLsc9/), [příklad 2](https://jsfiddle.net/kaspim/vfkzLsc9/1/)

#### Průběžné doplnění v jQuery
```javascript
$('button[name="osloveni"]').on('click', function() {
  var osloveni = $('input[name="osloveni"]').val();
  nastavOsloveni(osloveni);
});

$('input[name="osloveni"]').on('keyup', function() {
  var osloveni = $(this).val();
  nastavOsloveni(osloveni);
});

function nastavOsloveni(jmeno) {
  $('#pozdrav > span.osloveni').text(jmeno);
}
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/vfkzLsc9/8/)

## Aby vše fungovalo
#### JavaScript
Skript musí být spuštěn po dokončení načtení DOM modelu.
```javascript
document.addEventListener("DOMContentLoaded", function() { 
  // skripty nebo funkce
});
```

#### jQuery
```javascript
$(document).ready(function() {
  // skripty nebo funkce
});
```

#### Umístění skriptu před konec body
```html
    <script>
      // skripty nebo funkce
    </script>
  </body>
</html>
```

[Zpět na seznam kapitol](https://github.com/kaspim/pgs-training-js-basics-srcs/)
