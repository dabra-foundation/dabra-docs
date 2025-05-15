import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      <img src="./dabra-logo.png" width={30} height={30} />
      <b>Dabra</b>
    </div>
  ),
  docsRepositoryBase: "https://github.com/dabra-foundation/dabra-doc/tree/main",

  project: {
    link: "https://github.com/dabra-foundation/dabra-doc/tree/main",
  },

  chat: {
    link: "https://discord.gg/6UZHcNJFr8",
  },

  navbar: {
    extraContent: (
      <>
        <a
          href="https://twitter.com/dabra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.958 4.958 0 002.163-2.723 9.92 9.92 0 01-3.127 1.184 4.916 4.916 0 00-8.384 4.482 13.934 13.934 0 01-10.112-5.14 4.904 4.904 0 001.523 6.548 4.876 4.876 0 01-2.228-.616c-.054 2.162 1.515 4.188 3.763 4.64a4.905 4.905 0 01-2.212.083 4.928 4.928 0 004.604 3.417 9.872 9.872 0 01-6.102 2.104c-.395 0-.779-.023-1.17-.067a13.945 13.945 0 007.548 2.213c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.457-2.548z" />
          </svg>
        </a>
      </>
    ),
  },

  banner: {
    key: "2.0-release",
    text: (
      <a href="https://discord.gg/dabra" target="_blank">
        💡 Is something not documented? Reach out to us in Discord →
      </a>
    ),
  },

  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://dabra.app/" target="_blank">
          Dabra Today Ltd
        </a>
        .
      </span>
    ),
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Docs",
    };
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.dabra.app" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Dabra"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The home for on-chain communities in the Solana ecosystem."
          }
        />
      </>
    );
  },

  // ... other theme options
};
