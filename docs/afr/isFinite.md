# isFinite

## Beskrywing

Bepaal of 'n gegewe `value` 'n eindige `number` is.

### Gebruikscenario

Gebruik `isFinite` om onbekende insette (bv. vanaf JSON, vorms of API's) te valideer voordat numeriese berekeninge
uitgevoer word, en sodoende te verseker dat die waarde 'n werklike, eindige getal is.

> **Wenk vir TypeScript-gebruikers:**
>
> `isFinite` gee `true` slegs vir eindige getalle; dit gee `false` vir `NaN`, `Infinity` en enige waarde wat nie 'n
> getal is nie.

### Voordele

- Gebruik die ingeboude `Number.isFinite` vir 'n betroubare eindigheidstoets.
- Gee `true` slegs vir eindige getalle; gee `false` vir `NaN`, `Infinity` en insette wat nie getalle is nie.
- 'n Eenvoudige, newe-effekvrye predikaat wat geskik is vir validering en beskermingslogika.

## Gebruik

### Sintaksis

Funksie:

- `isFinite(value)`

Parameters:

- `value`: Die waarde om vir eindigheid te kontroleer.

### Plaaslike funksie-invoer

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers is: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value is hier 'n eindige getal
  const doubled = value * 2;
  console.log(doubled);
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isFinite(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:28:51 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>