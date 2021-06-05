import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Gear from "../components/Gear";
import Frame from "../components/Frame";
import useScrollPosition from "@react-hook/window-scroll";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>The Steelhold Elaborate Vision Conduits</title>
        <meta
          name="description"
          content="The Steelhold Elaborate Vision Conduits | Trystan Rivers 190076"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed inset-0 pointer-events-none z-50">
        <Gear invert />
        <Gear isBig gearType={2} className="-mt-2" />
      </div>

      <div className="fixed inset-0 pointer-events-none flex items-end left-12 z-50">
        <Gear invert className="-mb-4" />
        <Gear isBig gearType={2} className="-ml-4" />
        <Gear invert className="mb-8 -ml-2" />
        <Gear gearType={2} className="-mb-14 -ml-16" isBig />
      </div>

      <div className="fixed inset-0 pointer-events-none flex items-start justify-end z-50">
        <Gear invert isBig gearType={2} className="mr-8 -mt-10 " />
      </div>

      <div
        className=" flex items-start justify-center md:px-12 lg:px-40 relative bg-cover"
        style={{
          backgroundImage: "url(../grunge-texture-12-1920x1080.jpg)",
          height: "110vh",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <img src="../Group 1.png" className="" style={{}} />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background:
              " linear-gradient(180deg, rgba(2,0,36,0) 7%, rgba(0,0,0,0.4234068627450981) 32%, rgba(0,0,0,0.6755077030812324) 53%, rgba(0,0,0,1) 81%)",
          }}
        />
      </div>
      {/* <div style={{ height: "300vh" }}></div> */}

      <div
        className=" flex items-center justify-center"
        style={{ height: "50vh" }}
      >
        <h2
          className="font-medium text-6xl opacity-60 text-center"
          style={{
            textShadow: "rgb(0 0 0) 1px 1px 0px, rgb(75 60 53) 4px 4px 0px",
            color: "rgb(251 206 116)",
          }}
        >
          For The Modern Artificer
        </h2>
      </div>
      <div
        className="border-t border-white w-screen max-w-xs md:max-w-6xl mx-auto opacity-60"
        style={{ borderColor: "rgb(251 206 116)" }}
      />
      <div
        className=" flex flex-col items-center justify-center max-w-4xl mx-auto "
        style={{ height: "50vh" }}
      >
        <h2
          className="font-medium text-6xl opacity-60 text-center md:text-left"
          style={{
            textShadow: "rgb(0 0 0) 1px 1px 0px, rgb(75 60 53) 4px 4px 0px",
            color: "rgb(251 206 116)",
          }}
        >
          "No self-respecting <br /> Journeyman should be without one"
        </h2>
        <h2
          className="font-medium text-4xl opacity-60 self-end text-center md:text-right"
          style={{
            textShadow: "rgb(0 0 0) 1px 1px 0px, rgb(75 60 53) 4px 4px 0px",
            color: "rgb(251 206 116)",
          }}
        >
          -Reginald Lafe Castleton
        </h2>
      </div>
      <div
        className="border-t border-white w-screen max-w-xs md:max-w-6xl mx-auto opacity-60"
        style={{ borderColor: "rgb(251 206 116)" }}
      />
      <div
        className=" flex flex-col items-center justify-center max-w-4xl mx-auto text-center"
        style={{ height: "50vh" }}
      >
        <h2
          className="font-medium text-6xl opacity-60"
          style={{
            textShadow: "rgb(0 0 0) 1px 1px 0px, rgb(75 60 53) 4px 4px 0px",
            color: "rgb(251 206 116)",
          }}
        >
          Ocular? I barely know her.
        </h2>
      </div>

      <div className="my-32">
        <Frame />
      </div>
      <footer
        className=" flex items-end  justify-center text-center pb-20 md:pb-0 px-8 md:px-40 relative bg-cover"
        style={{
          backgroundImage: "url(../grunge-texture-12-1920x1080.jpg)",
          height: "30vh",
        }}
      >
        <h4
          className="py-8 text-lg font-bold "
          style={{
            color: "#0A0600",
            textShadow:
              "rgb(255, 255, 255, 0.3) 1px 1px 0px, rgb(75 60 53) 4px 4px 0px",
          }}
        >
          Made by Trystan Rivers | 190076 | Open Window
        </h4>
        <div
          className="absolute top-0 left-0 right-0 h-48"
          style={{
            background:
              " linear-gradient(0deg, rgba(2,0,36,0) 7%, rgba(0,0,0,0.4234068627450981) 32%, rgba(0,0,0,0.6755077030812324) 53%, rgba(0,0,0,1) 81%)",
          }}
        />
      </footer>
    </div>
  );
}
