# isNull

## Beschreibung

Bestimmt, ob der bereitgestellte `value` `null` ist.

### Anwendungsfall

Verwende `isNull`, um Eingaben oder Felder in API-Payloads zu validieren, bei denen `null` ein bedeutungsvoller
Sentinel-Wert ist und anders behandelt werden muss als `undefined` oder andere Werte.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `isNull`, wenn du `null` von `undefined` und anderen falsy Werten unterscheiden musst; es gibt nur für `null`
`true` zurück.

### Vorteile

- Bietet eine präzise Prüfung auf `null`, ohne es mit `undefined` zu vermischen.
- Funktioniert zuverlässig für jeden Eingabetyp, da `unknown` akzeptiert wird.
- Einfach, schnell und ohne Nebenwirkungen; gibt nur `true` oder `false` zurück.

## Verwendung

### Syntax

Funktion:

- `isNull(value)`

Parameter:

- `value`: Der Wert, der auf `null` geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // wahr
console.log(isNull(b)); // falsch

if (isNull(a)) {
  // a ist hier null
}
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.isNull(value)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [isNull](../_analysis/isNull.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:39:02 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>