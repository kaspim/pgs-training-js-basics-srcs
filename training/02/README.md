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
```
var a = 1;

if (a == 1) {
  document.write('a se rovná 1');
}
```
__podmínka vypíše a se rovná 1__

```
var a = 2;

if (a == 1) {
  document.write('a se rovná 1');
} else {
  document.write('a se nerovná 1');
}
```
__podmínka vypíše a se nerovná 1__

```
var a = 3;

if (a == 1) {
  document.write('a se rovná 1');
} else if (a == 2) {
  document.write('a se rovná 2');
} else {
  document.write('a se nerovná 1 ani 2');
}
```
__podmínka vypíše a se nerovná 1 ani 2__
