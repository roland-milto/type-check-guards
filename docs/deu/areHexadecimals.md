# areHexadecimals

## Beschreibung

Prüft, ob alle Elemente in einem Array hexadezimale Zeichenketten sind, und gibt `true` nur für nicht-leere Arrays
zurück, in denen jedes Element gültig ist.

### Anwendungsfall

Verwende `areHexadecimals`, um Benutzereingaben oder externe Daten (z. B. IDs, Prüfsummen, Farbcodes ohne führendes '#')
zu validieren, bevor du eine hexadezimale Auswertung oder weitere Verarbeitung durchführst.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areHexadecimals`, um unbekannte Eingaben vor dem Parsen oder Konvertieren von Werten zu validieren (z. B.
> vor `parseInt(value, 16)` oder BigInt-Konvertierungen).

### Vorteile

- Validiert, dass jedes Element eine hexadezimale Zeichenkette ist, und gibt nur dann `true` zurück, wenn alle Elemente
  übereinstimmen.
- Lehnt leere Arrays absichtlich ab und gibt bei fehlenden Eingabedaten `false` zurück.
- Liefert ein einfaches boolesches Ergebnis (`true`/`false`), geeignet für Guards und Validierung mit frühem Return.

## Verwendung

### Syntax

Funktion:

- `areHexadecimals(array)`

Parameter:

- `array`: Das Array, das auf hexadezimale Zeichenketten-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areHexadecimals(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:05:54 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>