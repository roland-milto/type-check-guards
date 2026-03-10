# areTrue

## Beschreibung

Prüft, ob ein nicht leeres Array ausschließlich die booleschen `true`-Werte enthält.

### Anwendungsfall

Verwende `areTrue`, um zu validieren, dass eine Reihe von Vorbedingungen oder Feature-Flags alle aktiviert sind (alle
Werte sind `true`), bevor fortgefahren wird, und behandle leere oder fehlerhafte Eingaben als nicht erfüllt (`false`).

> **Hinweis für TypeScript-Nutzer:**
>
> `areTrue` gibt `false` für ein leeres Array und für Arrays zurück, die irgendeinen Wert enthalten, der nicht strikt
`true` ist.

### Vorteile

- Gibt nur dann `true` zurück, wenn jedes Element strikt `true` ist und das Array nicht leer ist.
- Bricht früh ab: Gibt `false` zurück, sobald ein nicht-`true`-Wert gefunden wird.
- Lehnt ungültige Eingaben (keine Arrays oder leere Arrays) ab, indem `false` zurückgegeben wird.

## Verwendung

### Syntax

Funktion:

- `areTrue(array)`

Parameter:

- `array`: Das Array, das darauf geprüft werden soll, ob alle Werte `true` sind.

### Lokaler Funktionen-Import

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areTrue(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:50:54 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>