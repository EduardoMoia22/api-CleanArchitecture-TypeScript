import { LoadLastRankingRepository } from "../../application/contracts";
import { RankingScoreModel } from "../../application/models";
import { ranking } from "../data-sources";

export class FakeRankingRepository implements LoadLastRankingRepository{
  async loadLastRanking(): Promise<RankingScoreModel[]>{
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}