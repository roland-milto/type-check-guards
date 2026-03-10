# areBooleans

## Beschreibung

`areBooleans` prüft, ob ein gegebenes nicht leeres Array ausschließlich Boolean-Werte enthält, und gibt `true` zurück,
wenn dies der Fall ist, andernfalls `false`.

### Anwendungsfall

Validiere vom Benutzer bereitgestellte oder externe Daten (z. B. JSON-Payloads, Query-Parameter, Konfigurations-Arrays),
um sicherzustellen, dass eine nicht leere Liste nur Booleans enthält, bevor du Boolean-Logik anwendest oder sie an APIs
übergibst, die `boolean[]` erwarten.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areBooleans`, um `unknown[]` zu validieren, bevor du es als `boolean[]` behandelst; es gibt für leere Arrays
`false` zurück, also behandle diesen Fall explizit, wenn eine leere Liste erlaubt sein soll.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element ein Boolean ist und die Eingabe ein nicht leeres Array ist.
- Verhindert False Positives, indem leere Arrays abgelehnt werden (gibt `false` zurück).
- Eignet sich gut als Runtime-Guard vor reinen Boolean-Operationen (z. B. `every`, `some`, logische Reduktionen).

## Verwendung

### Syntax

Funktion:

- `areBooleans(array)`

Parameter:

- `array`: Das Array, das auf Boolean-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areBooleans(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:39:51 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>