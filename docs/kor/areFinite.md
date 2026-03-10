# areFinite

## 설명

`areFinite`는 값이 비어 있지 않은 배열이며 그 요소가 모두 유한한 숫자인지 확인하고, 그렇다면 `true`를, 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

계산을 수행하기 전에 숫자 입력 배열(예: 차트 시리즈, 좌표 목록, 측정 샘플)을 검증하여, 모든 값이 유한한 숫자일 때에만 결과가 `true`가 되도록 보장합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 배열이 비어 있지 않고 유한한 숫자만 포함하는지 보장해야 할 때 `areFinite`를 사용하세요. 빈 배열과 `NaN` 또는 무한대가 포함된 배열에 대해서는 `false`를 반환합니다.

### 장점

- 입력이 비어 있지 않은 배열이고 모든 요소가 유한한 숫자일 때에만 `true`를 반환합니다.
- 각 요소에 대해 `isFinite` 검사를 사용하여 `Infinity`, `-Infinity`, `NaN`을 거부합니다.
- 가드 및 검증 흐름에 적합한 간단한 불리언 결과(`true`/`false`)를 제공합니다.

## 사용법

### 문법

함수:

- `areFinite(array)`

매개변수:

- `array`: 모든 요소의 유한성을 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // 참
console.log(areFinite(b)); // 거짓
console.log(areFinite(c)); // 거짓

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areFinite(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 4:35:34 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>