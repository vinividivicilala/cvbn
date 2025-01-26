import Image from "next/image";
import EmailContactLink from "../components/EmailContactLink";
import Layout from "../components/Layout";

export const GITHUB = "https://github.com/mrv1k";
export const LINKEDIN = "https://www.linkedin.com/in/vkhotimchenko/";

const AboutPage = (): JSX.Element => (
  <Layout title="About" className="prose v-layout v-underline-links">
    <h2>
      Hi, I&apos;m
      <span className="text-v-orange"> Viktor</span>
    </h2>

    <p>
      A front-end developer from Toronto, originally Almaty. During the day
      Software Engineer at Capgemini Engineering. During the night, trying to
      make this website the perfect personal place for public learning. The idea
      is to build a digital garden and a blog. Work in progress.
    </p>

    <aside className="relative row-start-2 row-end-7 md:row-start-1 v-col-right">
      <Image
        src="/portfolio/profile-big.jpg"
        width={1212}
        height={1212}
        alt="Image of Viktor"
        className="rounded image-of-me"
      />
    </aside>

    <h2 className="text-3xl font-semibold">How I got here</h2>
    <p>I wasn&apos;t always as happy and as determined with my career path.</p>
    <p>
      When I graduated college in 2015 I struggled to find a developer job. Soon
      after, I run out of money and had to get any job. I felt defeated and
      stopped writing code.
    </p>
    <p>
      I went like that till 2017 when having a job stopped being enough. I
      wanted a career. The question was, what career? The program I attended in
      college was very broad. Besides programming, I was introduced to 3D
      modeling, video editing, design and even print design. I tried treating
      all of them of work, and they were as boring as they were back in the
      college. Nothing could compare to programming.
    </p>
    <p>
      I had to become a developer at any cost. I got back up to speed with
      JavaScript (by reading YDKJS book series and completing FCC front-end
      path) and was hired by local e-commerce startup in 2018 where I worked for
      2 years.
    </p>
    <p>
      There, I was a sole developer responsible for all customer facing
      websites. To help me manage it, I developed a Node.js build system that
      enabled to share core functionality, improved performance and enabled A/B
      testing. I also developed a Vue.js components library that dramatically
      shortened website design to deployment cycle.
    </p>

    <h2>Now</h2>
    <p>
      Now is an exciting time in my life. I&apos;m not a junior developer
      anymore. I&apos;m confident in my developer skills and eager to take my
      engineering skills to the next level! Senior, here I come… in like a
      couple years of hard work ;)
    </p>

    <footer className="v-col-core">
      <h2 className="!mt-2 text-3xl font-semibold">Get in touch</h2>
      <p>
        Always happy to meet interesting people. Email is: <EmailContactLink />{" "}
      </p>
      <p>Cheers</p>
    </footer>
  </Layout>
);

export default AboutPage;
