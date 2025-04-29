import { TwitterXIcon, WarpcastIcon } from "@/assets/svg";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Left item */}
        <p className="text-sm text-[var(--desc-text-color)]">
          Powered by <b className="font-medium text-black">USDC Near Me</b>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* Warpcast Icon and link to warpcast frame for USDC near me */}
          <a
            href="https://warpcast.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Warpcast"
          >
            <WarpcastIcon />
          </a>

          {/* Twitter Icon and link to twitter(X) for USDC near me*/}
          <a
            href="https://twitter.com/usdcnearme"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterXIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
