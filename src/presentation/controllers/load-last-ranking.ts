import { LastRankingLoader } from "../../domain/usecases";
import { Controller, HttpResponse, ok } from "../contracts";
import { RankingScoreViewModel } from "../view-moidels";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader){}
  
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>>{
    const ranking = await this.lastRankingLoader.load()
    const viewModels = ranking.map(item => ({
      ...item,
      matchDate: item.matchDate.toISOString()
    }))
    return ok(viewModels)
  }
}