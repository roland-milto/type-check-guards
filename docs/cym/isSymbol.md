# isSymbol

## Disgrifiad

Mae `isSymbol` yn penderfynu a yw gwerth penodol o'r math `symbol`, gan ddychwelyd `true` ar gyfer symbolau a `false`
fel arall.

### Achos defnydd

Dilysu bod gwerth `unknown` yn `symbol` cyn ei ddefnyddio fel dynodwr unigryw, allwedd cofrestrfa, neu allwedd priodwedd
wedi'i chyfrifo mewn gwrthrychau a mapiau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isSymbol` i gulhau `unknown` i `symbol` cyn galw swyddogaethau sy'n gysylltiedig â symbolau neu ei
> ddefnyddio fel allwedd priodwedd wedi'i chyfrifo.

### Manteision

- Yn darparu gwiriad amser rhedeg syml a dibynadwy ar gyfer y math cyntefig JavaScript `symbol`.
- Yn helpu i gulhau gwerthoedd `unknown` cyn defnyddio APIau penodol i symbolau neu eu storio fel allweddi.
- Yn osgoi canlyniadau ffug-bositif drwy ddefnyddio `typeof`, sef y ffordd ganonaidd o ganfod gwerthoedd `symbol`.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isSymbol(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // mae input yn symbol yma
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isSymbol(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:26:26 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>