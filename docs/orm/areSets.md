# areSets

## Ibsa

Tarree hin duwwaa kenname keessatti instance `Set` qofa akka jiran mirkaneessa; yoo ta’e `true` deebisa, yoo hin ta’in
immoo `false` deebisa.

### Haala itti fayyadama

Gatiin tokko (fkn galtee fayyadamaa, JSON parsing, ykn API alaa irraa) tarree hin duwwaa kan wantoota `Set` ta’an akka
ta’e hojii irra oolchuu dura mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areSets` fayyadamiitii galtee hin beekamne (unknown) irra deebi’uun dura mirkaneessi; achiis elementii hunda irratti
> API `Set` (fkn `.size`, `.has`, `.add`) waamu.

### Faayidaa

- Yeroo galtee tarree hin duwwaa ta’ee fi elementiin hundi isaanii instance `Set` ta’an qofa `true` deebisa.
- Tarreewwan duwwaa irratti dogoggora irraa ittisuuf, yeroo tarreen elementii hin qabne `false` deebisa.
- Tokkoon tokkoon elementii irratti hojiiwwan addaa `Set` raawwachuu dura akka eegumsa yeroo raawwii (runtime guard)tti
  fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areSets(array)`

Paaraameetaroota:

- `array`: Tarree instance `Set` ta’uu isaanii mirkaneessuuf sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a yeroo hojii irratti tarree instance Set ti
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // soba
console.log(areSets(c)); // soba
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areSets(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areSets](../_analysis/areSets.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:14:50 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>