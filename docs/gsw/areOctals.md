# areOctals

## Bschrybig

`areOctals` bestimmt, öb de aagebni Wert es nöd-läärs Array vo gültige Oktal-Strings isch.

### Aawändig

Bruuch `areOctals` bi dr Validierig vo User-Input, Konfigurationswert oder API-Payloads, wo Oktal-Literale enthalte
müend (z.B. Dateirecht-Modi wie `0o755`), und du wotsch läärni Arrays oder ungültigi Iiträg abwiise, indem `false`
zrugggeh wird.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areOctals`, zum sicherzstelle, dass du es nöd-läärs `unknown[]` hesch, wo jede Iitrag en gültige Oktal-String
> isch, bevor du umwandelisch (z.B. mit `Number(...)` oder eigetem Parsen).

### Vorteil

- Validiert, dass en Wert esch es nöd-läärs Array isch, wo jedes Element en Oktal-String isch, und git nume denn `true`
  zrugg, wänn alli Items bestönd.
- Schlaat schnäll fehl: git `false` zrugg, sobald es nöd-oktal Element gfunde wird.
- Nützlich als Guard vor em Parsen oder Umwandle vo Oktal-Strings, zum Laufziit-Fehler und inkonsistenti Input-Behandlig
  z'vermide.

## Verwendig

### Syntax

Funktion:

- `areOctals(array)`

Parameter:

- `array`: De Wert, wo söll überprüeft werde.

### Lokale Funktions-Import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value isch es nid-läärs Array vo Oktal-Strings
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areOctals(array)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 14:45:15 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>