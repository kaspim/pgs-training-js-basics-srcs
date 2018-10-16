# Deklarování a typy prměnných
Proměnné slouží k nastavení a uchování hodnot. Název proměnné může být tvořen znaky ```a-z```, ```A-Z``` a číslicemi ```0-9``` nebo znakem ```_``` nejsou-li uvedeny na začátku. JavaScript je *case sensitive* - tzn. rozlišuje velikost písma.

## Deklarování a chování proměnné
### Deklarování prázné proměnné a nastavení hodnoty
```
var pozdrav;
pozdrav = 'Ahoj';
```
### Deklarování proměnné včetně hodnoty
```
var pozdrav = 'Ahoj';
```
#### Vypsání proměnné do stránky
```
document.write(pozdrav); // vypíše Ahoj
```

[Zobrazit příklad](https://jsfiddle.net/kaspim/6yx0opb5/)

### Je dobré znát
```
var   // nejobvyklejší typ deklarování proměnné
let   // od ES6 2015 další možnost deklarování proměnné s platností vymezenou složenými závorkami {}, např. funkcí
const // od ES6 2015 možnost deklarovat konstantu, jejíž hodnota nelze přepsat
```
Příklady
```
var pozdrav = 'Ahoj';
var pozdrav = 'Dobrý den';

document.write(pozdrav); // vypíše Dobrý den
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/6yx0opb5/1/)


```
const pozdrav = 'Ahoj';
var pozdrav = 'Dobrý den';

document.write(pozdrav); // chyba syntaxe, skript se neprovede
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/6yx0opb5/2/)

```
let pozdrav = 'Ahoj';
{
  let pozdrav = 'Dobrý den';
}

document.write(pozdrav); // vypíše Ahoj
```
[Zobrazit příklad 1](https://jsfiddle.net/kaspim/6yx0opb5/3/), [příklad 2](https://jsfiddle.net/kaspim/6yx0opb5/4/), [příklad 3](https://jsfiddle.net/kaspim/6yx0opb5/5/)

## Základní typy proměnných
Typ | Popis | Příklad
--- | ----- | -------
Number | číselná hodnota | 1, 12, 16.5
String | textový řetězec | 'Mléko', 'Rohlíky'
Boolean | logická hodnota | true, false
Array | skupina proměnných | nakupniSeznam = ['Mléko', 'Rohlíky', 'Vejce']

[Zpět na seznam kapitol](https://github.com/kaspim/pgs-training-js-basics-srcs/)
