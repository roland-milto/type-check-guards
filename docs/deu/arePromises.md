# arePromises

## Beschreibung

`arePromises` bestimmt, ob alle Elemente in einem Array `Promise`-Instanzen sind.

### Anwendungsfall

Validiere, dass eine dynamisch erstellte oder extern bereitgestellte Liste ausschließlich Promises enthält, bevor du sie
aggregierst (z. B. mit `Promise.all`).

> **Hinweis für TypeScript-Nutzer:**
>
> Verwende `arePromises`, um `unknown[]` zu validieren, bevor du `Promise.all` oder andere nur-für-Promises-Operationen
> aufrufst; es gibt für leere Arrays `false` zurück.

### Vorteile

- Stellt sicher, dass jedes Element ein `Promise` ist, bevor du mit promise-spezifischer Logik fortfährst.
- Gibt bei nicht befüllten Arrays `false` zurück und verhindert so mehrdeutige Ergebnisse bei leeren Eingaben.
- Nützlich als Laufzeit-Guard beim Arbeiten mit `unknown[]` aus externen Quellen.

## Verwendung

### Syntax

Funktion:

- `arePromises(array)`

Parameter:

- `array`: Das Array, das auf Promise-Instanzen geprüft werden soll.

### Lokaler Funktionen-Import

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values ist zur Laufzeit ein Array von Promise-Instanzen
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globaler Objekt-Import

Verwende folgenden Import, um die Funktionen als Objektmethoden global zu importieren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Folgende Methode steht dann global zur Verfügung:

- `Type.arePromises(array)`

## Funktionsanalyse

Eine tabellarische Analyse, welche Ausgabe bei einem Einfügen unterschiedlicher Parameter in die Funktionen erzeugt
wird, ist hier dokumentiert: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Datei wurde erzeugt am 30. Januar 2026 um 23:48:01 (UTC) unter der Verwendung des *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** von *
*[Roland Milto](https://roland-milto.de/)**.</small>