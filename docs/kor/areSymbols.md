# areSymbols

## 설명

입력이 요소가 채워진 배열이며 그 요소가 모두 심볼인지 확인하여 `true` 또는 `false`를 반환합니다.

### 사용 사례

구성 필드(예: 심볼로 표현된 고유 키 목록)가 `symbol[]`를 요구하는 API에서 사용되기 전에, 심볼만 포함하는 비어 있지 않은 배열인지 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areSymbols`를 사용해 알 수 없는 입력을 `symbol[]`로 취급하기 전에 검증하세요. 배열이 아닌 값과 빈 배열에 대해서는 `false`를 반환합니다.

### 장점

- 입력이 비어 있지 않은 배열이고 모든 요소가 심볼일 때에만 `true`를 반환합니다.
- 내부의 채워진 배열 검사로 배열이 아닌 값과 빈 배열을 거부하여 오탐을 방지합니다.
- 추가 처리 전에 심볼만으로 이루어진 목록을 검증하기 위한 런타임 타입 가드로 유용합니다.

## 사용법

### 문법

함수:

- `areSymbols(array)`

매개변수:

- `array`: 심볼 요소인지 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a는 런타임에서 심볼만으로 이루어진 배열이다
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areSymbols(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>이 파일은 2026년 1월 30일 오후 2:22:19 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>