# Práce s DOM a událostmi
* Document Object Model je strom elementů (objektů), z nichž se stránka skládá.
* Odkazování na DOM se užívá i ve spojení s definováním stylů v CSS.
* Oblíbeným frameworkem pro práci s DOM je [jQuery](https://api.jquery.com/)

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
         <h2>Název článku 1</h2>
         <p>Text mého ukázkového článku 1 není nijak dlouhý ani zajímavý, ale to nám pro ukázku nevadí.</p>
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

## Příklady
### Nastavení oslovení
#### JavaScript
```javascript
document.querySelector('button[name="osloveni"]').addEventListener('click', nastavOsloveni);

function nastavOsloveni() {
  var osloveni = document.querySelector('input[name="osloveni"]').value;
  document.querySelector('#pozdrav > span.osloveni').innerText = osloveni;
}
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/vfkzLsc9/2/), [příklad 2](https://jsfiddle.net/kaspim/vfkzLsc9/3/)

#### JavaScript + jQuery
```javascript
$('button[name="osloveni"]').on('click', function() {
  var osloveni = $('input[name="osloveni"]').val();
  $('#pozdrav > span.osloveni').text(osloveni);
});
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/vfkzLsc9/), [příklad 2](https://jsfiddle.net/kaspim/vfkzLsc9/1/)
