# areWeakSets

## Ibsa

Galteen tarree duwwaa hin taane taʼee elementiin hundi `WeakSet` taʼuu isaa sakattaʼa; haaluma kana qofaan `true`
deebisa.

### Haala itti fayyadama

Galtee yeroo raawwii (fakkeenyaaf API irraa, qindaaʼina irraa, yookaan odeeffannoo fayyadamaan kenne irraa)
mirkaneessuun, loojikii amala `WeakSet` irratti hirkatu itti fufuu dura tarree `WeakSet` instance duwwaa hin taane
qabaachuu kee mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areWeakSets` fayyadamuun galtee hin beekamne `WeakSet[]` jechuun dura mirkaneessi. Tarreewwan duwwaa fi tarree hin
> taane irratti `false` deebisa.

### Faayidaa

- Elementiin hunda tarree galtee keessaa hundi `WeakSet` taʼuu mirkaneessa.
- Tarreewwan duwwaa irratti `false` deebisa; kunis odeeffannoo dhabame irratti buʼaa “hundi sirrii” akka hin uumamne
  ittisa.
- Yeroo galteen tarree guutame hin taane taʼe ( `null` dabalatee) `false` deebisuudhaan nagaan kufa.
- `WeakSet` instance barbaadan hojiiwwan raawwachuu dura akka guarditti fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areWeakSets(array)`

Paaraameetaroota:

- `array`: Tarree `WeakSet` objectoota taʼuu isaa sakattaʼamu.

### Galchii faankishinii naannoo

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a tarree hin duwwaa hin taane kan fakkeenya WeakSet of keessaa qabu
}

console.log(areWeakSets(a)); // dhugaa
console.log(areWeakSets(b)); // soba
console.log(areWeakSets(c)); // soba
console.log(areWeakSets(null as unknown)); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areWeakSets(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 14:10:16 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>