import Head from "next/head";
import Date from "../components/Date";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  title?: string;
  created?: string;
  updated?: string;
  className?: string;
};

const Layout = ({
  children,
  title,
  created,
  updated,
  className = "",
}: Props): JSX.Element => {
  return (
    <div className="relative grid xl:max-w-screen-xl md:grid-cols-5 v-items-start v-content-baseline v-global-wrapper">
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}

      <header className="relative mb-4 col-span-full md:col-start-2 md:col-end-6">
        {title && (
          <h1 className="font-bold text-v-orange v-text-giant ">{title}</h1>
        )}
        <div className="bottom-0 right-0 pr-2 font-mono text-sm text-gray-350 md:absolute md:text-right min-w-max md:mr-8 xl:mr-0">
          {created && <Date created={created} />}
          {updated && <Date updated={updated} />}
        </div>
      </header>

      <Navigation />

      <main
        className={`grid md:grid-cols-12 gap-1 md:col-span-4 col-span-full ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
