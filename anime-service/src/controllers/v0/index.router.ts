import { Router, Request, Response } from "express";
// import { FeedRouter } from './anime/routes/feed.router';
import { AnimeRouter } from "./anime/routes/anime.router";

const router: Router = Router();

// router.use('/feed', FeedRouter);
router.use("/anime", AnimeRouter);

router.get("/", async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
