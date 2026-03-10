# areSets

## Beschreibung

Prüft, ob ein gegebenes nicht-leeres Array ausschließlich `Set`-Instanzen enthält, und gibt in diesem Fall `true`
zurück, andernfalls `false`.

### Anwendungsfall

Validiere, dass ein Wert (z. B. aus Benutzereingaben, JSON-Parsing oder externen APIs) ein nicht-leeres Array von `Set`
-Objekten ist, bevor jedes Set verarbeitet wird.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areSets`, um unbekannte Eingaben zu validieren, bevor du iterierst und `Set`-APIs (z. B. `.size`, `.has`,
`.add`) auf jedem Element aufrufst.

### Vorteile

- Gibt nur dann `true` zurück, wenn die Eingabe ein nicht-leeres Array ist und jedes Element eine `Set`-Instanz ist.
- Verhindert Fehl-Positiv-Ergebnisse bei leeren Arrays, indem `false` zurückgegeben wird, wenn das Array keine Elemente
  hat.
- Nützlich als Laufzeit-Guard, bevor `Set`-spezifische Operationen auf jedem Element ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areSets(array)`

Parameter:

- `array`: Das Array, das auf `Set`-Instanzen geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a ist zur Laufzeit ein Array von Set-Instanzen
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falsch
console.log(areSets(c)); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areSets(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areSets](../_analysis/areSets.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:13:11 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>