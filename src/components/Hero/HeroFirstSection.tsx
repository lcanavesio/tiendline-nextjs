import Link from "next/link";
import { useLanguage } from "../context/useLanguage";

const HeroFirtsSection = () => {
  const { content } = useLanguage();


  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp mx-auto max-w-[800px] text-center"
            data-wow-delay=".2s"
          >
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              {content?.firstContent?.description}
            </h1>
            <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
              {content?.secondContent?.description}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://nextjstemplates.com/templates/saas-starter-startup"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                📞 {content?.contact?.description}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroFirtsSection;
