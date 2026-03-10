# isFilledArray

## Опис

Проверава да ли је `value` низ са бар једним елементом, враћајући `true` или `false`.

### Случај употребе

Користите `isFilledArray` да валидирате долазне податке (нпр. API payload-ове, вредности из форми, конфигурацију) пре
итерације, приступа првом елементу или примене логике која захтева бар једну ставку.

> **Напомена за TypeScript кориснике:**
>
> `isFilledArray` је runtime guard који враћа булов; не сузава типове елемената осим што потврђује да је низ непразан.

### Предности

- Једноставна, брза провера непразног низа помоћу `Array.isArray` и провере дужине.
- Помаже да се избегну грешке у извршавању када код претпоставља да низ има бар један елемент.
- Јасан булов резултат: враћа `true` за непразне низове и `false` у супротном.

## Употреба

### Синтакса

Функција:

- `isFilledArray(value)`

Параметри:

- `value`: Вредност коју треба проверити да ли је непразан низ.

### Локални увоз функције

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input je neprazan niz u toku izvršavanja
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Глобални увоз објекта

За увоз функција као глобалних метода објекта користите:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следећи метод ће затим бити доступан глобално:

- `Type.isFilledArray(value)`

## Анализа функција

Овде је документована табеларна анализа излаза који настаје при уносу различитих параметара у
функције: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Датотека је генерисана 6 February 2026 at 11:48:52 (UTC) уз коришћење *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** од *
*[Roland Milto](https://roland-milto.de/)**.</small>