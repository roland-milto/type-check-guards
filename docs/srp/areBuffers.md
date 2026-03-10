# areBuffers

## Опис

`areBuffers` проверава да ли је дата вредност непразан, попуњен низ у ком је сваки елемент `Buffer`, враћајући `true`
ако јесте и `false` у супротном.

### Случај употребе

Валидирајте долазне низове делова (нпр. из стримова, отпремања датотека или мрежних пакета) да бисте осигурали да су сви
делови `Buffer` инстанце пре конкатенације, декодирања или прослеђивања криптографским или функцијама за бинарну обраду.

> **Напомена за TypeScript кориснике:**
>
> Користите `areBuffers` да валидирате `unknown[]` пре позивања API-ја специфичних за Buffer као што је `Buffer.concat`,
> обезбеђујући да функција врати `true` само када је сваки елемент `Buffer`.

### Предности

- Обезбеђује да је сваки елемент у улазу инстанца Node.js `Buffer`, враћајући `true` само када се цео низ поклапа.
- Рано одбацује неважеће улазе захтевајући непразан, попуњен низ; враћа `false` за празне низове или вредности које нису
  низови.
- Корисно као заштитна провера пре извршавања операција које раде само са баферима (нпр. конкатенација, хеширање,
  бинарни протоколи).

## Употреба

### Синтакса

Функција:

- `areBuffers(array)`

Параметри:

- `array`: Низ који треба проверити да ли садржи инстанце бафера.

### Локални увоз функције

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areBuffers(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Датотека је генерисана 31 January 2026 at 16:27:20 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>