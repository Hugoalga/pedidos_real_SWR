import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="contenedor__admin">
            <aside className="imagen__contendor">
                <Image
                    width={200}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="contenido__contendor">
                <div className="ordenes__contendor">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}