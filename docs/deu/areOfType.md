# areOfType

## Beschreibung

Prüft, ob alle Elemente im angegebenen `array` vom angegebenen `type` sind.

### Anwendungsfall

Verwende `areOfType`, um unbekannte Eingaben (z. B. geparstes JSON, API-Payloads, Benutzereingaben) zu validieren, bevor
du typspezifische Operationen auf jedem Element eines Arrays ausführst.

> **Hinweis für TypeScript-Nutzer:**
>
> Da `areOfType` ein Type-Guard ist, grenzt TypeScript das Array innerhalb eines `if (areOfType(...)) {}`-Blocks auf
`Array<DataTypeOf<T>>` ein.

### Vorteile

- Stellt einen TypeScript-Type-Guard bereit: Wenn er `true` zurückgibt, wird die Eingabe auf `Array<DataTypeOf<T>>`
  eingegrenzt.
- Validiert jedes Element gegen den angeforderten Runtime-Typ und verhindert so, dass Arrays mit gemischten Typen
  durchgehen.
- Bricht früh ab: Gibt `false` zurück, sobald ein nicht passendes Element gefunden wird.
- Lehnt Nicht-Arrays und leere Arrays absichtlich ab (hängt von `isFilledArray` ab).

## Verwendung

### Syntax

Funktion:

- `areOfType(array, type)`

Parameter:

- `array`: Das zu prüfende Array.
- `type`: Der Typ, gegen den jedes Element im Array geprüft wird.

### Lokaler Funktionen-Import

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values ist jetzt number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areOfType(array, type)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 17:09:13 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>