# isValidDate

## Bschrybig

`isValidDate` prüeft, öb en gegebene Wert es gültigs `Date`-Objekt isch, und git nume für echt, nöd-ungültigi Date
`true` zrugg.

### Aawändig

Validier User-Input oder API-Date, wo Date chönnte enthalte, und stell sicher, dass de Wert e echt `Date`-Instanz isch
und nöd es ungültigs Date, bevor du Datum-Berechnige, Formatierige oder Vergliich machsch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isValidDate`, bevor du `Date`-Methoden (z. B. `toISOString`, `getTime`) uf Wärt vom Typ `unknown` uufruefsch,
> zum sicher z'sii, dass es gültigi `Date`-Objekt sind.

### Vorteil

- Stellt sicher, dass en Wert e `Date`-Instanz isch und nöd nume e datum-ähnligi Zeichenchätti oder Zahl.
- Lehnt ungültigi Date ab (z. B. `new Date("invalid")`), indem es uf `NaN`-Ziitwärt prüeft.
- Eifachi boolesche Guard, wo sich guet i Bedingige und Validierigspipelines bruuche laat.
- Hilft, Runtime-Fehler z'verhindere, wänn Date-Methoden uufgruefe wärde, indem zerscht d'Input prüeft wird.

## Verwendig

### Syntax

Funktion:

- `isValidDate(value)`

Parameter:

- `value`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input isch e gültigi Date-Instanz
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // falsch
console.log(isValidDate("2025-12-22")); // falsch

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isValidDate(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 16:40:04 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>