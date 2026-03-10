# isBoolean

## Paglalarawan

Tinutukoy kung ang ibinigay na value ay isang `boolean`.

### Kaso ng paggamit

I-validate ang external o untyped na data (hal., environment variables, JSON payloads, query parameters) para matiyak na
ang value ay isang `boolean` bago ito gamitin sa conditional logic.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isBoolean` para i-narrow ang `unknown` tungo sa `boolean` bago mag-apply ng mga boolean operation.

### Mga bentahe

- Simple at mabilis na runtime check gamit ang `typeof`.
- Tumutulong mag-validate ng hindi kilalang input bago ang boolean-specific na lohika.
- Nagbabalik ng predictable na `boolean` na resulta (`true`/`false`).

## Paggamit

### Sintaks

Function:

- `isBoolean(value)`

Mga parameter:

- `value`: Ang value na iche-check.

### Lokal na pag-import ng function

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // boolean ang input dito
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isBoolean(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 14:38:04 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>