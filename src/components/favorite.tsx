import { Stack, Button } from "@chakra-ui/react";
import { Singleton } from "./singleton";

export const Favorite = ({}) => {
  const lookFavorite = () => {
    const singleton = Singleton.getInstance();
    const nameList: string[] = [];
    singleton.getItemList().forEach((item) => {
      nameList.push(item.name);
    });
    console.log(nameList);
  };
  return (
    <div>
      <Stack
        spacing={3}
        width="300px"
      >
        <Button
          onClick={lookFavorite}
          id="favorite"
          color="#61dafb"
          style={{ marginTop: "24px", width: "180px" }}
        >お気に入り一覧を見る</Button>
      </Stack>
    </div>
  );
};
