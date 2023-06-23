import { ActionArgs, json, V2_MetaFunction } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { useRef } from "react";
import { validateEmail } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "This Week in GraphQL 10" }];

const issue = {
  publishedAt: "21 JUN 2023",
  title: "This Week in Rust 10",
  number: 10,
};
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!validateEmail(email)) {
    return json({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  return { errors: "" };
};
export default function IssueRoute() {
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
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
                src="../GraphQL Foundation Logo.svg"
                alt="GraphQL Foundation"
                className="m-0 h-1/2 w-3/4 max-w-[12rem] md:max-w-[16rem]"
              />
            </a>
          </div>
          <div className="mx-auto mt-12 w-3/4">
            <div className="w-full text-2xl text-rhodamine sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-3 sm:space-y-0">
              <span>{issue.publishedAt}</span>
              <Link
                to={`/issues/${issue.number}`}
                className="text-right hover:text-rhodamine"
              >
                {issue.title}
              </Link>
            </div>
            <div className="text-xl">
              <p className="mt-4">
                Hello and welcome to another issue of This Week in GraphQL!
                <a href="https://www.graphql.org/"> GraphQL</a> is empowering
                everyone to build reliable and efficient software. This is a
                weekly summary of its progress and community. Want something
                mentioned? Tag us at{" "}
                <a href="https://twitter.com/ThisWeekInGraphQL">
                  @ThisWeekInGraphQL
                </a>{" "}
                on Twitter or{" "}
                <a href="https://mastodon.social/@thisweekingraphql">
                  @ThisWeekinGraphQL
                </a>{" "}
                on mastodon.social, or{" "}
                <a href="https://github.com/graphql/this-week-in-graphql">
                  send us a pull request
                </a>
                . Want to get involved?{" "}
                <a href="https://github.com/graphql/graphql/blob/master/CONTRIBUTING.md">
                  We love contributions
                </a>
                .
              </p>
              <p className="mt-8">
                <em>This Week in GraphQL</em> is openly developed{" "}
                <a href="https://github.com/graphql/this-week-in-graphql">
                  on GitHub
                </a>{" "}
                and archives can be viewed at{" "}
                <a href="https://this-week-in-graphql.org/">
                  this-week-in-graphql.org
                </a>
                . If you find any errors in this week's issue,{" "}
                <a href="https://github.com/graphql/this-week-in-graphql/pulls">
                  please submit a PR
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 w-3/4 text-xl">
            <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-rhodamine sm:text-2xl lg:text-3xl">
              Updates from GraphQL community
            </h3>
            <h4 className="text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Official
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Project/Tooling Updates
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Observations/Thoughts
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Miscellaneous
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h3 className="mb-6 mt-6 text-2xl font-extrabold tracking-tight text-rhodamine sm:text-2xl lg:text-3xl">
              Call for Participation
            </h3>
            <p>
              Always wanted to contribute to open-source projects but did not
              know where to start? Every week we highlight some tasks from the
              Rust community for you to pick and get started!
            </p>
            <ul className="mt-4 list-disc pl-8">
              <li>
                <Link to="">Reviewers for the GraphQLConf submissions</Link>
              </li>
            </ul>
            <p className="mt-4">
              If you are a GraphQL project owner and are looking for
              contributors, please submit tasks here.
            </p>

            <h3 className="mb-6 mt-6 text-2xl font-extrabold tracking-tight text-rhodamine sm:text-2xl lg:text-3xl">
              Updates from the GraphQL Projects
            </h3>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              GraphiQL
            </h4>
            <p className="mb-4">
              410 pull requests were merged in the last week
            </p>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              GraphQL-spec
            </h4>
            <p className="mb-4">
              410 pull requests were merged in the last week
            </p>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
              <li>
                <Link to="">Introducing the GraphQL TSC</Link>
              </li>
            </ul>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Final Comment Period
            </h4>
            <p className="mb-4">
              Every week, the team announces the 'final comment period' for RFCs
              and key PRs which are reaching a decision. Express your opinions
              now.
            </p>

            <h5 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-xl">
              RFCs
            </h5>
            <ul className="list-disc pl-8">
              <li>No RFCs entered Final Comment Period this week.</li>
            </ul>

            <h5 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-xl">
              Tracking Issues and PRs
            </h5>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">Tracking issue for RFC</Link>
              </li>
            </ul>

            <h5 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-xl">
              New and Updated RFCs
            </h5>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">[new]Tracking issue for RFC</Link>
              </li>
            </ul>

            <h3 className="mb-6 mt-6 text-2xl font-extrabold tracking-tight text-rhodamine sm:text-2xl lg:text-3xl">
              Upcoming Events
            </h3>
            <ul className="list-disc pl-8">
              <li>
                <Link to="">GraphQL Meetup Amsterdam</Link>
              </li>
              <li>
                <Link to="">GraphQLConf SFO</Link>
              </li>
            </ul>
            <p className="mt-4">
              If you are running a Rust event please add it to the calendar to
              get it mentioned here. Please remember to add a link to the event
              too. Email the GraphQL Community Team for access.
            </p>

            <h4 className="mt-4 text-xl font-extrabold tracking-tight text-rhodamine sm:text-xl lg:text-2xl">
              Jobs
            </h4>
            <p className="mt-4">
              Please see the latest Who's Hiring thread on r/graphql
            </p>

            <h3 className="mb-6 mt-6 text-2xl font-extrabold tracking-tight text-rhodamine sm:text-2xl lg:text-3xl">
              Quote of the Week
            </h3>

            <blockquote className="border-l-4 border-solid border-rhodamine pl-4">
              <p>rust programmers when they see each other again:</p>
              <blockquote className="border-l-4 border-solid border-rhodamine pl-4">
                <p>Long time no C</p>
              </blockquote>
            </blockquote>
            <p>
              –{" "}
              <Link to="https://mond-basis.eu/@transcaffeine/110538051681033551">
                ciscoffeine on mond-basis.eu
              </Link>
            </p>

            <p className="mt-6 text-2xl">Like what you see? Subscribe!</p>
            <div className="">
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
            
          </div>
        </div>
      </div>
    </main>
  );
}
