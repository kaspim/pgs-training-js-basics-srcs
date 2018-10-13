# 02 Podmínky a operátory

## Operátory podmínek
Operátor | Popis
-------- | -----
\=\= | je rovno
\!\= | není rovno
\< | je menší než
\> | je větší než
\<\= | je menší nebo rovno než
\>\= | je větší nebo rovno než
\=\=\= | je rovno hodnotou a typem
\!\=\= | je nerovno hodnotou nebo typem

## Logické operátory
Operátor | Popis
-------- | -----
\&\& | AND (logické A)
\|\| | OR (logické NEBO)
\! | NOT (logický zápor)

## Základní konstrukce podmínek
### Jednoduchá podmínka
```
var output;
var a = 1;

if (a == 1) {
  output = 'a se rovná 1';
}

document.write(output); // podmínka vypíše 'a se rovná 1'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/1/)

### Jednoduchá podmínka s hodnotou při nesplnění
```
var output;
var a = 2;

if (a == 1) {
  output = 'a se rovná 1';
} else {
  output = 'a se nerovná 1';
}

document.write(output); // podmínka vypíše 'a se nerovná 1'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/2/)

### Větvená podmínka s hodnotou při nesplnění
```
var output;
var a = 2;

if (a == 1) {
  output = 'a se rovná 1';
} else if (a == 2) {
  output = 'a se rovná 2';
} else {
  output = 'a se nerovná 1 ani 2';
}

document.write(output); // podmínka vypíše 'a se rovná 2'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/3/)

## Jiné způsoby konstrukce podmínek
### Zkrácený zápis if - else
```
var a = 2;
var output = (a == 1) ? 'a se rovná 1' : 'a se nerovná 1';

document.write(output); // podmínka vypíše 'a se nerovná 1'
```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/5/)

### Konstrukce if - else if - else s využitím switch
```
var output;
var a = 2;

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
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/4/)

## Shoda hodnotou a typem
```
1 == '1'    // true  (number a string s hodnotou 1)
1 === '1'   // false (typ proměnných není shodný)
1 == true   // true  (hodnota 1 je rovna true; hodnota 0 je rovna false)
1 === true  // false (typ proměnných není shodný)
```

### Rozdíl v práci s typem proměnné
```
var a = 1;
document.write(a + 1); // vypíše hodnotu number 2

var b = '1';
document.write(b + 1); // vypíše hodnotu tring 11

```
[Zobrazit příklad](https://jsfiddle.net/kaspim/9ub2xaLs/6/)

[Zpět na seznam kapitol](https://github.com/kaspim/pgs-training-js-basics-srcs/)
