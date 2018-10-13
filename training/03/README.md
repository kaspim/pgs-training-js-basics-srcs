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

```
function pozdrav(osloveni) {
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav('Martine');
pozdrav('MKatko');
```

### Výchozí hodnoty parametrů
#### Zápis podporovaný od ECMAScript 6
```
function pozdrav(osloveni = 'lidi') {
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav();
```

#### Zápis podporovaný v Internet Exploreru a starších verzích prohlížečů
```
function pozdrav(osloveni) {
  osloveni = (typeof osloveni !== undefined) ? osloveni : 'lidi'; // lze zapsat také jako osloveni = osloveni || 'lidi';
  document.write('Ahoj ' + osloveni + '!');
}

pozdrav();
```
