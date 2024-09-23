//import localFont from "next/font/local";
import "@/assets/styles/globals.css";

export const metadata = {
  title: 'MonólitosHouse | Encontre seu imóvel perfeito',
  description: 'Encontre seu imóvel ideal',
  keywords: 'aluguel, encontrar alugueis, escontrar imoveis',
};

const LayoutPrincipal = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default LayoutPrincipal;

