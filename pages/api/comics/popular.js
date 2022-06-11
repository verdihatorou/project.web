import { getComics } from '../../../utils/scraper'

export default async function Comics(req, res) {
  const { max_results } = req.query

  const popular = await getComics({ order: 'popular' }, max_results)

  res.status(200).json({
    code: 200,
    message: `Daftar ${popular.length} komik terpopuler.`,
    data: popular
  })
}
