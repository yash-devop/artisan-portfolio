import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
export const SocialHandle = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Handle
        name="Github"
        href="https://github.com/yash-devop"
        icon={
          <IconBrandGithub className="text-yellow-500 stroke-1 size-[30px]" />
        }
      />
      <Handle
        name="Twitter"
        href="https://x.com/yash_devop"
        icon={<IconBrandX className="text-neutral-500 stroke-1 size-[30px]" />}
      />
      <Handle
        name="Youtube"
        href="https://www.youtube.com/@DoerNation/streams"
        icon={
          <IconBrandYoutube className="text-black fill-red-500 stroke-1 size-[30px]" />
        }
      />
    </div>
  );
};

const Handle = ({
  icon,
  name,
  href,
}: {
  icon: React.ReactElement;
  name: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="h-14 border-b border-r border-border flex items-center px-6 gap-2 w-full hover:bg-border cursor-pointer select-none transition-colors"
    >
      <div className="w-fit rounded-xs p-0.5 shrink-0">{icon}</div>
      <div className="flex w-full justify-between items-center">
        <span>{name}</span>
        <IconArrowRight size={20} className="-rotate-45 text-neutral-400" />
      </div>
    </Link>
  );
};
