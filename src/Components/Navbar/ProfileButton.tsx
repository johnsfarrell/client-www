import {
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { getProfilePicture } from "../../Fetch";
import { signout } from "../SignOut";

export function ProfileButton() {
  const [profilePicture, setProfilePicture] = useState("");
  getProfilePicture().then((res) => setProfilePicture(res?.data));

  const handlePageChange = (hash: string) => {
    window.location.hash = hash;
  };

  return (
    <Menu>
      <MenuButton as={Button} rounded={"full"} variant={"link"}>
        <Avatar size={"sm"} src={profilePicture || ""}>
          <AvatarBadge bg="green.500" boxSize="1em" />
        </Avatar>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem onClick={() => handlePageChange("#college-list")}>
            My College List
          </MenuItem>
          <MenuItem onClick={() => handlePageChange("#profile")}>
            My Account
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="More Features">
          <MenuItem onClick={() => handlePageChange("#explore-college")}>
            Explore College
          </MenuItem>
          <MenuItem onClick={() => handlePageChange("#coming-soon")}>
            Maximize Acceptance
          </MenuItem>
          <MenuItem onClick={() => handlePageChange("#about-us")}>
            Learn More
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem onClick={signout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
