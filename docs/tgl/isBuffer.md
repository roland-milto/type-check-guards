# isBuffer

## Paglalarawan

Sinusuri kung ang isang value ay Node.js `Buffer` at nagbabalik ng `true` o `false`.

### Kaso ng paggamit

I-validate ang mga input sa runtime (hal., mga API payload, file data, o message buffer) para matiyak na ang isang value
ay `Buffer` bago ito iproseso, at mapagkakatiwalaang makakuha ng `false` kapag tumatakbo sa labas ng Node.js kung saan
maaaring hindi umiiral ang `Buffer`.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `isBuffer` para i-narrow ang mga `unknown` na value tungo sa `Buffer` bago tumawag ng mga method na
> partikular sa Buffer.

### Mga bentahe

- Ligtas na natutukoy ang mga instance ng Node.js `Buffer` gamit ang `Buffer.isBuffer`.
- Nagbabalik ng `false` sa mga environment kung saan hindi available ang `Buffer`, kaya naiiwasan ang mga runtime error.
- Gumagana sa `unknown` na input, kaya angkop ito para sa runtime validation at type narrowing.

## Paggamit

### Sintaks

Function:

- `isBuffer(value)`

Mga parameter:

- `value`: Ang value na susuriin.

### Lokal na pag-import ng function

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // totoo
console.log(isBuffer(b)); // mali

if (isBuffer(a)) {
  // ang a ay isang Buffer dito
  console.log(a.toString("utf8"));
}
```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.isBuffer(value)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Ang file ay nabuo noong 31 January 2026 at 16:33:32 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>