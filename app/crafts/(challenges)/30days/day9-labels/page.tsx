import { BlockWrapper } from "@/components/layouts/block-wrapper";
import { Labels } from "./labels";
import {
  IconBriefcase2,
  IconUser,
  IconWallet,
  IconSpeakerphone,
  IconBan,
} from "@tabler/icons-react";
import {
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
} from "@/components/icons/priority";

export default function Day9Labels() {
  return (
    <BlockWrapper className="items-center justify-center p-6">
      <div className="flex items-center justify-center w-full gap-2 flex-wrap max-w-sm">
        <Labels name="Work" variant={"neutral"} icon={IconBriefcase2} />
        <Labels name="Personal" variant={"info"} icon={IconUser} />
        <Labels name="Finance" variant={"success"} icon={IconWallet} />
        <Labels name="Promotions" variant={"warn"} icon={IconSpeakerphone} />
        <Labels name="Spam" variant={"error"} icon={IconBan} />
        <Labels
          name="Low Priority"
          variant={"neutral"}
          icon={PriorityLowIcon}
        />
        <Labels
          name="Medium Priority"
          variant={"neutral"}
          icon={PriorityMediumIcon}
        />
        <Labels
          name="High Priority"
          variant={"neutral"}
          icon={PriorityHighIcon}
        />
      </div>
    </BlockWrapper>
  );
}
