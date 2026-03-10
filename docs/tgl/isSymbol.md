# isSymbol

## Paglalarawan

Tinutukoy ng `isSymbol` kung ang ibinigay na value ay may type na `symbol`, na nagbabalik ng `true` para sa mga symbol
at `false` kung hindi.

### Kaso ng paggamit

I-validate na ang isang `unknown` na value ay isang `symbol` bago gamitin ito bilang natatanging identifier, isang
registry key, o isang computed property key sa mga object at map.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isSymbol` para paliitin ang `unknown` tungo sa `symbol` bago tumawag ng mga function na may kinalaman sa
> symbol o gamitin ito bilang computed property key.

### Mga bentahe

- Nagbibigay ng simple at maaasahang runtime check para sa JavaScript `symbol` primitive type.
- Tumutulong na paliitin ang mga `unknown` na value bago gumamit ng mga API na partikular sa symbol o i-store ang mga
  ito bilang mga key.
- Iniiwasan ang mga false positive sa pamamagitan ng paggamit ng `typeof`, na siyang kanonikal na paraan para matukoy
  ang mga `symbol` na value.

## Paggamit

### Sintaks

Function:

- `isSymbol(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // ang input ay isang simbolo dito
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isSymbol(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:28:57 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>