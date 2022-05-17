function sortByPrice (arr, type)  {
    return arr.sort((a, b) => {
        if (type === 'asc') {
            return a.prices[0] - b.prices[0]
        } else {
            return b.prices[0] - a.prices[0]
        }
    })
}

function showCoursesInRange(courses, range) {
    //результирующий массив
    let res = []

    // делаем копию, для изменения значений null и сохранения значений null в массиве courses
    let dataForCheck = JSON.parse(JSON.stringify(courses))

    //приводим значения чтобы адекватно отфильтровать
    range[0] == null ? range[0] = 0 : null
    range[1] == null ? range[1] = Infinity : null

    for (let item of dataForCheck) {
        item.prices[0] === null ? item.prices[0] = 0 : null
        item.prices[1] === null ? item.prices[1] = Infinity : null
    }

    //фильтруем, т.к. индексы dataForCheck и courses одинаковы, пушим в результирующий массив объект по индексу
    dataForCheck.forEach((item, index) => {
        if (item.prices[1] >= range[0] && item.prices[0] <= range[1]) {

            res.push(courses[index])
        }
    })

    return sortByPrice(res, 'asc')
}


let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

let requiredRange1 = [null, 200]; // england, russia, france, china, kazakhstan, italy, usa
let requiredRange2 = [100, 350]; // england, russia, france, china, kazakhstan, italy, usa
let requiredRange3 = [200, null]; // russia, france, china, kazakhstan, italy, usa, germany

console.log(showCoursesInRange(courses, requiredRange1))
console.log(showCoursesInRange(courses, requiredRange2))
console.log(showCoursesInRange(courses, requiredRange3))