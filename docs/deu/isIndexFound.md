# isIndexFound

## Beschreibung

`isIndexFound` bestimmt, ob ein gegebener Wert eine nichtnegative ganze Zahl ist und damit anzeigt, dass ein Index
gefunden wurde.

### Anwendungsfall

Validiere, dass ein Suchergebnis einen verwendbaren Index (ganze Zahl `>= 0`) darstellt, bevor in ein Array oder einen
String indiziert wird, um die versehentliche Verwendung von `-1` oder nichtnumerischen Werten zu verhindern.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isIndexFound` nach Operationen wie `indexOf`, `findIndex` oder benutzerdefinierten Suchen, bei denen `-1` (
> oder andere ungültige Werte) „nicht gefunden“ bedeuten kann. Wenn es `true` zurückgibt, ist der Wert eine Zahl und
> sicher als Array-/String-Index verwendbar.

### Vorteile

- Bietet einen einfachen Type Guard, um zu erkennen, ob ein Index gefunden wurde, indem auf eine nichtnegative ganze
  Zahl geprüft wird.
- Gibt `true` nur für gültige indexähnliche Werte (ganze Zahlen `>= 0`) zurück und lehnt negative Werte,
  Nicht-Ganzzahlen und Nicht-Zahlen ab.
- Hilft, Off-by-one- und Sentinel-Wert-Fehler zu vermeiden, wenn mit APIs gearbeitet wird, die `-1` für „nicht gefunden“
  zurückgeben.

## Verwendung

### Syntax

Funktion:

- `isIndexFound(value)`

Parameter:

- `value`: Der Wert, der darauf geprüft werden soll, ob er eine nichtnegative ganze Zahl ist.

### Lokaler Funktionen-Import

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx ist hier eine Zahl und ist >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Typische Verwendung mit indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isIndexFound(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 00:45:31 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>