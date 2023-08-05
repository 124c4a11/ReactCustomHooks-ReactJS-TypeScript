import Link from 'next/link';

export default function Home() {
  return (
    <>
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
    </>
  );
}
