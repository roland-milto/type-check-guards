# isNull

## Bschrybig

Bestimmt, öb de aagebni `value` `null` isch.

### Aawändig

Bruuch `isNull`, zum Iigabe oder API-Payload-Fälder z validiere, wo `null` e bedeutigsvolle Sentinel-Wert isch und
andersch muess behandelt werde als `undefined` oder anderi Wärt.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `isNull`, wänn du `null` vo `undefined` und andere falsy Wärt wotsch unterscheide; es git nume bi `null` `true`
> zrugg.

### Vorteil

- Bietet e präzisi Prüefig uf `null`, ohni das mit `undefined` z vermische.
- Funktioniert zueverlässig für jede Iigabtyp, will es `unknown` akzeptiert.
- Eifach, schnäll und ohni Nebewürkige; git nume `true` oder `false` zrugg.

## Verwendig

### Syntax

Funktion:

- `isNull(value)`

Parameter:

- `value`: De Wert, wo uf `null` söll prüeft werde.

### Lokale Funktions-Import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // wahr
console.log(isNull(b)); // falsch

if (isNull(a)) {
  // a isch do null
}
```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.isNull(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [isNull](../_analysis/isNull.md)

<br>

---

<small>D Datei isch am 31 January 2026 at 15:39:18 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>