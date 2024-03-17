import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";
import { Recommended } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";

export const Sidebar = async () => {
    const recommended = await getRecommended();
    // server component so fetch followed and recommended users
    return (
        <Wrapper>
            <Toggle />
            <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended data={recommended} />

            </div>
        </Wrapper>
    );
};