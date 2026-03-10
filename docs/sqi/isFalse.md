# isFalse

## Përshkrim

`isFalse` kontrollon nëse një vlerë e dhënë është rreptësisht e barabartë me literalën booleane `false`.

### Rast përdorimi

Validoni të dhëna të panjohura (p.sh., nga JSON, parametrat e query-t, ose hyrja e përdoruesit) ku vetëm vlera booleane
e shprehur qartë `false` duhet të trajtohet si një flamur i vlefshëm, dhe gjithçka tjetër duhet të refuzohet.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `isFalse` kur duhet të pranoni vetëm literalën `false` dhe të refuzoni të gjitha vlerat e tjera “falsy”;
> kthen `true` vetëm për `value === false`.

### Përparësi

- Ofron një kontroll të rreptë për literalën booleane `false` pa konvertim (coercion).
- Ndihmon të dallohet `false` nga vlera të tjera “falsy” si `0`, `""`, `null` dhe `undefined`.
- Përmirëson lexueshmërinë duke e bërë qëllimin të qartë kur validohet hyrje e panjohur.

## Përdorim

### Sintaksë

Funksion:

- `isFalse(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input është saktësisht false këtu
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isFalse(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 16:44:31 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>