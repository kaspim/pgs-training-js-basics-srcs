# 03 Funkce

```
function mojefunkce() {
  // kód funkce
}
```

```
function pozdrav() {
  document.write('Ahoj!');
}

pozdrav();
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/10/)

```
function pozdrav(osloveni) {
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav('Martine');
pozdrav('Katko');
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/8/)

### Výchozí hodnoty parametrů
#### Zápis podporovaný od ECMAScript 6 - standard 2015
```
function pozdrav(osloveni = 'lidi') {
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav();
```

#### Zápis podporovaný v Internet Exploreru a starších verzích prohlížečů
```
function pozdrav(osloveni) {
  osloveni = (osloveni !== undefined) ? osloveni : 'lidi'; // lze zapsat také jako osloveni = osloveni || 'lidi';
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav();
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/9/)

```
function pozdrav(osloveni) {
  
  /* Funkce vrací aktuální hodinu návštěvníka webu */
  function kolikjehodin() {
    var d = new Date();
    var h = d.getHours();
    
    return h;
  }
  
  /* Funkce na základě aktuálního času vrací text pozdravu */
  function textpozdravu() {
    var t, h;
    h = kolikjehodin();
    
    switch(true) {
      case (h >= 5 && h < 7):
        t = 'Dobré ráno'; break;
      case (h >= 7 && h < 12):
        t = 'Dobré dopoledne'; break;
      case (h >= 12 && h < 13):
        t = 'Dobré poledne'; break;
      case (h >= 13 && h < 18):
        t = 'Dobré odpoledne'; break;
      case (h >= 18 && h < 20):
        t = 'Dobrý podvečer'; break;
      case (h >= 20 && h < 23):
        t = 'Dobrý večer'; break;
      default:
        t = 'Dobrou noc'
    }
    
    return t;
  }
  
  var pozdrav = textpozdravu();
  var osloveni = osloveni || 'všem';
  
  document.write(pozdrav + ' ' + osloveni + '!');
}

pozdrav('Martine');
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/11/), [Práce s datem](https://www.w3schools.com/js/js_dates.asp)

[Zpět na seznam kapitol](https://github.com/kaspim/pgs-training-js-basics-srcs/)
