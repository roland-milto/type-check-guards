# getTypeOf

## Bschrybig

`getTypeOf` git für en gegebene Wert es detaillierts, für Mönsche guet läsbars Typ-Label zrugg, inklusiv verfeinereti
numerischi Type und spezifischi Objekt-Arte.

### Aawändig

Bruuch `getTypeOf`, um d Typ-Erkenning bi Input-Validierig und Diagnostik z normalisiere—zum Bispil, um `nan` z
verwerfe, nume `integer`-IDs z akzeptiere, numerischi Strings wie `decimal` anders z behandle als eifachs `string`, oder
um präzisi Objekt-Arte wie `date` und `regexp` z logge.

> **Hinwiis für TypeScript-Nutzer:**
>
> Dr Return-Typ isch `DataTypeAsString | string`. Behandle s als es beschribends Label; vergliich gege bekannti Literale
> wie `integer`, `float`, `nan`, `array`, `null` und `undefined`, wänn du Verzweigige machsch.

### Vorteil

- Git e tüüferligeri Typ-String zrugg als s JavaScript-`typeof`, inklusiv numerischi Untertype wie `integer`, `float`
  und `nan`.
- Unterscheidet `null` und `undefined` explizit als `null` und `undefined`.
- Erkennt gängigi numerischi String-Formate und git si als `binary`, `octal`, `decimal` oder `hexadecimal` zrugg statt
  nume als `string`.
- Erkennt Arrays als `array` und nutzt `Object.prototype.toString`, um spezifischi Objekt-Typname z liefere (z.B.
  `date`, `regexp`, `map`, `set`).
- Nützlich für Validierig, Logging und Debugging, wänn konsistenti, für Mönsche guet läsbar Typ-Bezeichnige bruucht
  wärde.

## Verwendig

### Syntax

Funktion:

- `getTypeOf(value)`

Parameter:

- `value`: Dr Wert, für dä s Datetyp söll bestimmt wärde.

### Lokale Funktions-Import

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Bispil-Prüefige
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.getTypeOf(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>D Datei isch am 6 February 2026 at 13:06:33 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>