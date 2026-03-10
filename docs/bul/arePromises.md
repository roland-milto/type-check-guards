# arePromises

## Описание

`arePromises` определя дали всички елементи в масив са инстанции на `Promise`.

### Случай на употреба

Валидирайте, че динамично изграден или предоставен отвън списък съдържа само промиси, преди да ги агрегиране (напр. с
`Promise.all`).

> **Бележка за потребителите на TypeScript:**
>
> Използвайте `arePromises`, за да валидирате `unknown[]` преди да извикате `Promise.all` или други операции,
> предназначени само за промиси; връща `false` за празни масиви.

### Предимства

- Гарантира, че всеки елемент е `Promise`, преди да продължите с логика, специфична за промисите.
- Връща `false` за непопълнени масиви, предотвратявайки двусмислени резултати при празни входни данни.
- Полезно като runtime guard при работа с `unknown[]` от външни източници.

## Използване

### Синтаксис

Функция:

- `arePromises(array)`

Параметри:

- `array`: Масивът, който да се провери за инстанции на Promise.

### Локален импорт на функция

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values е масив от инстанции на Promise по време на изпълнение
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глобален импорт на обект

За импорт на функциите като глобални методи на обект използвайте:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Следният метод ще бъде наличен глобално:

- `Type.arePromises(array)`

## Анализ на функции

Тук е документиран табличен анализ на резултата при подаване на различни параметри към
функциите: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Файлът беше генериран на 30 January 2026 at 23:47:40 (UTC) с използването на *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** от *
*[Roland Milto](https://roland-milto.de/)**.</small>