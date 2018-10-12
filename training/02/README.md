## Podmínky a operátory

### Operátory podmínek
Operátor | Popis
-------- | -----
\=\= | je rovno
\!\= | není rovno
\< | je menší než
\> | je větší než
\<\= | je menší nebo rovno než
\>\= | je větší nebo rovno než
\=\=\= | je hodnotou nebo typem rovno
\!\=\= | je hodnotou nebo typem nerovno

### Logické operátory
Operátor | Popis
-------- | -----
\&\& | AND (logické A)
\|\| | OR (logické NEBO)
\! | NOT (logický zápor)

### Příklady
#### Jednoduchá podmínka
```
let output;
let a = 1;

if (a == 1) {
  output = 'a se rovná 1';
}

document.write(output); // podmínka vypíše 'a se rovná 1'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/r902qe4v/)

#### Jednoduchá podmínka s hodnotou při nesplnění
```
let output;
let a = 2;

if (a == 1) {
  output = 'a se rovná 1';
} else {
  output = 'a se nerovná 1';
}

document.write(output); // podmínka vypíše 'a se nerovná 1'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/r902qe4v/2/)

#### Větvená podmínka
```
let output;
let a = 2;

if (a == 1) {
  output = 'a se rovná 1';
} else if (a == 2) {
  output = 'a se rovná 2';
} else {
  output = 'a se nerovná 1 ani 2';
}

document.write(output); // podmínka vypíše 'a se rovná 2'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/r902qe4v/3/)

#### Konstrukce s využitím switch
```
let output;
let a = 2;

switch (a) {
  case 1:
    output = 'a se rovná 1'; break;
  case 2:
    output = 'a se rovná 2'; break;
  default:
    output = 'a se nerovná 1 ani 2';
}

document.write(output); // podmínka vypíše 'a se rovná 2'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/r902qe4v/4/)


```
var a = 1;

if (a == true) {

}

if (a === true) {
  document.write('');
}
```
