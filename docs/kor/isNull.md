# isNull

## 설명

제공된 `value`가 `null`인지 여부를 판별합니다.

### 사용 사례

`null`이 의미 있는 센티널 값이며 `undefined` 또는 다른 값과 다르게 처리해야 하는 입력값이나 API 페이로드 필드를 검증할 때 `isNull`을 사용하세요.

> **TypeScript 사용자를 위한 참고:**
>
> `null`을 `undefined` 및 다른 falsy 값과 구분해야 할 때 `isNull`을 사용하세요. `null`인 경우에만 `true`를 반환합니다.

### 장점

- `undefined`와 혼동하지 않고 `null`을 정확하게 검사합니다.
- `unknown`을 허용하므로 어떤 입력 타입에 대해서도 신뢰성 있게 동작합니다.
- 단순하고 빠르며 부작용이 없습니다. `true` 또는 `false`만 반환합니다.

## 사용법

### 문법

함수:

- `isNull(value)`

매개변수:

- `value`: `null`인지 확인할 값입니다.

### 로컬 함수 임포트

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // true
console.log(isNull(b)); // false

if (isNull(a)) {
  // 여기서 a는 null입니다
}
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.isNull(value)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [isNull](../_analysis/isNull.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오후 3:39:45 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>