# isBigInt

## Përshkrim

`isBigInt` kontrollon nëse një vlerë e dhënë është e tipit `bigint`, duke kthyer `true` për primitivët BigInt dhe
`false` përndryshe.

### Rast përdorimi

Valido dhe ngushto vlerat që vijnë nga burime pa tipizim (p.sh., parsimi i JSON, inputi i përdoruesit, API-të e jashtme)
përpara se të kryesh llogaritje specifike për BigInt ose t’i ruash ato në fusha vetëm për BigInt.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isBigInt` për të ngushtuar `unknown` në `bigint` përpara se të bësh aritmetikë BigInt (p.sh., `+`, `*`), e
> cila kërkon operandë BigInt.

### Përparësi

- Ofron një kontroll të thjeshtë dhe të besueshëm në kohë ekzekutimi për tipin primitiv `bigint`.
- Ndihmon në ngushtimin e vlerave `unknown` përpara kryerjes së operacioneve vetëm për BigInt.
- Shmang pozitivët e rremë: numrat e zakonshëm, vargjet dhe tipet e tjera kthejnë `false`.

## Përdorim

### Sintaksë

Funksion:

- `isBigInt(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar.

### Import lokal i funksionit

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // e vërtetë
console.log(isBigInt(10));  // e rreme
console.log(isBigInt("10")); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isBigInt(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:33:20 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>