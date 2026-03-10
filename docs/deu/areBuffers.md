# areBuffers

## Beschreibung

`areBuffers` prüft, ob der bereitgestellte Wert ein nicht-leeres, vollständig gefülltes Array ist, in dem jedes Element
ein `Buffer` ist, und gibt in diesem Fall `true` und andernfalls `false` zurück.

### Anwendungsfall

Validiere eingehende Chunk-Arrays (z. B. aus Streams, Datei-Uploads oder Netzwerkpaketen), um sicherzustellen, dass alle
Teile `Buffer`-Instanzen sind, bevor sie verkettet, dekodiert oder an kryptografische bzw. binärverarbeitende Funktionen
übergeben werden.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areBuffers`, um `unknown[]` zu validieren, bevor Buffer-spezifische APIs wie `Buffer.concat` aufgerufen
> werden, und stelle sicher, dass die Funktion nur dann `true` zurückgibt, wenn jedes Element ein `Buffer` ist.

### Vorteile

- Stellt sicher, dass jedes Element der Eingabe eine Node.js-`Buffer`-Instanz ist, und gibt nur dann `true` zurück, wenn
  das gesamte Array übereinstimmt.
- Lehnt ungültige Eingaben frühzeitig ab, indem ein nicht-leeres, vollständig gefülltes Array erforderlich ist; gibt
  `false` für leere Arrays oder Nicht-Arrays zurück.
- Nützlich als Guard, bevor ausschließlich Buffer-basierte Operationen ausgeführt werden (z. B. Verkettung, Hashing,
  Binärprotokolle).

## Verwendung

### Syntax

Funktion:

- `areBuffers(array)`

Parameter:

- `array`: Das Array, das auf Buffer-Instanzen geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areBuffers(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Datei wurde erzeugt am 31. Januar 2026 um 16:24:55 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>