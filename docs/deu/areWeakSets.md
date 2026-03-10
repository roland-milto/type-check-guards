# areWeakSets

## Beschreibung

Prüft, ob eine Eingabe ein nicht-leeres Array ist, bei dem jedes Element ein `WeakSet` ist, und gibt nur in diesem Fall
`true` zurück.

### Anwendungsfall

Validiere Laufzeiteingaben (z. B. aus APIs, Konfigurationen oder vom Benutzer bereitgestellten Daten), um
sicherzustellen, dass du eine nicht-leere Liste von `WeakSet`-Instanzen hast, bevor du mit Logik fortfährst, die vom
`WeakSet`-Verhalten abhängt.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areWeakSets`, um unbekannte Eingaben zu validieren, bevor du sie als `WeakSet[]` behandelst. Es gibt für
> leere Arrays und Nicht-Arrays `false` zurück.

### Vorteile

- Stellt sicher, dass jedes Element im Eingabearray ein `WeakSet` ist.
- Gibt bei leeren Arrays `false` zurück und verhindert so versehentliche „alle gültig“-Ergebnisse bei fehlenden Daten.
- Schlägt sicher fehl, indem `false` zurückgegeben wird, wenn die Eingabe kein gefülltes Array ist (einschließlich
  `null`).
- Nützlich als Guard, bevor Operationen ausgeführt werden, die `WeakSet`-Instanzen erfordern.

## Verwendung

### Syntax

Funktion:

- `areWeakSets(array)`

Parameter:

- `array`: Das Array, das auf `WeakSet`-Objekte geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a ist ein nicht-leeres Array von WeakSet-Instanzen
}

console.log(areWeakSets(a)); // wahr
console.log(areWeakSets(b)); // falsch
console.log(areWeakSets(c)); // falsch
console.log(areWeakSets(null as unknown)); // falsch

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areWeakSets(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 14:08:16 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>