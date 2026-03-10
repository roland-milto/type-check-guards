# arePromises

## Paglalarawan

Tinutukoy ng `arePromises` kung lahat ng elemento sa isang array ay mga instance ng `Promise`.

### Kaso ng paggamit

I-validate na ang isang listahang dinamikong binuo o ibinigay mula sa labas ay naglalaman lamang ng mga promise bago
pagsama-samahin ang mga ito (hal., gamit ang `Promise.all`).

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `arePromises` upang i-validate ang `unknown[]` bago tawagin ang `Promise.all` o iba pang operasyong para
> sa promise lamang; nagbabalik ito ng `false` para sa mga array na walang laman.

### Mga bentahe

- Tinitiyak na ang bawat elemento ay isang `Promise` bago ka magpatuloy sa lohikang partikular sa promise.
- Nagbabalik ng `false` para sa mga array na walang laman, na pumipigil sa malabong resulta para sa mga input na walang
  laman.
- Kapaki-pakinabang bilang runtime guard kapag nagtatrabaho sa `unknown[]` mula sa mga panlabas na pinagmulan.

## Paggamit

### Sintaks

Function:

- `arePromises(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga instance ng Promise.

### Lokal na pag-import ng function

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // ang values ay isang array ng mga instance ng Promise sa runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.arePromises(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 23:50:10 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>