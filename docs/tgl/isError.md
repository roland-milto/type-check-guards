# isError

## Paglalarawan

Sinusuri kung ang ibinigay na `value` ay instance ng `Error`.

### Kaso ng paggamit

Gamitin ang `isError` kapag nakatanggap ka ng `unknown` na value (tulad ng mula sa isang `catch` block, isang callback,
o isang external library) at kailangan mong ligtas na matukoy kung ito ay isang `Error` bago basahin ang `message`,
`name`, o `stack`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isError` para bantayan ang mga `unknown` na value (hal., mula sa `catch`) bago ituring ang mga ito bilang
> isang `Error`.

### Mga bentahe

- Nagbibigay ng simpleng runtime check kung ang isang value ay instance ng `Error`.
- Tumutulong na paliitin ang mga unknown input bago i-access ang mga property ng `Error` tulad ng `message` o `stack`.
- Binabawasan ang panganib ng runtime exceptions kapag humahawak ng mga value mula sa `catch`, mga external API, o mga
  source na walang type.

## Paggamit

### Sintaks

Function:

- `isError(value)`

Mga parameter:

- `value`: Ang value na susuriin laban sa `Error` type.

### Lokal na pag-import ng function

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isError(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isError](../_analysis/isError.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 12:47:21 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>