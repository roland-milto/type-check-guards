# arePrimitives

## Përshkrim

`arePrimitives` vlerëson nëse të gjithë elementët në një varg të dhënë, jo bosh, janë tipe primitive.

### Rast përdorimi

Vërteto që të dhënat hyrëse (p.sh., parametrat e query-t, vlerat e rreshtit CSV, ose një listë ID-sh/etiketash)
përmbajnë vetëm vlera primitive përpara serializimit, hashimit, regjistrimit (logging), ose kalimit te API-t që nuk
duhet të marrin objekte.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `arePrimitives` kur duhet të sigurohesh që një `unknown[]` përmban vetëm vlera primitive (string, number,
> bigint, boolean, symbol, undefined, ose null) përpara përpunimit të mëtejshëm.

### Përparësi

- Kthen `true` vetëm kur çdo element është një vlerë primitive, duke e bërë një mbrojtës të rreptë për vargje “pa
  objekte/funksione”.
- Dështon shpejt: kthen `false` sapo të gjendet një element jo-primtiv.
- Kthen gjithashtu `false` për jo-vargje dhe për vargje bosh (përmes kontrollit të vargut të mbushur), duke parandaluar
  pranimin aksidental të inputit të pavlefshëm.

## Përdorim

### Sintaksë

Funksion:

- `arePrimitives(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente të tipit primitiv.

### Import lokal i funksionit

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // e vërtetë
const r2 = arePrimitives(b); // e vërtetë
const r3 = arePrimitives(c); // e rreme
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.arePrimitives(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 00:06:34 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>