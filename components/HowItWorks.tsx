import HeroVideoDialog from "./ui/hero-video-dialog";

export function SafariDemo() {
  return (
    // <div className="bg-[#FCF3E1] rounded-xl mt-8 flex-col scroll-smooth px-8 py-2 lg:px-24">
    <div>
      {/* <div className="mx-auto py-8 px-4 space-y-4"> */}
      {/* <h1 className="!text-[#FF5100]">How it works</h1> */}
      {/* <div className=" scroll-smooth" id="howitworks"> */}
      {/* <Safari
          url="validea.com"
          className="size-full"
          //   imageSrc="/static/emailHeader.png"
          videoSrc="https://www.youtube.com/embed/g44zTojljEE?si=YKqEvMV1PLgJuQTY"
          // width={500}
          // height={500}
        /> */}
      <div className="relative" id="howitworks">
        <HeroVideoDialog
          className=" block w-1/2 mx-auto pt-16"
          animationStyle="fade"
          videoSrc="https://www.youtube.com/embed/g44zTojljEE?si=YKqEvMV1PLgJuQTY"
          thumbnailSrc="https://pbs.twimg.com/media/Gf9RGKJbEAAPl0Q?format=jpg&name=large"
          thumbnailAlt="Validea Demo"
        />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
