import { RankingScore } from "../../domain/entities";
import { RankingUnavailableError } from "../../domain/errors";
import { LastRankingLoader } from "../../domain/usecases";
import { LoadLastRankingRepository } from "../contracts/load-last-ranking-repository";

export class LastRankingLoaderService implements LastRankingLoader{
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository){}
  
  async load(): Promise<RankingScore[]>{
    if (new Date().getHours() > 21){
      throw new RankingUnavailableError()
    }
    return this.loadLastRankingRepository.loadLastRanking()
  }
}