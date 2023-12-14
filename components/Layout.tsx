import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, children }: any) {
  return (
    <div id="layout" className="py-5 px-2  min-h-screen flex justify-center">
      <div className="border-2 max-w-2xl w-full rounded-md ">
        <Header title={title} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
