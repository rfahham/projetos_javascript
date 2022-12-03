import delay from './delay'
import people from '/people'

const add = async function(a,b) {

    delay(10)

    if (a < 0) throw new Error('Not Supported')

    return a + b

}

const result = await add(2, 3)

result 

people.map(p => p.age)[0]