import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>useRef</h1>

      <h3>useLatest</h3>
      <ul>
        <li>
          <Link href="/uncontrolled-form-problem">
            Uncontrolled form problem
          </Link>
        </li>
        <li>
          <Link href="/uncontrolled-form-solution">
            Uncontrolled form solution
          </Link>
        </li>
      </ul>

      <h3>useWindowEvent</h3>
      <ul>
        <li>
          <Link href="use-windwon-event-example">useWindowEvent example</Link>
        </li>
      </ul>

      <h3>useIsMounted</h3>
      <ul>
        <li>
          <Link href="use-is-mounted-example">useIsMounted example</Link>
        </li>
      </ul>

      <h3>usePrevious</h3>
      <ul>
        <li>
          <Link href="use-previous-example">usePrevious example</Link>
        </li>
      </ul>

      <h3>useCustomCompare (Custom Deps Management)</h3>
      <ul>
        <li>
          <Link href="custom-deps-management-problem">
            Custom deps management problem
          </Link>
        </li>
        <li>
          <Link href="custom-deps-management-solution">
            Custom deps management solution
          </Link>
        </li>
      </ul>

      <br />

      <h1>useState</h1>

      <h3>useSafeState</h3>
      <ul>
        <li>
          <Link href="use-safe-state-example">useSafeState example</Link>
        </li>
      </ul>

      <h3>useSearchParamsState</h3>
      <ul>
        <li>
          <Link href="use-search-params-state-example">
            useSearchParamsState example
          </Link>
        </li>
      </ul>

      <h3>useLocalStorage, useSessionStorage</h3>
      <ul>
        <li>
          <Link href="use-local-session-storage-example">
            useLocalStorage, useSessionStorage example
          </Link>
        </li>
      </ul>

      <h3>useMap, useSet</h3>
      <ul>
        <li>
          <Link href="use-map-set-example">useMap, useSet example</Link>
        </li>
      </ul>

      <br />
      <br />

      <h3>useDebounce</h3>
      <ul>
        <li>
          <Link href="use-debounce-example">useDebounce example</Link>
        </li>
      </ul>

      <h3>useRafThrottle</h3>
      <ul>
        <li>
          <Link href="use-raf-throttle-example">useRafThrottle example</Link>
        </li>
      </ul>

      <h3>useOutsideClick</h3>
      <ul>
        <li>
          <Link href="use-outside-click-example">useOutsideClick example</Link>
        </li>
      </ul>

      <h3>useLayerManager</h3>
      <ul>
        <li>
          <Link href="modal-problem">Modal problem</Link>
        </li>
        <li>
          <Link href="modal-solution">Modal solution</Link>
        </li>
      </ul>

      <h3>useResizeObserver</h3>
      <ul>
        <li>
          <Link href="use-resize-observer-example">
            useResizeObserver example
          </Link>
        </li>
      </ul>

      <h3>useCombinedRef</h3>
      <ul>
        <li>
          <Link href="use-combined-ref-example">useCombinedRef example</Link>
        </li>
      </ul>
    </>
  );
}
