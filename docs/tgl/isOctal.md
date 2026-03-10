# isOctal

## Paglalarawan

Tinutukoy kung ang isang value ay isang valid na octal literal string (hal. `0o755`).

### Kaso ng paggamit

I-validate ang user input o mga value ng configuration na kailangang ipahayag bilang isang octal literal string (
halimbawa, mga file permission mode tulad ng `0o644`) bago i-parse o i-convert ang mga ito.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Ang `isOctal` ay isang type guard (`value is string`). Pagkatapos ng resultang `true`, ini-narrow ng TypeScript ang
> na-check na variable sa `string`.

### Mga bentahe

- Nagbibigay ng mahigpit na type guard: nagbabalik ng `true` lamang kapag ang input ay isang string na tumutugma sa
  format ng octal literal.
- Tinatanggihan ang mga walang lamang string at mga string na may leading/trailing whitespace (ASCII control/space),
  kaya nababawasan ang mga aksidenteng pagtutugma.
- Sinusuportahan ang opsyonal na sign at hindi sensitibo sa case para sa `0o`/`0O` na prefix.
- Mas maluwag para sa mga hindi string na input sa pamamagitan ng pagbabalik ng `false` sa halip na mag-throw.

## Paggamit

### Sintaks

Function:

- `isOctal(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // totoo
console.log(isOctal(b)); // totoo
console.log(isOctal(c)); // mali
console.log(isOctal(d)); // mali

if (isOctal(a)) {
  // ang a ay string dito
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isOctal(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 15:43:41 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>