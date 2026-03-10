# isString

## Përshkrim

`isString` përcakton nëse një vlerë e dhënë është një string.

### Rast përdorimi

Validoni inputin e përdoruesit, fushat e payload-it të API-së, ose vlerat e konfigurimit në kohë ekzekutimi për të
siguruar që një vlerë është string përpara aplikimit të operacioneve mbi stringje (p.sh., prerje e hapësirave, ndarje,
konvertim i shkronjave).

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `isString` për të validuar vlera `unknown` ose me tipizim të lirshëm përpara thirrjes së metodave të
> stringut; kthen `true` vetëm kur `typeof value === "string"`.

### Përparësi

- Kontroll i thjeshtë dhe i shpejtë duke përdorur `typeof`.
- Kthen një rezultat boolean të parashikueshëm: `true` për stringjet, përndryshe `false`.
- Funksionon si për stringje bosh ashtu edhe për stringje jo bosh.
- I dobishëm si një mbrojtje e lehtë në kohë ekzekutimi përpara kryerjes së operacioneve specifike për stringje.

## Përdorim

### Sintaksë

Funksion:

- `isString(value)`

Parametra:

- `value`: Vlera që do të testohet për tipin string.

### Import lokal i funksionit

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input është një varg këtu
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isString(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isString](../_analysis/isString.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:15:43 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>