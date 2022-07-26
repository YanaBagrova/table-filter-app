const router = require('express').Router();
const { response } = require('express');
const { City } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
    const { currentPage, perPage, filter1 } = req.body
    let result
    let cities
    // const filterArr = [
    //   {title: 'на русском', dbParam: 'name'},
    //   {title: 'на английском', dbParam: 'name'},
    //   {title: 'все', dbParam: 'name'},
    //   {title: 'жителей', dbParam: 'peopleAmmount'},
    //   {title: 'площадь', dbParam: 'square'},
    //   {title: 'солнечных дней в году', dbParam: 'sunnyDays'},
    //   {title: 'от Москвы', dbParam: 'distanceFromMoscow'},
    //   {title: 'от Экватора', dbParam: 'distanceFromEquator'},
    //   {title: 'с севевра на юг', dbParam: 'distanceFromNorthToSouth'},
    // ]
    // try {
      if (filter1 && Array.isArray(filter1)) {
        if (filter1[0] === 'на русском' || filter1[0] === 'на английском' || filter1[0] === 'все') {
          result = await City.findOne({ where: { name: filter1[1] } })
        } else if (filter1[0] === 'жителей') {
          result = await City.findOne({ where: { peopleAmmount: filter1[1] } })
        } else if (filter1[0] === 'площадь') {
          result = await City.findOne({ where: { square: filter1[1] } })
        } else if (filter1[0] === 'солнечных дней в году') {
          result = await City.findOne({ where: { sunnyDays: filter1[1] } })
        } else if (filter1[0] === 'от Москвы') {
          result = await City.findOne({ where: { distanceFromMoscow: filter1[1] } })
        } else if (filter1[0] === 'от Экватора') {
          result = await City.findOne({ where: { distanceFromEquator: filter1[1] } })
        } else if (filter1[0] === 'с севера на юг') {
          result = await City.findOne({ where: { distanceFromNorthToSouth: filter1[1] } })
        }
      } else {
        result = await City.findAll()
      }

    let start
    if (currentPage === 1) {
      start = 0
    } else {
      start = perPage * (currentPage - 1)
    }
    let end = perPage * currentPage

    function multiplyItems(item) {
      let newArr = []
      if (Array.isArray(item)) {
        for (let i = 0; i < 20; i++) {
          newArr.push(...item)
        }
      } else {
        for (let i = 0; i < 20; i++) {
          newArr.push(item)
        }
      }
      return newArr
    }

    let newResult
    if (result) {
      newResult = multiplyItems(result)
    } else {
      newResult = 'Мы не знаем такого города. Попробуйте ввести другие параметры.'
    }

    let finalResult
    if (filter1 && !Array.isArray(filter1) && typeof newResult !== 'string') {
      finalResult = filterResult(newResult)
    } else if (typeof newResult === 'string') {
      cities = newResult
    } else {
      finalResult = newResult
    }

    function filterResult(arr) {
      let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
      let result
      if (filter1 === 'составное') {
        let newArr = arr.filter((el) => !arr_EN.includes(el.name[0]))
        result = newArr.filter((el) => el.name.includes('_'))
      } else if (filter1 === 'простое') {
        let newArr = arr.filter((el) => !arr_EN.includes(el.name[0]))
        result = newArr.filter((el) => !el.name.includes('_'))
      } else if (filter1 === 'составное Eng') {
        let newArr = arr.filter((el) => !arr_RU.includes(el.name[0]))
        result = newArr.filter((el) => el.name.includes('_'))
      } else if (filter1 === 'простое Eng') {
        let newArr = arr.filter((el) => !arr_RU.includes(el.name[0]))
        result = newArr.filter((el) => !el.name.includes('_'))
      } else if (filter1 === 'на русском') {
        result = arr.filter((el) => !arr_EN.includes(el.name[0]))
      } else if (filter1 === 'на английском') {
        result = arr.filter((el) => !arr_RU.includes(el.name[0]))
      } else if (filter1 === 'по алфавиту') {
        result = arr.sort((a, b) => (a.name > b.name ? 1 : -1))
      } else if (filter1 === 'в обратном') {
        result = arr.sort((a, b) => (a.name < b.name ? 1 : -1))
      } else if (filter1 === 'миллионник') {
        result = arr.filter((el) => el.peopleAmmount >= 1000000)
      } else if (filter1 === 'меньше млна') {
        result = arr.filter((el) => el.peopleAmmount < 1000000)
      } else if (filter1 === 'больше 1000км2') {
        result = arr.filter((el) => el.square > 1000)
      } else if (filter1 === 'меньше 1000км2') {
        result = arr.filter((el) => el.square < 1000)
      } else if (filter1 === 'больше 200') {
        result = arr.filter((el) => el.sunnyDays >= 200)
      } else if (filter1 === 'меньше 200') {
        result = arr.filter((el) => el.sunnyDays < 200)
      } else if (filter1 === '> 1000км') {
        result = arr.filter((el) => el.distanceFromMoscow > 1000)
      } else if (filter1 === '< 1000км') {
        result = arr.filter((el) => el.distanceFromMoscow < 1000)
      } else if (filter1 === 'далеко') {
        result = arr.filter((el) => el.distanceFromEquator > 500)
      } else if (filter1 === 'близко') {
        result = arr.filter((el) => el.distanceFromEquator < 50)
      } else if (filter1 === '> 20км') {
        result = arr.filter((el) => el.distanceFromNorthToSouth >= 20)
      } else if (filter1 === '< 20км') {
        result = arr.filter((el) => el.distanceFromNorthToSouth < 20)
      } else {
        result = arr
      }
      return result
    }

    if (Array.isArray(finalResult)) {
      cities = finalResult.slice(start, end)
    }
    return res.json(cities);
    } catch (error) {
      return res.json()
    }
  });

module.exports = router;
