import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout
    title=""
    className="absolute -translate-y-1/2 top-1/2 md:static md:translate-y-0 md:top-auto"
  >
    <Head>
      <title>Viktor Khotimchenko</title>
    </Head>

    <div className="flex flex-wrap v-col-full">
      <header className="flex-initial md:v-basis-50">
        <span className="text-xl">Hi, my name is</span>
        <h1 className="font-bold v-text-giant">
          <span className="text-v-orange">Viktor Khotimchenko</span>.
        </h1>
      </header>

      <div className="flex-initial col-span-9 pt-3 v-text-giant md:v-basis-75">
        I bring designs to life with React and TypeScript
      </div>

      <p className="flex-initial py-6 md:v-basis-50">
        Building this site to be the coziest corner of the web for myself.
      </p>
    </div>
  </Layout>
);
export default IndexPage;
