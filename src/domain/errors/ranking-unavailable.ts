export class RankingUnavailableError extends Error{
  constructor(){
    super('Ranking unavailable')
    this.name = 'RankingUnavailableError'
  }
}