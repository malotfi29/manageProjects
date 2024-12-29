import Header from "../ui/Header";
import { FaRegDotCircle } from "react-icons/fa";

function Home() {
  return (
    <div className="h-screen bg-secondary-0">
      <Header />
      <div className="container xl:max-w-screen-xl ">
        <h1 className="text-center text-2xl font-bold pt-10">
          سایت دورکاری، برونسپاری پروژه و استخدام فریلنسر{" "}
        </h1>
        <h2 className="text-center text-lg font-bold py-10">
          فضایی برای رشد کسب و کار شما - پرداخت نهایی پس از رضایت از نتیجه کار{" "}
        </h2>
        <div className="grid grid-cols-4 ">
          <div className="hidden md:block ">
            <img className="h-full" src="/images/img1.png" alt="" />
          </div>
          <div className=" col-span-4 md:col-span-3 px-8 mr-8">
            <h2 className="text-2xl font-bold py-2">
              مزایای برونسپاری پروژه با فریلنسر{" "}
            </h2>
            <h3 className="text-base md:text-lg font-bold py-4 md:w-2/3">
              با فریلنسر می تونی فریلنسرها رو خیلی آسون پیدا کنی و انتخاب و
              مصاحبه شون کنی، به همین راحتی کار را به کاردان بسپار{" "}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-4 mt-6 ">
              <div className="flex flex-col md:px-10">
                <span className="font-bold mb-2 flex items-center gap-x-2">
                  <FaRegDotCircle  className="text-primary-600"/> ثبت پروژه رایگان
                </span>
                <span className="text-xs md:text-sm">
                  بدون هیچ هزینه ای و از هر مکانی پروژه خود را سفارش دهید
                </span>
              </div>
              <div className="flex flex-col md:px-10">
                <span className="font-bold mb-2 flex gap-x-2 items-center">
                  <FaRegDotCircle className="text-primary-600"/>
                  پشتیبانی سریع{" "}
                </span>
                <span className="text-xs md:text-sm ">
                  پاسخگویی سریع مشکلات از طریق تلفن و چت آنلاین امکان پذیر است
                </span>
              </div>
              <div className="flex flex-col md:px-10">
                <span className="font-bold mb-2 flex gap-x-2 items-center">
                  <FaRegDotCircle className="text-primary-600"/>
                  ثبت پروژه رایگان
                </span>
                <span className="text-xs md:text-sm ">
                  بدون هیچ هزینه ای و از هر مکانی پروژه خود را سفارش دهید
                </span>
              </div>
              <div className="flex flex-col md:px-10">
                <span className="font-bold mb-2 flex gap-x-2 items-center">
                  <FaRegDotCircle className="text-primary-600"/>
                  پشتیبانی سریع
                </span>
                <span className="text-xs md:text-sm ">
                  پاسخگویی سریع مشکلات از طریق تلفن و چت آنلاین امکان پذیر است
                </span>
              </div>
              <div className="flex flex-col md:px-10 ">
                <span className="font-bold mb-2 flex gap-x-2 items-center">
                  <FaRegDotCircle className="text-primary-600"/>
                  ثبت پروژه رایگان
                </span>
                <span className="text-xs md:text-sm">
                  بدون هیچ هزینه ای و از هر مکانی پروژه خود را سفارش دهید
                </span>
              </div>
              <div className="flex flex-col md:px-10">
                <span className="font-bold mb-2 flex gap-x-2 items-center">
                  <FaRegDotCircle className="text-primary-600"/>
                  پشتیبانی سریع
                </span>
                <span className="text-xs md:text-sm">
                  پاسخگویی سریع مشکلات از طریق تلفن و چت آنلاین امکان پذیر است
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
