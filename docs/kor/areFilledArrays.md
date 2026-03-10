# areFilledArrays

## 설명

`areFilledArrays`는 2차원 배열이 비어 있지 않고 모든 하위 배열이 비어 있지 않은지 확인합니다.

### 사용 사례

`areFilledArrays`를 사용해 표/행렬 형태의 입력(예: CSV 행, 그리드 데이터, 그룹화된 결과)을 검증하면, 최소 한 개의 하위 배열이 존재하고 어떤 하위 배열도 비어 있지 않다고 안전하게 가정할 수
있습니다.

> **TypeScript 사용자를 위한 참고:**
>
> 반복(iterating)하거나 인덱싱(indexing)하기 전에 2D 배열에 최소 한 개의 행이 있고 각 행에 최소 한 개의 요소가 있음을 보장해야 할 때 `areFilledArrays`를 사용하세요.

### 장점

- 외부 배열이 비어 있지 않고 모든 내부 배열도 비어 있지 않은지 검증하며, 두 조건이 모두 충족될 때만 `true`를 반환합니다.
- 요소 내용이 아니라 배열의 “채워짐” 상태만 확인하므로, 하위 배열 내부의 어떤 요소 타입(예: 숫자, 문자열, 객체, 중첩 배열)에도 동작합니다.
- 2차원 데이터를 처리하기 전에 가드로 사용하기에 적합한 간단한 불리언 결과(`true`/`false`)를 제공합니다.

## 사용법

### 문법

함수:

- `areFilledArrays(array)`

매개변수:

- `array`: 검사할 2차원 배열입니다.

### 로컬 함수 임포트

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // 참
console.log(areFilledArrays(b)); // 참
console.log(areFilledArrays(c)); // 참
console.log(areFilledArrays(d)); // 거짓
console.log(areFilledArrays(e)); // 거짓
console.log(areFilledArrays(f)); // 거짓

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areFilledArrays(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오전 11:57:27 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>