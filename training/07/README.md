# Funkce pro práci s cookies
Některé vámi nebo uživatelem nastavené proměnné můžete ukládat do souborů cookies. Zde několik ukázek pro práci se soubory cookies.

## Uložení cookie
```javascript
function setCookie(name, value, expire) {
  let days = expire || 7;
  let date = new Date(); date.setTime(date.getTime() + days * 864e5);
  
  document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
}

setCookie('testcookie', 'funkcni', 14);
```

## Získání hodnoty cookie
```javascript
function getCookie(name) {
  let regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)', 'i');
  let match = document.cookie.match(regex);

  return match ? unescape(match[1]) : null;
}
  
getCookie('testcookie'); // vrátí hodnotu nebo null
```
