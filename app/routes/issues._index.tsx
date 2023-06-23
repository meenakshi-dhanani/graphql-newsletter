import * as node from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: node.V2_MetaFunction = () => [{ title: "This Week in GraphQL" }];


export default function IssuesRoute() {

  return (
    <main className="relative bg-white font-rubik sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-4 sm:pt-2">
        <div className="relative px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-3 lg:px-4 lg:pb-4 lg:pt-4">
          <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            <Link to="/" className="block uppercase text-rhodamine drop-shadow-md">
              This Week in GraphQL
            </Link>
          </h1>
          <div className="mt-2 flex w-full items-center justify-center">
            <span className="pr-1 text-2xl text-rhodamine">from</span>
            <a href="https://graphql.org">
              <img
                src="./GraphQL Foundation Logo.svg"
                alt="GraphQL Foundation"
                className="m-0 h-1/2 w-3/4 max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </div>
          <div className="mx-auto mt-12 w-3/4">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-rhodamine sm:text-3xl lg:text-5xl">
              Past Issues
            </h2>
            <ul className="text-lg">
              {[
                {
                  title: "This Week in GraphQL 10",
                  number: 10,
                  publishedAt: "21 JUN 2023",
                },
                {
                  title: "This Week in GraphQL 9",
                  number: 9,
                  publishedAt: "14 JUN 2023",
                },
                {
                  title: "This Week in GraphQL 8",
                  number: 8,
                  publishedAt: "07 JUN 2023",
                },
              ].map((issue) => (
                <li key="" className="w-full sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
                  <span>{issue.publishedAt}</span>
                  <Link
                    to={`/issues/${issue.number}`}
                    className="text-right hover:text-rhodamine"
                  >
                    {issue.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
