# areWeakMaps

## Paglalarawan

Sinusuri ng `areWeakMaps` kung ang isang value ay isang hindi bakanteng array kung saan bawat elemento ay isang
`WeakMap`, at nagbabalik lamang ng `true` sa kasong iyon at `false` kung hindi.

### Kaso ng paggamit

Beripikahin ang runtime data (hal., na-parse na JSON, mga input ng plugin, o maluwag ang pagta-type na configuration)
upang matiyak na ito ay isang hindi bakanteng array ng mga instance ng `WeakMap` bago mag-iterate at tumawag ng mga
method ng `WeakMap`; nagbabalik ng `false` kapag may anumang elementong hindi `WeakMap` o kapag walang laman ang array.

> **Paalala para sa mga gumagamit ng TypeScript:**
>
> Gamitin ang `areWeakMaps` upang beripikahin ang hindi kilalang input bago ito ituring bilang isang hindi bakanteng
`WeakMap[]`; nagbabalik ito ng `false` para sa mga walang lamang array.

### Mga bentahe

- Tinitiyak na bawat elemento sa ibinigay na array ay isang instance ng `WeakMap`.
- Nagbabalik ng `false` para sa mga walang lamang array, na pumipigil sa aksidenteng pagtanggap ng “walang data” bilang
  balidong input.
- Kapaki-pakinabang bilang guard bago magsagawa ng mga operasyong partikular sa `WeakMap` sa lahat ng item.

## Paggamit

### Sintaks

Function:

- `areWeakMaps(array)`

Mga parameter:

- `array`: Ang array na susuriin para sa mga instance ng `WeakMap`.

### Lokal na pag-import ng function

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // ang list ay isang hindi bakanteng array ng mga instance ng WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // hindi isang hindi bakanteng WeakMap[]
}

```

### Global na pag-import ng object

Upang i-import ang mga function bilang mga global na object method, gamitin:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Pagkatapos, ang sumusunod na method ay magiging available nang global:

- `Type.areWeakMaps(array)`

## Pagsusuri ng function

Dito ay nakadokumento ang isang talahanayang pagsusuri ng output na nabubuo kapag naglalagay ng iba’t ibang parameter sa
mga function: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Ang file ay nabuo noong 30 January 2026 at 13:39:47 (UTC) gamit ang *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ni *
*[Roland Milto](https://roland-milto.de/)**.</small>