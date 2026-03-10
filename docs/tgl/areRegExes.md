# areRegExes

## Paglalarawan

Sinusuri ng `areRegExes` kung ang isang value ay isang napunong array na naglalaman lamang ng mga `RegExp` object.

### Kaso ng paggamit

I-validate na ang isang configuration option (hal., isang listahan ng allow/deny patterns) ay isang hindi bakanteng
array ng mga regular expression bago ito gamitin para sa matching.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areRegExes` upang i-narrow ang `unknown` sa `RegExp[]` bago mag-iterate o mag-compose ng mga pattern.

### Mga bentahe

- Tinitiyak na ang isang value ay isang hindi bakanteng array kung saan ang bawat elemento ay isang instance ng
  `RegExp`.
- Nagbibigay ng simpleng boolean guard (`true`/`false`) para sa pag-validate ng input ng user o configuration.
- Tumutulong na maiwasan ang mga runtime error kapag ipinapalagay ng susunod na code na sinusuportahan ng lahat ng item
  ang mga regular-expression na operasyon.

## Paggamit

### Sintaks

Function:

- `areRegExes(array)`

Mga parameter:

- `array`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // ang patterns ay isang array ng RegExp dito
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areRegExes(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:22:08 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>