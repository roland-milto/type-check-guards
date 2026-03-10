# isTrue

## Përshkrim

`isTrue` përcakton nëse një vlerë e dhënë është rreptësisht e barabartë me `true`.

### Rast përdorimi

Përdor `isTrue` për të validuar flamuj, feature toggles ose vlera konfigurimi ku duhet të pranohet vetëm literali `true`
dhe gjithçka tjetër duhet të trajtohet si `false`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isTrue` kur duhet të pranosh vetëm literalin boolean `true`, jo thjesht vlera truthy.

### Përparësi

- Ofron një kontroll të rreptë për literalin boolean `true` (pa koercion).
- Ndihmon të dallohet `true` nga vlerat truthy si `1`, `"true"` ose `{}`.
- Sjellje e thjeshtë dhe e parashikueshme, e përshtatshme për guard-e dhe pipeline-e validimi.

## Përdorim

### Sintaksë

Funksion:

- `isTrue(value)`

Parametra:

- `value`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // e vërtetë
const b = isTrue(1);         // e rreme
const c = isTrue("true");   // e rreme

if (isTrue(a)) {
  // a është e vërtetë këtu
}
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isTrue(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:46:14 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>