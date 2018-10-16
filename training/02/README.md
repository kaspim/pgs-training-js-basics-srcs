# Práce s proměnnými
## Základní typy proměnných
Typ | Popis | Příklad
--- | ----- | -------
Number | číselná hodnota | 1, 12, 16.5
String | textový řetězec | 'Mléko', 'Rohlíky'
Boolean | logická hodnota | true, false
Array | skupina proměnných | nakupniSeznam = ['Mléko', 'Rohlíky', 'Vejce']

## Proměnná typu number
```javascript
var rohliku = 10;

document.write('Rohlíků: ' + 10);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/4/)

```javascript
var a = 10;
a += 5; // totéž jako a = a + 5;

document.write('Rohlíků: ' + a);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/5/)

```javascript
var a = 10;
var b = 5;
var c = a + b;

document.write('Rohlíků a housek: ' + c);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/6/)

## Proměnná typu string
```javascript
var nazev = 'Nákupní seznam';

document.write(nazev);
```

```javascript
var nazev = 'Nákupní seznam';
nazev += ' na středu';

document.write(nazev);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/7/)

```javascript
var a = '10';
var b = 5;
var c = a + b;

document.write('Rohlíků a housek: ' + c);
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/0jsdgy9v/8/), [příklad 2](https://jsfiddle.net/kaspim/0jsdgy9v/9/)

### Proměnná typu Boolean
```javascript
var text;
var mamradrohliky = true;

if (mamradrohliky === true) {
  text = 'Nakup rohlíky';
} else {
  text = 'Kup raději chleba';
}

document.write(text);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/10/)

### Proměnná typu Array
```javascript
var seznam = ['Rohlíky', 'Mléko', 'Chleba', 'Vejce'];

document.write(seznam[2]);
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/12/)

```javascript
var seznam = ['Rohlíky', 'Mléko', 'Chleba', 'Vejce'];

for(i = 0; i < seznam.length; i++) {
  document.write(seznam[i] + '<br/>');
}
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/13/)

```javascript
var nazev = 'Můj nákupní seznam';
var celkem = 0;
var seznam = [{
  polozka: 'Rohlíky',
  pocet: 10,
  cena: 1.8
}, {
  polozka: 'Mléko',
  pocet: 1,
  cena: 12.9
}, {
  polozka: 'Chleba',
  pocet: 2,
  cena: 22
}, {
  polozka: 'Vejce',
  pocet: 6,
  cena: 2
}];

document.write('<h1> ' + nazev + ' </h1><p>');

for(i = 0; i < seznam.length; i++) {
  document.write(seznam[i].polozka + ' ..... ' + seznam[i].pocet + 'ks ..... ' + (seznam[i].pocet * seznam[i].cena) + 'CZK<br/>');
  celkem += (seznam[i].pocet * seznam[i].cena);
}

document.write('</p><p>Celková cena '+ celkem + 'CZK</p>');
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/0jsdgy9v/15/)

[Zpět na seznam kapitol](https://github.com/kaspim/pgs-training-js-basics-srcs/)
