import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome to Shop List!
      <p>Start you shop and start selling within minutes!</p>
      <Link href="/onboarding">Start onboarding now</Link>
    </div>
  );
}
