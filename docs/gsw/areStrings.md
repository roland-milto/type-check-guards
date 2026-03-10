# areStrings

## Bschrybig

`areStrings` prüeft, öb es Array nöd läär isch und alli sini Element Strings sind, und git nume i dem Fall `true` zrugg.

### Aawändig

Externi oder vom User gliefereti Date (z.B. Query-Params, JSON-Payloads, CSV-Fälder) validiere, demit du vor em
Verarbeite sicher e nöd-läärä Lischt vo Strings hesch.

> **Hinwiis für TypeScript-Nutzer:**
>
> Bruuch `areStrings`, zum unbekannti Arrays z validiere, bevor du Logik aawändisch, wo nume für Strings isch; es git
> für läärä Arrays `false` zrugg.

### Vorteil

- Stellt sicher, dass jedes Element e String isch, und lehnt Arrays mit gmischtä Type ab, indem `false` zrugggeh wird.
- Lehnt läärä Arrays ab, drum zeigt `true` nume e nöd-läärä Lischt vo Strings aa.
- Nützlich als schnelli Runtime-Absicherig, bevor du Operatione machsch, wo nume uf Strings aawändbar sind (z.B. `trim`,
  `toLowerCase`).

## Verwendig

### Syntax

Funktion:

- `areStrings(value)`

Parameter:

- `value`: Expected type `string[]`.

### Lokale Funktions-Import

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input isch zur Laufzyyt es nöd-läärs string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globale Objekt-Import

Zum d’Funktione als globali Objekt-Methodä z’importiere, bruchsch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Denn isch d’folgend Methodä global verfüegbar:

- `Type.areStrings(value)`

## Funktionsanalys

E tabellarischi Analys, was für e Usgaab entstoht, wänn mer unterschidlichi Parameter i d’Funktione iisetzt, isch do
dokumentiert: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>D Datei isch am 30 January 2026 at 13:18:16 (UTC) unter dr Verwendig vom *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** vo *
*[Roland Milto](https://roland-milto.de/)** erstellt worde.</small>