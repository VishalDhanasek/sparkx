import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="text-center m-20">
        <h2 className="text-5xl m-10">There was a problem</h2>
        <p className="text-3xl m-10">
          Couldn't Find the page you are looking for{" "}
        </p>
        <Link href="/" className="btn-sm text-white bg-gradient1 ml-3">
          <span>Home</span>
          <svg
            className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
              fillRule="nonzero"
            />
          </svg>
        </Link>
      </main>
    </>
  );
}
