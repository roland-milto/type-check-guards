# isFloat

## Skildring

`isFloat` avgjer om ein gitt `value` er eit endeleg flyttal (eit `number` som ikkje er eit heiltal).

### Brukstilfelle

Valider talinndata frå brukarar der brøkverdiar er påkravde (t.d. prisar, målingar, satsar) og avvis heiltal, `NaN` og
uendelege verdiar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isFloat` når du berre treng å godta endelege, ikkje-heiltals numeriske inndata; han avviser heiltal og
> ikkje-endelege tal.

### Fordelar

- Returnerer `true` berre for endelege, ikkje-heiltals tal (utelèt heiltal, `NaN`, `Infinity` og `-Infinity`).
- Fungerer med alle inndatatypar (`unknown`) og snevrar trygt inn ved å sjekke `typeof value === "number"`.
- Brukar innebygde numeriske vakter (`Number.isInteger`, `Number.isFinite`) for føreseieleg åtferd.

## Bruk

### Syntaks

Funksjon:

- `isFloat(value)`

Parameter:

- `value`: Verdien som skal sjekkast om ho er eit flyttal.

### Lokal funksjonsimport

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // verdien er eit tal ved køyretid; han er endeleg og ikkje eit heiltal
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isFloat(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 16:09:03 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>