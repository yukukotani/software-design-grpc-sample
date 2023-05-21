import { ServiceImpl } from "@bufbuild/connect";
import { ChatService } from "./gen/chat/v1/chat_connect";
export const chatServiceImpl: ServiceImpl<typeof ChatService> = {
  say(req, ctx) {
    return {
      sentence: `You said ${req.sentence}`,
    };
  },
};
