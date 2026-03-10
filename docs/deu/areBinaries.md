# areBinaries

## Beschreibung

Prüft, ob der bereitgestellte Wert ein nicht leeres Array aus gültigen Binärzeichenfolgen ist, und gibt nur dann `true`
zurück, wenn alle Elemente die Validierung bestehen.

### Anwendungsfall

Verwende `areBinaries`, wenn du eine unbekannte Liste (z. B. aus JSON, Formularen oder APIs) erhältst und sicherstellen
musst, dass es sich um ein nicht leeres Array aus Binärzeichenfolgen handelt, bevor du sie parsest oder
weiterverarbeitest.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areBinaries`, um unbekannte Eingaben zu validieren, bevor du Binärzeichenfolgen in Numbers/BigInts
> umwandelst; es stellt sicher, dass das Array nicht leer ist und jedes Element eine gültige Binärzeichenfolge ist.

### Vorteile

- Validiert, dass ein Wert ein nicht leeres Array ist, in dem jedes Element eine gültige Binärzeichenfolge ist.
- Gibt ein einfaches boolesches Ergebnis (`true`/`false`) zurück, geeignet für Guards, frühe Rückgaben und
  Eingabevalidierung.
- Verhindert nachgelagerte Parsing-Fehler, indem Arrays abgelehnt werden, die einen nicht-binären Eintrag enthalten.

## Verwendung

### Syntax

Funktion:

- `areBinaries(array)`

Parameter:

- `array`: Der zu prüfende Wert.

### Lokaler Funktionen-Import

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // wahr
console.log(areBinaries(b)); // falsch
console.log(areBinaries([])); // falsch
```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areBinaries(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 23:14:17 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>