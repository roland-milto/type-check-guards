# areErrors

## Paglalarawan

Sinusuri kung ang isang array ay hindi walang laman at naglalaman lamang ng mga `Error` object, at nagbabalik ng `true`
o `false`.

### Kaso ng paggamit

I-validate na ang isang runtime-provided na `unknown[]` (hal., pinagsama-samang mga failure, mga resulta ng validation,
o deserialized na data) ay isang hindi walang lamang listahan ng mga `Error` object bago mag-iterate, mag-log, o muling
magtapon (rethrow).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Nagbabalik ang `areErrors` ng `true` lamang para sa isang punô na array kung saan bawat item ay isang `Error`;
> nagbabalik ito ng `false` para sa isang walang lamang array o kung may anumang elementong hindi isang `Error`.

### Mga bentahe

- Tinitiyak na bawat elemento ay isang instance ng `Error`, na nagbibigay-daan sa ligtas na paghawak ng error at
  pag-log.
- Tinatanggihan ang mga walang lamang array, na pumipigil sa aksidenteng mga estado na “walang error” na maituring na
  mga balidong listahan ng error.
- Mahusay gamitin bilang runtime guard kapag humaharap sa mga input na `unknown[]` (hal., mula sa mga API o mga `catch`
  block).

## Paggamit

### Sintaks

Function:

- `areErrors(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga `Error` object.

### Lokal na pag-import ng function

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // ang value ay isang hindi bakanteng array ng mga Error object
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areErrors(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Ang file ay nabuo noong 6 February 2026 at 12:35:53 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>