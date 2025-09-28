import {Router} from "express"
const router = Router()

router.get("/", function(req, res){
	res.render("Home")
})

router.get("/contactanos", function(req, res){
	res.render("contactanos")
})
router.get("/info", function (re, res){
	res.render("info")
})
router.get("/inicio", function (re, res){
  res.render("inicio")
})
export default router