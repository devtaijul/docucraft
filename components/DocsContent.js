import React from "react";

export default function DocsContent() {
  return (
    <article className="prose dark:prose-invert">
      {/* Green Top Overlay */}
      <div className="absolute inset-0 mx-0 overflow-hidden -z-10 max-w-none">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100" />
        </div>
      </div>
      {/* Green Top Overlay End*/}
      <h1>API Documentation</h1>
      <p className="lead">
        Use the Protocol API to access contacts, conversations, group messages,
        and more and seamlessly integrate your product into the workflows of
        dozens of devoted Protocol users.
      </p>
      <div className="my-16 xl:max-w-none">
        <div className="flex gap-3 mt-6 mb-16 not-prose">
          <a className="buttonDark" href="/quickstart">
            {" "}
            Quickstart{" "}
          </a>
          <a className="buttonLight" href="/sdks">
            Explore SDKs
          </a>
        </div>
      </div>
      <h2>Getting started</h2>
      <p className="lead">
        To get started, create a new application in your
        <a href="#">developer settings</a> , then read about how to make
        requests for the resources you need to access using our HTTP APIs or
        dedicated client SDKs. When your integration is ready to go live,
        publish it to our <a href="#">integrations directory</a> to reach the
        Protocol community.
      </p>
      <div className="my-16 xl:max-w-none">
        <div className="not-prose">
          <a className="linkGreen" href="/sdks">
            Get your API key
          </a>
        </div>
      </div>
      <div className="my-16 xl:max-w-none">
        <h2 id="guides" className="scroll-mt-24">
          <a
            className="no-underline group text-inherit hover:text-inherit"
            href="#guides"
          >
            <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
              <div className="block w-5 h-5 transition rounded-lg group/anchor bg-zinc-50 ring-1 ring-inset ring-zinc-300 hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                <img src="./assets/icons/rightArrow.svg" alt="" />
              </div>
            </div>
            Guides
          </a>
        </h2>
        <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Authentication
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Learn how to authenticate your API requests.
            </p>
            <p className="mt-4">
              <a className="readMore" href="/authentication">
                <span>Read more</span>
                <img
                  src="./assets/icons/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                />
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Pagination
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Understand how to work with paginated responses.
            </p>
            <p className="mt-4">
              <a className="readMore" href="/authentication">
                <span>Read more</span>
                <img
                  src="./assets/icons/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                />
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Errors
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Read about the different types of errors returned by the API.
            </p>
            <p className="mt-4">
              <a className="readMore" href="/authentication">
                <span>Read more</span>
                <img
                  src="./assets/icons/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                />
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              Webhooks
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Learn how to programmatically configure webhooks for your app.
            </p>
            <p className="mt-4">
              <a className="readMore" href="/authentication">
                <span>Read more</span>
                <img
                  src="./assets/icons/rightArrow.svg"
                  className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Resources Section Starts */}
      <div className="my-16 xl:max-w-none">
        <h2 id="resources" className="scroll-mt-24">
          <a
            className="no-underline group text-inherit hover:text-inherit"
            href="#resources"
          >
            Resources
          </a>
        </h2>
        <div className="grid grid-cols-1 gap-8 pt-10 mt-4 border-t not-prose border-zinc-900/5 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
            <div className="relative px-4 pt-16 pb-4 rounded-2xl">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                <img
                  src="./assets/icons/contact.svg"
                  alt="Contacts"
                  className="w-5 h-5 transition-colors duration-300 fill-zinc-700/10 stroke-zinc-700 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                <a href="/contacts">
                  <span className="absolute inset-0 rounded-2xl" />
                  Contacts
                </a>
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Learn about the contact model and how to create, retrieve,
                update, delete, and list contacts.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Resources Section Ends */}
      {/* Test Section Starts */}
      <div>
        <h2 id="test" className="scroll-mt-24">
          <a
            className="no-underline group text-inherit hover:text-inherit"
            href="#test"
          >
            Test
          </a>
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          pariatur repellendus vero doloremque sint, quod aliquid possimus esse
          labore maxime quaerat error enim! Velit incidunt soluta pariatur
          doloribus hic! Distinctio earum ea enim repudiandae repellat vero
          dignissimos sequi optio nulla explicabo provident ipsum eaque
          incidunt, ducimus dolore dolor accusamus. Exercitationem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque
          quibusdam vel temporibus tempore eum, odio odit adipisci similique
          dolor a illo iusto deserunt voluptate perspiciatis aliquid ad id sed?
        </p>
      </div>
      {/* Test Section Ends */}
    </article>
  );
}
