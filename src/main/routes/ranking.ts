import { Router } from "express"
import { adaptRoute } from "../adapters"
import { makeLoadLastRankingController } from "../factories"

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()))
}