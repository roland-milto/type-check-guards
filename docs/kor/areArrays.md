# areArrays

## 설명

`areArrays`는 값이 항목이 모두 배열로 이루어진, 채워진 2차원 배열인지 여부를 판별합니다.

### 사용 사례

행/열 연산을 수행하기 전에 표 또는 행렬 형태의 입력(예: CSV 행, 그리드 데이터, 또는 그룹화된 목록)을 검증하는 데 `areArrays`를 사용하세요. 입력이 배열이 아니거나, 비어 있거나, 배열이 아닌
요소를 하나라도 포함하면 `false`를 반환합니다.

> **TypeScript 사용자를 위한 참고:**
>
> 중첩 배열을 순회하거나 인덱싱하기 전에 값이 비어 있지 않은 2D 배열이고 각 행이 배열인지 보장해야 할 때 `areArrays`를 사용하세요.

### 장점

- 입력이 비어 있지 않은 2차원 배열이며 모든 요소가 배열인지 검증합니다.
- 가드 및 조기 종료에 적합한 간단한 불리언 결과(`true`/`false`)를 반환합니다.
- 이후 코드가 중첩 배열 연산(예: 행 매핑)을 가정할 때 발생할 수 있는 런타임 오류를 방지하는 데 도움이 됩니다.

## 사용법

### 문법

함수:

- `areArrays(array)`

매개변수:

- `array`: 검사할 입력입니다.

### 로컬 함수 임포트

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value는 요소로 배열을 갖는 2차원 배열입니다
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areArrays(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>이 파일은 2026년 2월 6일 오후 1:40:15 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>