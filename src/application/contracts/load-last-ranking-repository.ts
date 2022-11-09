import { RankingScoreModel } from "../models";

export interface LoadLastRankingRepository{
  loadLastRanking: () => Promise<RankingScoreModel[]>
}