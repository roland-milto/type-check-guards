# arePlainObjects

## Beschreibung

Prüft, ob alle Elemente eines Arrays Plain Objects sind, und gibt nur dann `true` zurück, wenn jedes Element die
Kriterien erfüllt.

### Anwendungsfall

Validiere externe oder untypisierte Daten (z. B. geparstes JSON, API-Payloads, Formulareinsendungen), um
sicherzustellen, dass du ein nicht-leeres Array erhalten hast, bei dem jeder Eintrag ein Plain Object ist, bevor du
darüber iterierst und Eigenschaften ausliest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `arePlainObjects`, um unbekannte Eingaben zu validieren, bevor du sie in TypeScript als
`Record<string, unknown>[]` (oder eine strengere Objektform) behandelst.

### Vorteile

- Stellt sicher, dass jedes Element im Eingabearray ein Plain Object ist, und gibt nur dann `true` zurück, wenn alle
  Elemente übereinstimmen.
- Lehnt ungültige Eingaben frühzeitig ab (keine Arrays oder leere Arrays), indem `false` zurückgegeben wird.
- Behandelt sowohl Objekt-Literale als auch `Object.create(null)`-Objekte als gültige Plain Objects.

## Verwendung

### Syntax

Funktion:

- `arePlainObjects(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob es Plain-Object-Elemente enthält.

### Lokaler Funktionen-Import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // wahr
const b = arePlainObjects([{}, Object.create(null)]); // wahr
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falsch
const d = arePlainObjects([] as unknown[]); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.arePlainObjects(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 16:24:55 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>