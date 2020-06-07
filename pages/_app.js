import "../styles.css";

import { Provider } from "next-auth/client";

export default ({ Component, pageProps }) => {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};
