import { ActionArgs, json, V2_MetaFunction } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { validateEmail } from "~/utils";


export const meta: V2_MetaFunction = () => [{ title: "This Week in GraphQL" }];

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!validateEmail(email)) {
    return json({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  return { errors: "" };
};

export default function Index() {
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <main className="relative bg-white font-rubik sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-4 sm:pt-2">
        <div className="relative px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-3 lg:px-4 lg:pb-4 lg:pt-4">
          <div className="">
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
          </div>
          <p className="mx-auto mt-16 max-w-lg text-center text-3xl font-extrabold italic sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Handpicked GraphQL updates, delivered to your inbox.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl sm:max-w-3xl">
            Stay up to date with events, learning resources, and recent
            developments in the GraphQL community.
          </p>
          <div className="mx-auto mt-10 sm:flex sm:justify-center">
            <Form method="post" className="w-3/4">
              <div className="w-full sm:mx-auto sm:inline-grid sm:grid-cols-3 sm:gap-0 sm:space-y-0">
                <div className="col-span-2">
                  <div className="">
                    <input
                      ref={emailRef}
                      id="email"
                      required
                      autoFocus={true}
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      aria-invalid={
                        actionData?.errors?.email ? true : undefined
                      }
                      aria-describedby="email-error"
                      className="border-gray-500 w-full rounded-bl-lg rounded-tl-lg border px-2 py-3 text-lg"
                    />
                    {actionData?.errors?.email ? (
                      <div className="text-red-700 pt-1" id="email-error">
                        {actionData.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <Link
                  to="/login"
                  className="hover:bg-rhodamine-600 flex items-center justify-center rounded-br-lg rounded-tr-lg bg-rhodamine px-3 py-2 text-2xl font-medium text-white"
                >
                  Subscribe!
                </Link>
              </div>
              <p>
                Receive a weekly newsletter. Easy to unsubscribe and no spam,
                promise.
              </p>
            </Form>
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
              <li className="text-right">
                <Link to="/issues" className="hover:text-rhodamine">
                  View More →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
