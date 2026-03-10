# areUndefined

## 설명

`areUndefined`는 제공된 배열의 모든 요소가 `undefined`인지 확인합니다.

### 사용 사례

선택적 결과 목록에 실제 값이 전혀 없고(`undefined`만) 포함되어 있는지 검증합니다. 예를 들어, 누락된 항목을 `undefined`로 표현하는 조회 결과를 매핑한 뒤 모든 조회가 실패했는지 확인하고 싶을
때 사용합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `unknown[]`에 `undefined` 값만 포함되어 있음을 단언해야 할 때 `areUndefined`를 사용하세요. 내부 `isFilledArray` 검사로 인해 빈 배열과 배열이 아니거나 유효하지 않은
> 입력에 대해서는 `false`를 반환합니다.

### 장점

- `isFilledArray`를 통해 채워진 배열을 요구하므로, 배열이 아닌 값과 빈 배열에 대해 `false`를 반환합니다.
- 일부만이 아니라 모든 요소가 `undefined`임을 보장하여 의도를 명확히 합니다.
- 알 수 없는 입력 컬렉션을 검증할 때 가드 스타일의 프레디케이트로 유용합니다.

## 사용법

### 문법

함수:

- `areUndefined(array)`

매개변수:

- `array`: `undefined` 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// 참고: 빈 배열에 대해서는 false를 반환합니다
const r4 = areUndefined([]); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areUndefined(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 1:56:27 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>