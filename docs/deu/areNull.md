# areNull

## Beschreibung

Prüft, ob alle Elemente im angegebenen `array` `null` sind.

### Anwendungsfall

Validiere, dass eine Datensatzspalte, eine API-Feldliste oder ein Platzhalter-Array ausschließlich `null`-Werte enthält,
bevor Logik angewendet wird, die davon ausgeht, dass alle Einträge absichtlich leer sind.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areNull`, wenn du eine strikte Prüfung benötigst, dass eine Eingabe ein nicht-leeres Array ist und jedes
> Element exakt `null` ist (nicht `undefined`, keine falsy-Werte).

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element `null` ist, und dient damit als strikte „alle stimmen
  überein“-Prüfung.
- Lehnt Nicht-Arrays und leere Arrays ab, indem `false` zurückgegeben wird, wodurch versehentliche truthy-Ergebnisse bei
  ungültiger Eingabe verhindert werden.
- Eignet sich gut als Vorbedingungsprüfung, bevor Daten verarbeitet werden, die vollständig `null` sein müssen.

## Verwendung

### Syntax

Funktion:

- `areNull(array)`

Parameter:

- `array`: Das Eingabearray, das auf `null`-Elemente geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // wahr
const allNullB = areNull(b); // falsch

const notAnArray = areNull(123 as unknown as unknown[]); // falsch
const empty = areNull([]); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areNull(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areNull](../_analysis/areNull.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 15:42:56 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>