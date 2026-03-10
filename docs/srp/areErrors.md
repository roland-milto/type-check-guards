# areErrors

## Опис

Проверава да ли је низ непразан и да садржи само `Error` објекте, враћајући `true` или `false`.

### Случај употребе

Потврдите да је `unknown[]` обезбеђен у runtime-у (нпр. агрегирани неуспеси, резултати валидације или десеријализовани
подаци) непразна листа `Error` објеката пре итерације, логовања или поновног бацања.

> **Напомена за TypeScript кориснике:**
>
> `areErrors` враћа `true` само за попуњен низ у ком је свака ставка `Error`; враћа `false` за празан низ или ако било
> који елемент није `Error`.

### Предности

- Обезбеђује да је сваки елемент инстанца `Error`, омогућавајући безбедно руковање грешкама и логовање.
- Одбацује празне низове, спречавајући да се случајна стања „без грешака“ третирају као важеће листе грешака.
- Добро функционише као runtime заштита при раду са улазима типа `unknown[]` (нпр. из API-ја или `catch` блокова).

## Употреба

### Синтакса

Функција:

- `areErrors(array)`

Параметри:

- `array`: Низ који треба проверити на `Error` објекте.

### Локални увоз функције

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value je neprazan niz objekata tipa Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.areErrors(array)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 12:35:36 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>