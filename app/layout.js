import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import { getTaxonomy } from "./api/taxonomy";
import "../public/styles/styles.css";
import { Poppins } from "next/font/google";
import { connectMongoDb } from "../db/connectMongoDB";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // connect MongoDb
  connectMongoDb();

  let taxonomy = [];
  try {
    taxonomy = await getAllTaxonomies();
  } catch (err) {}
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="sAQLPrkKF0SQbmZjS7ci9_MIzmlfwR5983ZMfeIwzQ4"
        />
      </head>
      <body className={poppins.className}>
        <Header taxonomy={taxonomy} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const getAllTaxonomies = async () => {
  const res = await fetch(
    `http://localhost:3000/api/taxonomy/get-all-taxonomies`,
    {
      next: { revalidate: 3600 },
    }
  );
  let taxonomy = await res.json();
  return taxonomy;
};