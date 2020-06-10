import { AppProps } from "next/app";
import { useContext } from "react";
import { context } from "../state/api.context";

function MyApp(Component, pageProps): AppProps {
  const defaultEnpoint = useContext(context);

  return (
    <AppStateProvider defaultEnpoint={defaultEnpoint}>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}

export default MyApp;
