# areWeakMaps

## Beschreibung

`areWeakMaps` prüft, ob ein Wert ein nicht-leeres Array ist, in dem jedes Element eine `WeakMap` ist, und gibt nur in
diesem Fall `true` zurück, andernfalls `false`.

### Anwendungsfall

Validiere Laufzeitdaten (z. B. geparstes JSON, Plugin-Eingaben oder locker typisierte Konfiguration), um
sicherzustellen, dass es sich um ein nicht-leeres Array von `WeakMap`-Instanzen handelt, bevor du iterierst und
`WeakMap`-Methoden aufrufst; gibt `false` zurück, wenn irgendein Element keine `WeakMap` ist oder wenn das Array leer
ist.

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `areWeakMaps`, um unbekannte Eingaben zu validieren, bevor du sie als nicht-leeres `WeakMap[]` behandelst;
> für leere Arrays gibt es `false` zurück.

### Vorteile

- Stellt sicher, dass jedes Element im bereitgestellten Array eine `WeakMap`-Instanz ist.
- Gibt für leere Arrays `false` zurück und verhindert so, dass „keine Daten“ versehentlich als gültige Eingabe
  akzeptiert werden.
- Nützlich als Guard, bevor `WeakMap`-spezifische Operationen auf allen Elementen ausgeführt werden.

## Verwendung

### Syntax

Funktion:

- `areWeakMaps(array)`

Parameter:

- `array`: Das Array, das auf `WeakMap`-Instanzen geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list ist ein nicht-leeres Array von WeakMap-Instanzen
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // kein nicht-leeres WeakMap[]
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.areWeakMaps(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 13:36:48 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>