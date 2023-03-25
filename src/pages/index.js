import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home({products}) {
  return (
   <div className="bg-gray-100 ">
     
      <Head>
        <title>Amazon 2.0</title>
        <link
          rel="icon"
          href="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        />
      </Head>

      <Header/>

<main className="max-w-screen-2xl mx-auto">
 
<Banner />
  <ProductFeed products={products} />
  </main>
</div>
  
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {props: {
    products,
  }
}
}

//Get >> https://fakestoreapi.com/products
//Drive >>> https://drive.google.com/uc?export=download&id=1Eh6shtp6d01XgOZKam_Sum644mJrTTuJ
