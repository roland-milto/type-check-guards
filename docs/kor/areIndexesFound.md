# areIndexesFound

## 설명

`areIndexesFound`는 값이 비어 있지 않은 배열이며 그 요소들이 모두 유효한 인덱스인지 확인하고, 그렇다면 `true`를, 그렇지 않으면 `false`를 반환합니다.

### 사용 사례

사용자 제공 데이터 또는 외부 데이터(예: 파싱된 JSON)가 인덱스 목록일 것으로 예상될 때, 이를 배열에 접근하거나 배열을 슬라이스하는 데 사용하기 전에 검증합니다.

> **TypeScript 사용자를 위한 참고:**
>
> `areIndexesFound`를 사용해 알 수 없는 입력을 배열 인덱스로 취급하기 전에 검증하세요. 이 함수는 빈 배열과 인덱스가 아닌 값을 포함한 배열에 대해 `false`를 반환합니다.

### 장점

- 입력이 채워진 배열이고 모든 요소가 유효한 인덱스일 때에만 `true`를 반환합니다.
- 빠르게 실패합니다: 인덱스가 아닌 요소를 만나자마자 `false`를 반환합니다.
- 값을 배열 위치나 오프셋으로 사용하기 전에 가드로 활용하기에 유용합니다.

## 사용법

### 문법

함수:

- `areIndexesFound(array)`

매개변수:

- `array`: 인덱스 준수 여부를 확인할 배열입니다.

### 로컬 함수 임포트

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // true
console.log(areIndexesFound(b)); // false
console.log(areIndexesFound(c)); // false

if (areIndexesFound(a)) {
  // 여기서 `a`는 인덱스로 채워진 배열임이 확인됩니다.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### 전역 객체 임포트

함수를 전역 객체 메서드로 임포트하려면 다음을 사용하세요:

```ts
import "@type-check/guards/register-global-object.mjs";
```

그 후 다음 메서드를 전역으로 사용할 수 있습니다:

- `Type.areIndexesFound(array)`

## 함수 분석

함수에 서로 다른 매개변수를 넣었을 때 생성되는 출력에 대한 표 형식 분석이 여기에 문서화되어 있습니다: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>이 파일은 2026년 1월 31일 오전 12:42:25 (UTC)
에 **[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**를
사용하여 **[Roland Milto](https://roland-milto.de/)**에 의해 생성되었습니다.</small>