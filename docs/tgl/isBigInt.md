# isBigInt

## Paglalarawan

Sinusuri ng `isBigInt` kung ang ibinigay na value ay may uri na `bigint`, nagbabalik ng `true` para sa mga primitibong
BigInt at `false` kung hindi.

### Kaso ng paggamit

I-validate at paliitin ang mga value na galing sa mga source na walang type (hal., JSON parsing, user input, external
APIs) bago magsagawa ng mga kalkulasyong partikular sa BigInt o i-store ang mga ito sa mga field na para lang sa BigInt.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isBigInt` para paliitin ang `unknown` tungo sa `bigint` bago gumawa ng BigInt arithmetic (hal., `+`, `*`)
> na nangangailangan ng mga BigInt operand.

### Mga bentahe

- Nagbibigay ng simple at maaasahang runtime check para sa primitibong uri na `bigint`.
- Tumutulong na paliitin ang mga `unknown` na value bago magsagawa ng mga operasyong para lang sa BigInt.
- Iniiwasan ang mga false positive: ang mga karaniwang number, string, at iba pang uri ay nagbabalik ng `false`.

## Paggamit

### Sintaks

Function:

- `isBigInt(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // totoo
console.log(isBigInt(10));  // mali
console.log(isBigInt("10")); // mali
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isBigInt(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 23:33:32 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>