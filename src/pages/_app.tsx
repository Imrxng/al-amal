import "@/styles/globals.css";
import "@/styles/header.component.css";
import "@/styles/footer.component.css";
import "@/styles/intro.component.css";
import "@/styles/homehadieth.component.css";
import "@/styles/jongerenwerkingmain.component.css";
import "@/styles/overons.component.css";
import "@/styles/infohome.component.css";
import "@/styles/gebedstijden.component.css";
import "@/styles/notfound.component.css";
import "@/styles/introcontact.component.css";
import "@/styles/formcontact.component.css";
import "@/styles/introdoneren.component.css";
import "@/styles/introlidworden.component.css";
import "@/styles/onderwijsmain.component.css";
import "@/styles/mobiledrawer.component.css";
import "@/styles/mediaqueries.component.css";

import type { AppProps } from "next/app";



// inspiratie links 
// https://moskee-elmouhssinine.nl/
// https://al-amal.be/#
// https://elislam.nl/
// https://ecc-de-hoop.webnode.be/
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}