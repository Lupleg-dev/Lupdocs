// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logo: <strong>Lupleg Docs</strong>,
  project: {
    link: "https://github.com/lupleg-dev",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "Lupleg Docs - %s",
    };
  },
  footer: {
    text: "Copyright Lupleg Developer 2024",
  },
  
};